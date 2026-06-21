import { getEnquiries } from "@/lib/google-sheet";

export default async function AdminPage() {
  const enquiries = await getEnquiries();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        NalamMind Admin Dashboard
      </h1>

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

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.phone}</td>
              <td className="border p-2">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}