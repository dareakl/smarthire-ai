export interface DashboardStat {
  id: string;
  title: string;
  value: number;
  change: string;
  trend: "up" | "down";
}

export interface RecentJob {
  id: string;
  title: string;
  department: string;
  applicants: number;
  status: "Hiring" | "Closed";
}

export interface RecentCandidate {
  id: string;
  name: string;
  role: string;
  score: number;
  stage: string;
}

export interface AIActivity {
  id: string;
  action: string;
  timestamp: string;
}
