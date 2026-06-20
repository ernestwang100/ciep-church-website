import { client } from "@/sanity/client";
import { eventsQuery } from "@/sanity/queries";
import EventsList from "@/components/EventsList";

type Event = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  language: string;
  imageUrl: string;
};

export const revalidate = 60;

export default async function Events() {
  const events: Event[] = await client.fetch(eventsQuery);
  return <EventsList items={events} />;
}
