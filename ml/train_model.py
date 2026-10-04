import os
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, classification_report
import joblib

def generate_dataset(num_samples=2500, random_state=42):
    np.random.seed(random_state)
    
    # Latent diligence capability factor S ~ Normal(70, 15), bounded [35, 98]
    base_capability = np.clip(np.random.normal(70, 15, num_samples), 35, 98)
    
    # Correlated academic features
    attendance = np.clip(base_capability + np.random.normal(0, 6, num_samples), 40, 100)
    internal = np.clip(base_capability + np.random.normal(0, 7, num_samples), 25, 100)
    assignment = np.clip(base_capability + np.random.normal(0, 8, num_samples), 30, 100)
    quiz = np.clip(base_capability + np.random.normal(0, 9, num_samples), 20, 100)
    gpa = np.clip((base_capability / 10.0) + np.random.normal(0, 0.5, num_samples), 4.0, 10.0)
    
    # Weighted composite index score
    score = (
        0.35 * attendance +
        0.25 * internal +
        0.15 * assignment +
        0.10 * quiz +
        0.15 * (gpa * 10)
    )
    
    # Controlled realistic noise representing unobserved factors
    noise = np.random.normal(0, 4.5, num_samples)
    final_score = score + noise
    
    risk_level = []
    for i in range(num_samples):
        att_val = attendance[i]
        int_val = internal[i]
        s_val = final_score[i]
        
        # Policy rules + composite threshold
        if att_val < 60.0 or int_val < 40.0:
            if s_val < 52.0 or att_val < 50.0:
                risk_level.append('High')
            else:
                risk_level.append('Medium')
        elif s_val >= 73.0:
            risk_level.append('Low')
        elif s_val >= 56.0:
            risk_level.append('Medium')
        else:
            risk_level.append('High')
            
    df = pd.DataFrame({
        'attendance_percentage': np.round(attendance, 1),
        'internal_assessment_marks': np.round(internal, 1),
        'assignment_marks': np.round(assignment, 1),
        'quiz_marks': np.round(quiz, 1),
        'previous_semester_gpa': np.round(gpa, 2),
        'Risk_Level': risk_level
    })
    
    return df

def train_and_evaluate():
    data_dir = os.path.join(os.path.dirname(__file__), '..', 'data')
    os.makedirs(data_dir, exist_ok=True)
    csv_path = os.path.join(data_dir, 'academic_performance_dataset_2500.csv')
    
    df = generate_dataset(num_samples=2500, random_state=42)
    df.to_csv(csv_path, index=False)
    print(f"Dataset saved to {csv_path}")
    print("Class distribution:")
    print(df['Risk_Level'].value_counts())
    
    X = df[['attendance_percentage', 'internal_assessment_marks', 'assignment_marks', 'quiz_marks', 'previous_semester_gpa']]
    y = df['Risk_Level']
    
    # 80:20 Stratified train-test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    # Baseline Decision Tree Model
    dt_model = DecisionTreeClassifier(max_depth=5, random_state=42)
    dt_model.fit(X_train, y_train)
    dt_pred = dt_model.predict(X_test)
    dt_acc = accuracy_score(y_test, dt_pred)
    dt_p, dt_r, dt_f1, _ = precision_recall_fscore_support(y_test, dt_pred, average='macro')
    
    print("\n--- Baseline Model: Decision Tree (max_depth=5) ---")
    print(f"Accuracy : {dt_acc * 100:.2f}%")
    print(f"Precision: {dt_p * 100:.2f}%")
    print(f"Recall   : {dt_r * 100:.2f}%")
    print(f"F1-Score : {dt_f1 * 100:.2f}%")
    
    # Final Random Forest Model
    rf_model = RandomForestClassifier(n_estimators=100, max_depth=8, random_state=42)
    rf_model.fit(X_train, y_train)
    rf_pred = rf_model.predict(X_test)
    rf_acc = accuracy_score(y_test, rf_pred)
    rf_p, rf_r, rf_f1, _ = precision_recall_fscore_support(y_test, rf_pred, average='macro')
    
    print("\n--- Final Model: Random Forest (n_estimators=100, max_depth=8, random_state=42) ---")
    print(f"Accuracy : {rf_acc * 100:.2f}%")
    print(f"Precision: {rf_p * 100:.2f}%")
    print(f"Recall   : {rf_r * 100:.2f}%")
    print(f"F1-Score : {rf_f1 * 100:.2f}%")
    
    # Save Random Forest Model
    saved_model_dir = os.path.join(os.path.dirname(__file__), 'saved_model')
    os.makedirs(saved_model_dir, exist_ok=True)
    model_path = os.path.join(saved_model_dir, 'random_forest_model.joblib')
    joblib.dump(rf_model, model_path)
    print(f"\nTrained Random Forest model successfully saved to {model_path}")
    
    # Save DT Model as baseline reference
    dt_model_path = os.path.join(saved_model_dir, 'decision_tree_model.joblib')
    joblib.dump(dt_model, dt_model_path)

if __name__ == '__main__':
    train_and_evaluate()
