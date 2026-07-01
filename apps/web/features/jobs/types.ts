export type JobStatus = "Draft" | "Hiring" | "Paused" | "Closed";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract";

  applicants: number;

  status: JobStatus;

  createdAt: string;
}
