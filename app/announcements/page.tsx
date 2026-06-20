import { client } from "@/sanity/client";
import { announcementsQuery } from "@/sanity/queries";
import AnnouncementsList from "@/components/AnnouncementsList";

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
  return <AnnouncementsList items={announcements} />;
}
