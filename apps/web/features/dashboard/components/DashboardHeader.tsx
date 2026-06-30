import { Plus } from "lucide-react";
import { Button, PageHeader } from "@/components/ui";

export default function DashboardHeader() {
  return (
    <PageHeader
      title="Good Morning, Sathish 👋"
      subtitle="Here's what's happening across your recruitment pipeline today."
      action={
        <Button className="flex items-center gap-2">
          <Plus size={18} />
          Post Job
        </Button>
      }
    />
  );
}
