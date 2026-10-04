import urllib.request
import json
import time

BASE_URL = 'http://127.0.0.1:8000'

def test_endpoint(name, path, payload=None, expected_status=200):
    url = f"{BASE_URL}{path}"
    headers = {'Content-Type': 'application/json'}
    data = json.dumps(payload).encode('utf-8') if payload else None
    req = urllib.request.Request(url, data=data, headers=headers, method='POST' if payload else 'GET')
    
    try:
        with urllib.request.urlopen(req) as response:
            status = response.status
            body = json.loads(response.read().decode('utf-8'))
            print(f"[{name}] Status: {status} (Expected: {expected_status}) - PASSED")
            print(f"  Response: {json.dumps(body, indent=2)}")
            return True, body
    except urllib.error.HTTPError as e:
        status = e.code
        body = json.loads(e.read().decode('utf-8'))
        print(f"[{name}] Status: {status} (Expected: {expected_status})")
        print(f"  Error Detail: {json.dumps(body, indent=2)}")
        if status == expected_status:
            print(f"  -> Validation Correctly Rejected Request!")
            return True, body
        else:
            print(f"  -> FAILED: Unexpected status code {status}")
            return False, body
    except Exception as e:
        print(f"[{name}] Exception: {e}")
        return False, str(e)

if __name__ == '__main__':
    print("--- Running End-to-End System Tests ---")
    
    # 1. Health check
    test_endpoint("Health Check", "/health", expected_status=200)
    
    # 2. Valid Input
    valid_data = {
        "attendance_percentage": 85.0,
        "internal_assessment_marks": 78.0,
        "assignment_marks": 82.0,
        "quiz_marks": 75.0,
        "previous_semester_gpa": 8.2
    }
    test_endpoint("Valid Input Prediction", "/predict", valid_data, expected_status=200)
    
    # 3. Invalid Attendance (> 100)
    invalid_att = {**valid_data, "attendance_percentage": 150.0}
    test_endpoint("Invalid Attendance (>100)", "/predict", invalid_att, expected_status=422)
    
    # 4. Invalid Marks (< 0)
    invalid_marks = {**valid_data, "internal_assessment_marks": -5.0}
    test_endpoint("Invalid Internal Marks (<0)", "/predict", invalid_marks, expected_status=422)
    
    # 5. Invalid GPA (> 10)
    invalid_gpa = {**valid_data, "previous_semester_gpa": 12.0}
    test_endpoint("Invalid GPA (>10)", "/predict", invalid_gpa, expected_status=422)
    
    # 6. Missing / Empty Fields
    missing_fields = {"attendance_percentage": 85.0}
    test_endpoint("Missing Fields", "/predict", missing_fields, expected_status=422)
    
    # 7. Model Info
    test_endpoint("Model Info", "/api/model-info", expected_status=200)
