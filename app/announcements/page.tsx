import { client } from "@/sanity/client";
import { announcementsQuery } from "@/sanity/queries";
import { siteConfig } from "@/lib/config";

type Announcement = {
  _id: string;
  title: string;
  date: string;
  body: string;
  language: string;
};

export const revalidate = 60;

export default async function Announcements() {
  const announcements: Announcement[] = await client.fetch(announcementsQuery);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Announcements</h1>
      <p className="text-gray-600 mb-10">Stay up to date with everything happening at {siteConfig.name}.</p>

      <div className="space-y-6">
        {announcements.length === 0 && (
          <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
            No announcements yet.
          </div>
        )}
        {announcements.map((a) => (
          <div key={a._id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-semibold text-gray-900 text-lg">{a.title}</h2>
              <span className="text-xs text-gray-400 whitespace-nowrap pt-1">
                {new Date(a.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            {a.body && <p className="text-gray-600 text-sm whitespace-pre-line">{a.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
