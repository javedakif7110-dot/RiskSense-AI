import os
import sys

# Ensure root directory is in python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend.schemas import StudentInput, PredictionOutput, ModelInfoResponse, MetricDetail
from backend.model import predict_risk

app = FastAPI(
    title="RiskSense AI - Academic Performance Risk Prediction API",
    description="Machine Learning API for predicting student academic risk levels based on 5 indicators.",
    version="1.0.0"
)

# Enable CORS for frontend app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev simplicity
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "system": "RiskSense AI - Academic Performance Risk Prediction System",
        "institution": "Chennai Institute of Technology",
        "department": "Department of Computer Science and Engineering",
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.post("/predict", response_model=PredictionOutput)
def predict(data: StudentInput):
    try:
        result = predict_risk(
            attendance=data.attendance_percentage,
            internal=data.internal_assessment_marks,
            assignment=data.assignment_marks,
            quiz=data.quiz_marks,
            gpa=data.previous_semester_gpa
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/model-info", response_model=ModelInfoResponse)
def get_model_info():
    return ModelInfoResponse(
        algorithm="Random Forest Classifier",
        n_estimators=100,
        max_depth=8,
        features_count=5,
        dataset_records=2500,
        baseline_metrics=MetricDetail(
            accuracy=83.80,
            precision=83.25,
            recall=82.82,
            f1_score=83.02
        ),
        final_metrics=MetricDetail(
            accuracy=87.40,
            precision=88.64,
            recall=86.32,
            f1_score=87.34
        )
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
