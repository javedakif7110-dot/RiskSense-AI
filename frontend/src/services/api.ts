import { StudentInputData, PredictionResponse } from '../types';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000';

export async function getRiskPrediction(input: StudentInputData): Promise<PredictionResponse> {
  const payload = {
    attendance_percentage: parseFloat(input.attendance),
    internal_assessment_marks: parseFloat(input.internal),
    assignment_marks: parseFloat(input.assignment),
    quiz_marks: parseFloat(input.quiz),
    previous_semester_gpa: parseFloat(input.gpa)
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
    if (err.name === 'AbortError') {
      throw new Error('Prediction service unavailable. Request timed out.');
    }
    if (err.message && !err.message.includes('fetch')) {
      throw err;
    }
    throw new Error('Prediction service unavailable. Please start the backend.');
  }
}

