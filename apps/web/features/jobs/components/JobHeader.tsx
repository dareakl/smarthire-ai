import { Plus } from "lucide-react";
import { Button, PageHeader } from "@/components/ui";

export default function JobHeader() {
  return (
    <PageHeader
      title="Jobs"
      subtitle="Manage your job postings and recruitment pipeline."
      action={
        <Button className="flex items-center gap-2">
          <Plus size={18} />
          Create Job
        </Button>
      }
    />
  );
}
