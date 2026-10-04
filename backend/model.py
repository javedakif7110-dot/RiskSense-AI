import os
import joblib
import pandas as pd
import numpy as np

MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'ml', 'saved_model', 'random_forest_model.joblib')
_model = None

def get_model():
    global _model
    if _model is None:
        if not os.path.exists(MODEL_PATH):
            print("Saved model file not found! Generating and training model...")
            from ml.train_model import train_and_evaluate
            train_and_evaluate()
        _model = joblib.load(MODEL_PATH)
    return _model

def predict_risk(attendance: float, internal: float, assignment: float, quiz: float, gpa: float):
    model = get_model()
    
    # Feature DataFrame matching exact feature names
    input_df = pd.DataFrame([{
        'attendance_percentage': attendance,
        'internal_assessment_marks': internal,
        'assignment_marks': assignment,
        'quiz_marks': quiz,
        'previous_semester_gpa': gpa
    }])
    
    # Model prediction
    pred_class = model.predict(input_df)[0]
    
    # Standardize string format
    pred_class_str = str(pred_class).capitalize()
    if pred_class_str not in ['Low', 'Medium', 'High']:
        pred_class_str = 'Medium'
        
    # Calculate model probabilities if available
    confidence = None
    prob_dict = None
    if hasattr(model, "predict_proba"):
        probs = model.predict_proba(input_df)[0]
        classes = list(model.classes_)
        prob_dict = {str(c).capitalize(): float(p) for c, p in zip(classes, probs)}
        if pred_class in classes:
            idx = list(classes).index(pred_class)
            confidence = round(float(probs[idx]) * 100, 1)
            
    # Tailored messages according to specifications
    if pred_class_str == 'Low':
        message = "The student is likely to perform well based on the given academic details."
    elif pred_class_str == 'Medium':
        message = "The student may require moderate academic support and monitoring."
    else:  # High
        message = "The student may require timely academic support and intervention."
        
    return {
        "risk_level": pred_class_str,
        "confidence": confidence,
        "message": message,
        "probabilities": prob_dict
    }
