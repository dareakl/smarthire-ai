import {
  BarChart3,
  BriefcaseBusiness,
  GitBranch,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  showInSidebar: boolean;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    subtitle: "Overview of your recruitment activity",
    href: "/dashboard",
    icon: LayoutDashboard,
    showInSidebar: true,
  },
  {
    title: "Jobs",
    subtitle: "Create and manage job postings",
    href: "/jobs",
    icon: BriefcaseBusiness,
    showInSidebar: true,
  },
  {
    title: "Candidates",
    subtitle: "Manage applicants and resumes",
    href: "/candidates",
    icon: Users,
    showInSidebar: true,
  },
  {
    title: "Hiring Pipeline",
    subtitle: "Track candidates through every stage",
    href: "/pipeline",
    icon: GitBranch,
    showInSidebar: true,
  },
  {
    title: "Analytics",
    subtitle: "Hiring insights and reports",
    href: "/analytics",
    icon: BarChart3,
    showInSidebar: true,
  },
  {
    title: "Settings",
    subtitle: "Workspace and account settings",
    href: "/settings",
    icon: Settings,
    showInSidebar: true,
  },
];
