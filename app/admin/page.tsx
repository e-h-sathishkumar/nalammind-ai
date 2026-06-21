export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getEnquiries } from "@/lib/google-sheet";

export default async function AdminPage() {
  const enquiries = await getEnquiries();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        NalamMind Admin Dashboard
      </h1>

      <p className="mb-4 text-red-600">
        Rows Loaded: {enquiries.length}
      </p>

      <div className="mb-6">
        <div className="bg-blue-100 p-4 rounded-lg w-64">
          <h2 className="text-lg font-semibold">
            Total Enquiries
          </h2>
          <p className="text-3xl font-bold">
            {enquiries.length}
          </p>
        </div>
      </div>

      ...
    </div>
  );
}