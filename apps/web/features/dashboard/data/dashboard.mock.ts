import {
  DashboardStat,
  RecentJob,
  RecentCandidate,
  AIActivity,
} from "../types";

export const dashboardStats: DashboardStat[] = [
  {
    id: "jobs",
    title: "Active Jobs",
    value: 12,
    change: "+2 this week",
    trend: "up",
  },
  {
    id: "candidates",
    title: "Candidates",
    value: 248,
    change: "+18%",
    trend: "up",
  },
  {
    id: "interviews",
    title: "Interviews",
    value: 32,
    change: "Today",
    trend: "up",
  },
  {
    id: "offers",
    title: "Offers",
    value: 7,
    change: "+1",
    trend: "up",
  },
];

export const recentJobs: RecentJob[] = [
  {
    id: "1",
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    applicants: 24,
    status: "Hiring",
  },
  {
    id: "2",
    title: "AI Engineer",
    department: "AI",
    applicants: 14,
    status: "Hiring",
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Infrastructure",
    applicants: 8,
    status: "Closed",
  },
];

export const recentCandidates: RecentCandidate[] = [
  {
    id: "1",
    name: "Rahul M.",
    role: "Senior React Developer",
    score: 92,
    stage: "Interview",
  },
  {
    id: "2",
    name: "Priya S.",
    role: "Backend Engineer",
    score: 87,
    stage: "Shortlisted",
  },
];

export const aiActivity: AIActivity[] = [
  {
    id: "1",
    action: "Screened 12 resumes",
    timestamp: "5 mins ago",
  },
  {
    id: "2",
    action: "Generated interview questions",
    timestamp: "30 mins ago",
  },
];
