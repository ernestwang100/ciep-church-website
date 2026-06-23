import { client } from "@/sanity/client";
import { staffQuery, aboutPageQuery } from "@/sanity/queries";
import AboutContent from "@/components/AboutContent";

type Staff = {
  _id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
};

export type AboutPageData = {
  storyBody_en?: string;
  storyBody_es?: string;
  beliefsBody_en?: string;
  beliefsBody_es?: string;
};

export const revalidate = 60;

export default async function About() {
  const [staff, aboutData] = await Promise.all([
    client.fetch<Staff[]>(staffQuery),
    client.fetch<AboutPageData | null>(aboutPageQuery),
  ]);
  return <AboutContent staff={staff} aboutData={aboutData} />;
}
