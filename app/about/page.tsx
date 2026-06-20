import { client } from "@/sanity/client";
import { staffQuery } from "@/sanity/queries";
import AboutContent from "@/components/AboutContent";

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
  return <AboutContent staff={staff} />;
}
