import { MapPin, Users } from "lucide-react";

import JobStatusBadge from "../badges/JobStatusBadge";
import { Job } from "../../types";
import JobActions from "./JobActions";

interface Props {
  job: Job;
}

export default function JobRow({ job }: Props) {
  return (
    <tr
      className="
    border-b
    border-slate-800
    transition-all
    duration-200
    hover:bg-slate-800/40
    cursor-pointer
  "
    >
      <td className="px-6 py-5">
        <div>
          <h4 className="font-semibold tracking-tight text-white">
            {job.title}
          </h4>

          <p className="text-sm text-slate-400">{job.department}</p>
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          <MapPin size={16} />
          {job.location}
        </div>
      </td>

      <td className="px-6 py-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
          <Users size={16} />
          {job.applicants}
        </div>
      </td>

      <td className="px-6 py-5">
        <JobStatusBadge status={job.status} />
      </td>

      <td className="px-6 py-5 text-slate-400">{job.createdAt}</td>

      <td className="px-6 py-5 text-right">
        <JobActions />
      </td>
    </tr>
  );
}
