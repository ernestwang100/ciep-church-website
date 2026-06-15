import { client } from "@/sanity/client";
import { sermonsQuery } from "@/sanity/queries";
import { siteConfig } from "@/lib/config";

type Sermon = {
  _id: string;
  title: string;
  date: string;
  speaker: string;
  series: string;
  videoUrl: string;
  audioUrl: string;
};

export const revalidate = 60;

export default async function Sermons() {
  const sermons: Sermon[] = await client.fetch(sermonsQuery);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Sermons</h1>
      <p className="text-gray-600 mb-10">Watch or listen to recent messages from {siteConfig.name}.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {sermons.length === 0 && (
          <div className="border border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
            Sermons coming soon.
          </div>
        )}
        {sermons.map((s) => (
          <div key={s._id} className="border border-gray-200 rounded-xl p-6">
            <p className="text-xs text-gray-400 mb-1">
              {new Date(s.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              {s.series && ` · ${s.series}`}
            </p>
            <h2 className="font-semibold text-gray-900 text-lg mb-1">{s.title}</h2>
            {s.speaker && <p className="text-sm text-gray-500 mb-3">{s.speaker}</p>}
            <div className="flex gap-3">
              {s.videoUrl && (
                <a href={s.videoUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline">
                  Watch
                </a>
              )}
              {s.audioUrl && (
                <a href={s.audioUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline">
                  Listen
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
