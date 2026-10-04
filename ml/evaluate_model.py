import os
import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, classification_report

def evaluate():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    csv_path = os.path.join(base_dir, 'data', 'academic_performance_dataset_2500.csv')
    rf_path = os.path.join(base_dir, 'ml', 'saved_model', 'random_forest_model.joblib')
    dt_path = os.path.join(base_dir, 'ml', 'saved_model', 'decision_tree_model.joblib')

    if not os.path.exists(csv_path):
        print("Dataset not found. Running training step first...")
        from train_model import train_and_evaluate
        train_and_evaluate()
        return

    df = pd.read_csv(csv_path)
    X = df[['attendance_percentage', 'internal_assessment_marks', 'assignment_marks', 'quiz_marks', 'previous_semester_gpa']]
    y = df['Risk_Level']

    _, X_test, _, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    dt_model = joblib.load(dt_path)
    rf_model = joblib.load(rf_path)

    dt_pred = dt_model.predict(X_test)
    rf_pred = rf_model.predict(X_test)

    print("\n================ MODEL EVALUATION SUMMARY ================")
    print("Documented vs Actual Model Performance:")
    print("-" * 65)
    print(f"{'Metric':<15} | {'Decision Tree (Baseline)':<24} | {'Random Forest (Final)':<22}")
    print("-" * 65)
    
    dt_acc = accuracy_score(y_test, dt_pred)
    dt_p, dt_r, dt_f1, _ = precision_recall_fscore_support(y_test, dt_pred, average='macro')
    
    rf_acc = accuracy_score(y_test, rf_pred)
    rf_p, rf_r, rf_f1, _ = precision_recall_fscore_support(y_test, rf_pred, average='macro')

    print(f"{'Accuracy':<15} | {dt_acc*100:>21.2f}% | {rf_acc*100:>20.2f}%")
    print(f"{'Precision':<15} | {dt_p*100:>21.2f}% | {rf_p*100:>20.2f}%")
    print(f"{'Recall':<15} | {dt_r*100:>21.2f}% | {rf_r*100:>20.2f}%")
    print(f"{'F1-Score':<15} | {dt_f1*100:>21.2f}% | {rf_f1*100:>20.2f}%")
    print("-" * 65)

if __name__ == '__main__':
    evaluate()
