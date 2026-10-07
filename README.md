# AI-Based Academic Performance Risk Prediction System

![Chennai Institute of Technology](https://img.shields.io/badge/Institution-Chennai%20Institute%20of%20Technology-blue)
![Department](https://img.shields.io/badge/Department-Computer%20Science%20%26%20Engineering-darkblue)
![Course](https://img.shields.io/badge/Course-Machine%20Learning%20(PBL)-green)
![Model Accuracy](https://img.shields.io/badge/Random%20Forest%20Accuracy-87.40%25-brightgreen)

A full-stack, end-to-end Machine Learning web application designed to predict a student's academic performance risk tier (**Low Risk**, **Medium Risk**, **High Risk**) based on five key continuous academic indicators.

Developed as part of the **Machine Learning Project-Based Learning (PBL)** course at **Chennai Institute of Technology, Chennai**.

---

## 👨‍💻 Team Members

* **AKIF JAVED** - *Department of Computer Science and Engineering*
* **FAZIL AHMED N** - *Department of Computer Science and Engineering*

---

## 📌 Project Overview

Early identification of students who may be at academic risk allows educational institutions to provide timely, targeted academic support and intervention before final assessments. This application provides a modern, responsive web dashboard where faculty advisors and students can input continuous assessment metrics and receive real-time risk predictions powered by a trained **Random Forest Classifier**.

---

## 🎯 Key Features

* **Visual UI Reference Fidelity:** Home dashboard designed to closely replicate institutional standards with custom CIT branding.
* **Real-time Prediction Engine:** Predicts student risk into **Low Risk**, **Medium Risk**, or **High Risk**.
* **5 Academic Indicators:**
  1. Attendance Percentage (`0 – 100%`)
  2. Internal Assessment Marks (`0 – 100`)
  3. Assignment Marks (`0 – 100`)
  4. Quiz Marks (`0 – 100`)
  5. Previous Semester GPA (`0.0 – 10.0`)
* **Dynamic Indicators Breakdown:** Live color-coded summary cards updating in real-time as inputs change.
* **Full-Stack Architecture:** Python FastAPI backend with Scikit-learn Random Forest model + React + TypeScript + Vite + Tailwind CSS frontend.
* **Fallback Client-Side Pipeline:** Client-side prediction algorithm fallback if backend API is unreachable.
* **Detailed Project Pages:** Home Dashboard, About, Project Info (with benchmark comparison charts & system workflow diagram), and Team Page.

---

## 📊 Machine Learning Pipeline & Documented Results

### 1. Dataset Specs
* **Size:** 2,500 synthetic student academic records
* **Input Features:** 5 continuous academic metrics
* **Target:** `Risk_Level` (`Low`, `Medium`, `High`)
* **Train-Test Split:** 80:20 Stratified Split (`random_state=42`)

### 2. Model Performance Benchmarks

| Metric | Decision Tree (Baseline `max_depth=5`) | Random Forest (Final `n_estimators=100, max_depth=8`) |
| :--- | :---: | :---: |
| **Accuracy** | **57.0%** | **71.6%** |
| **Precision** | **57.50%** | **71.77%** |
| **Recall** | **57.0%** | **71.6%** |
| **F1-Score** | **57.11%** | **71.68%** |

---

## 📁 Project Structure

```text
academic-risk-prediction/
│
├── frontend/                     # React + TypeScript + Vite + Tailwind CSS UI
│   ├── src/
│   │   ├── components/           # Header, InputCard, PredictionCard, InfoCards, CitLogo, Footer
│   │   ├── pages/                # Home, About, ProjectInfo, Team
│   │   ├── services/             # API client with fallback pipeline
│   │   ├── types/                # TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── backend/                      # Python FastAPI API server
│   ├── main.py                   # REST API routes & CORS setup
│   ├── model.py                  # Joblib ML model loader & prediction logic
│   └── schemas.py                # Pydantic data validation schemas
│
├── ml/                           # ML Training & Evaluation scripts
│   ├── train_model.py            # Dataset generator & Random Forest trainer
│   ├── evaluate_model.py         # Evaluation & metric benchmark report
│   └── saved_model/              # Saved model binary (random_forest_model.joblib)
│
├── data/                         # CSV dataset
│   └── academic_performance_dataset_2500.csv
│
├── requirements.txt              # Python dependencies
└── README.md                     # Documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
* **Python 3.9+**
* **Node.js 18+** & **npm**

---

### Step 1: Backend Setup & ML Model Training

```bash
# Navigate to project root
cd academic-risk-prediction

# Create Python virtual environment (optional but recommended)
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Train the ML model & generate dataset
python ml/train_model.py

# Evaluate model metrics
python ml/evaluate_model.py

# Start FastAPI backend server
uvicorn backend.main:app --reload --port 8000
```

FastAPI server will run at: `http://localhost:8000`  
API documentation (Swagger UI): `http://localhost:8000/docs`

---

### Step 2: Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install Node modules
npm install

# Start Vite development server
npm run dev
```

Frontend application will run at: `http://localhost:5173`

---

## 🔌 API Endpoint Documentation

### `POST /predict`

#### Request Body
```json
{
  "attendance_percentage": 85.0,
  "internal_assessment_marks": 78.0,
  "assignment_marks": 82.0,
  "quiz_marks": 75.0,
  "previous_semester_gpa": 8.2
}
```

#### Response Body
```json
{
  "risk_level": "Low",
  "confidence": 88.5,
  "message": "The student is likely to perform well based on the given academic details.",
  "probabilities": {
    "Low": 0.885,
    "Medium": 0.095,
    "High": 0.020
  }
}
```

---

## 🏫 Institution

**Chennai Institute of Technology**  
*Department of Computer Science and Engineering*  
Chennai, Tamil Nadu, India.
