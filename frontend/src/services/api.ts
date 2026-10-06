import { StudentInputData, PredictionResponse } from '../types';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000';

function computeOfflinePrediction(payload: {
  attendance_percentage: number;
  internal_assessment_marks: number;
  assignment_marks: number;
  quiz_marks: number;
  previous_semester_gpa: number;
}): PredictionResponse {
  const att = isNaN(payload.attendance_percentage) ? 0 : payload.attendance_percentage;
  const int = isNaN(payload.internal_assessment_marks) ? 0 : payload.internal_assessment_marks;
  const assign = isNaN(payload.assignment_marks) ? 0 : payload.assignment_marks;
  const quiz = isNaN(payload.quiz_marks) ? 0 : payload.quiz_marks;
  const gpa = isNaN(payload.previous_semester_gpa) ? 0 : payload.previous_semester_gpa;

  const score = (
    0.35 * att +
    0.25 * int +
    0.15 * assign +
    0.10 * quiz +
    0.15 * (gpa * 10)
  );

  let risk_level: 'Low' | 'Medium' | 'High';
  let message: string;

  if (att < 60 || int < 40) {
    if (score < 52 || att < 50) {
      risk_level = 'High';
    } else {
      risk_level = 'Medium';
    }
  } else if (score >= 73) {
    risk_level = 'Low';
  } else if (score >= 56) {
    risk_level = 'Medium';
  } else {
    risk_level = 'High';
  }

  if (risk_level === 'Low') {
    message = 'The student is likely to perform well based on the given academic details.';
  } else if (risk_level === 'Medium') {
    message = 'The student may require moderate academic support and monitoring.';
  } else {
    message = 'The student may require timely academic support and intervention.';
  }

  let confidence = 85.0;
  if (risk_level === 'High') {
    confidence = Math.min(99.9, Math.max(75.0, Math.round((1 - score / 100) * 1000) / 10));
  } else if (risk_level === 'Low') {
    confidence = Math.min(99.9, Math.max(75.0, Math.round((score / 100) * 1000) / 10));
  } else {
    confidence = 88.5;
  }

  return {
    risk_level,
    confidence,
    message,
    is_offline: true
  };
}

export async function getRiskPrediction(input: StudentInputData): Promise<PredictionResponse> {
  const payload = {
    attendance_percentage: parseFloat(input.attendance) || 0,
    internal_assessment_marks: parseFloat(input.internal) || 0,
    assignment_marks: parseFloat(input.assignment) || 0,
    quiz_marks: parseFloat(input.quiz) || 0,
    previous_semester_gpa: parseFloat(input.gpa) || 0
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.detail || `Backend returned status ${response.status}`);
    }

    const data: PredictionResponse = await response.json();
    return data;
  } catch (err: any) {
    console.warn('Backend service unavailable, using client ML engine fallback:', err?.message || err);
    return computeOfflinePrediction(payload);
  }
}


