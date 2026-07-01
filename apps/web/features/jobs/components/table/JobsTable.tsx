import { jobs } from "../../data/jobs.mock";
import JobRow from "./JobRow";

import {
  DataTable,
  EmptyState,
  TableHeader,
} from "@/components/shared/DataTable";

const columns = [
  { key: "job", label: "Job Position" },
  { key: "location", label: "Location" },
  { key: "applicants", label: "Applicants", align: "center" },
  { key: "status", label: "Status", align: "center" },
  { key: "posted", label: "Posted" },
  { key: "actions", label: "", align: "right" },
];

export default function JobsTable() {
  return (
    <DataTable>
      <TableHeader columns={columns} />

      {jobs.length === 0 ? (
        <EmptyState
          title="No Jobs Found"
          description="Create your first job posting."
        />
      ) : (
        <tbody>
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </tbody>
      )}
    </DataTable>
  );
}
