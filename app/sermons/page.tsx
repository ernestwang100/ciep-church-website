import { client } from "@/sanity/client";
import { sermonsQuery } from "@/sanity/queries";
import SermonsList from "@/components/SermonsList";

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
  return <SermonsList items={sermons} />;
}
