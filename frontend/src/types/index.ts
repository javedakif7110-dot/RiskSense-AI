export interface StudentInputData {
  attendance: string;
  internal: string;
  assignment: string;
  quiz: string;
  gpa: string;
}

export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface PredictionResponse {
  risk_level: RiskLevel;
  confidence?: number;
  message: string;
  probabilities?: Record<string, number>;
  is_offline?: boolean;
}

export type NavigationTab = 'home' | 'about' | 'project-info' | 'team';
