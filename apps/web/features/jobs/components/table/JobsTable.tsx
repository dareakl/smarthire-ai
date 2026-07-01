import { MoreHorizontal, MapPin, Users } from "lucide-react";

import { jobs } from "../../data/jobs.mock";
//import JobStatusBadge from "../badges/JobStatusBadge";

export default function JobsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="border-b border-slate-800 bg-slate-950">
          <tr className="text-left text-sm text-slate-400">
            <th className="px-6 py-4">Job</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Applicants</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Posted</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr
              key={job.id}
              className="border-b border-slate-800 transition hover:bg-slate-800/40"
            >
              <td className="px-6 py-5">
                <div>
                  <h4 className="font-semibold text-white">{job.title}</h4>

                  <p className="text-sm text-slate-400">{job.department}</p>
                </div>
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={16} />

                  {job.location}
                </div>
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-slate-300">
                  <Users size={16} />

                  {job.applicants}
                </div>
              </td>

              {/* <td className="px-6 py-5">
                <JobStatusBadge status={job.status} />
              </td> */}

              <td className="px-6 py-5 text-slate-400">{job.createdAt}</td>

              <td className="px-6 py-5">
                <button className="rounded-lg p-2 hover:bg-slate-700">
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
