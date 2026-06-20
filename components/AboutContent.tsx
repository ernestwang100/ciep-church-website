"use client";

import { useLanguage } from "@/context/LanguageContext";

type Staff = {
  _id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
};

export default function AboutContent({ staff }: { staff: Staff[] }) {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.about.title}</h1>
      <p className="text-gray-600 mb-10">{t.about.subtitle}</p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.about.storyHeading}</h2>
          <p className="text-gray-600">{t.about.storyBody}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t.about.beliefsHeading}</h2>
          <p className="text-gray-600">{t.about.beliefsBody}</p>
        </div>

        {staff.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{t.about.teamHeading}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {staff.map((person) => (
                <div key={person._id} className="flex gap-4 items-start">
                  {person.photoUrl && (
                    <img
                      src={person.photoUrl}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover shrink-0"
                    />
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
