import { client } from "@/sanity/client";
import { staffQuery } from "@/sanity/queries";

type Staff = {
  _id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
};

export const revalidate = 3600;

export default async function About() {
  const staff: Staff[] = await client.fetch(staffQuery);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-gray-600 mb-10">Learn who we are, what we believe, and what drives us as a community of faith in El Paso.</p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Story</h2>
          <p className="text-gray-600">[Church history — update in Sanity]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Believe</h2>
          <p className="text-gray-600">[Statement of faith — update in Sanity]</p>
        </div>

        {staff.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Our Team</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {staff.map((person) => (
                <div key={person._id} className="flex gap-4 items-start">
                  {person.photoUrl && (
                    <img src={person.photoUrl} alt={person.name}
                      className="w-16 h-16 rounded-full object-cover shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{person.name}</p>
                    {person.title && <p className="text-sm text-gray-500">{person.title}</p>}
                    {person.bio && <p className="text-sm text-gray-600 mt-1">{person.bio}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
