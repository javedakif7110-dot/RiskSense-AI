from pydantic import BaseModel, Field
from typing import Dict, Optional

class StudentInput(BaseModel):
    attendance_percentage: float = Field(..., ge=0, le=100, description="Attendance Percentage (0-100)")
    internal_assessment_marks: float = Field(..., ge=0, le=100, description="Internal Assessment Marks (0-100)")
    assignment_marks: float = Field(..., ge=0, le=100, description="Assignment Marks (0-100)")
    quiz_marks: float = Field(..., ge=0, le=100, description="Quiz Marks (0-100)")
    previous_semester_gpa: float = Field(..., ge=0, le=10, description="Previous Semester GPA (0-10)")

    class Config:
        json_schema_extra = {
            "example": {
                "attendance_percentage": 85.0,
                "internal_assessment_marks": 78.0,
                "assignment_marks": 82.0,
                "quiz_marks": 75.0,
                "previous_semester_gpa": 8.2
            }
        }

class PredictionOutput(BaseModel):
    risk_level: str  # "Low", "Medium", "High"
    confidence: Optional[float] = None  # Percentage e.g. 88.5
    message: str
    probabilities: Optional[Dict[str, float]] = None

class MetricDetail(BaseModel):
    accuracy: float
    precision: float
    recall: float
    f1_score: float

class ModelInfoResponse(BaseModel):
    algorithm: str = "Random Forest Classifier"
    n_estimators: int = 100
    max_depth: int = 8
    features_count: int = 5
    dataset_records: int = 2500
    baseline_metrics: MetricDetail
    final_metrics: MetricDetail
