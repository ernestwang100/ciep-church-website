import { client } from "@/sanity/client";
import { ministriesQuery } from "@/sanity/queries";

type Ministry = {
  _id: string;
  name: string;
  description: string;
  leader: string;
  contactEmail: string;
  imageUrl: string;
};

const fallbackMinistries = [
  { _id: "1", name: "Children", description: "Programs for kids of all ages to grow in faith.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "2", name: "Youth / Teenagers", description: "A space for teens to connect, grow, and lead.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "3", name: "College Students", description: "Community and discipleship for young adults.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "4", name: "Men", description: "Gatherings, Bible study, and brotherhood for men.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "5", name: "Women", description: "Fellowship, prayer, and growth for women of all ages.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "6", name: "Small Groups", description: "Midweek groups for deeper community throughout El Paso.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "7", name: "Outreach", description: "Serving El Paso and beyond with hands and heart.", leader: "", contactEmail: "", imageUrl: "" },
];

export const revalidate = 3600;

export default async function Ministries() {
  const fetched: Ministry[] = await client.fetch(ministriesQuery);
  const ministries = fetched.length > 0 ? fetched : fallbackMinistries;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Ministries</h1>
      <p className="text-gray-600 mb-10">Find your place at CIEP Church — there&apos;s a community for everyone.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {ministries.map((m) => (
          <div key={m._id} className="border border-gray-200 rounded-xl p-6">
            {m.imageUrl && (
              <img src={m.imageUrl} alt={m.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            )}
            <h2 className="font-semibold text-gray-900 text-lg mb-1">{m.name}</h2>
            <p className="text-gray-600 text-sm">{m.description}</p>
            {m.leader && <p className="text-xs text-gray-400 mt-2">Led by {m.leader}</p>}
            {m.contactEmail && (
              <a href={`mailto:${m.contactEmail}`} className="text-xs text-gray-500 underline hover:no-underline mt-1 block">
                {m.contactEmail}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
