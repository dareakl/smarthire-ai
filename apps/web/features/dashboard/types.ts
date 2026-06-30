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
  applicants: number;
  status: "Hiring" | "Closed";
  department: string;
}

export interface RecentCandidate {
  id: string;
  name: string;
  role: string;
  score: number;
  stage: string;
}

export interface AIActivityItem {
  id: string;
  action: string;
  timestamp: string;
}
