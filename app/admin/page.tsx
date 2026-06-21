export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getEnquiries } from "@/lib/google-sheet";

export default async function AdminPage() {
  const enquiries = await getEnquiries();

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-6">
        NalamMind Admin Dashboard
      </h1>

      <p className="mb-4 text-red-600 text-xl">
        Rows Loaded: {enquiries.length}
      </p>

      <div className="mb-8">
        <div className="bg-blue-100 p-6 rounded-lg w-72 shadow">
          <h2 className="text-xl font-semibold">
            Total Enquiries
          </h2>
          <p className="text-5xl font-bold mt-2">
            {enquiries.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Date</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Message</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((item, index) => (
              <tr key={index}>
                <td className="border p-3">{item.date}</td>
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.email}</td>
                <td className="border p-3">{item.phone}</td>
                <td className="border p-3">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}