import { client } from "@/sanity/client";
import { homeServiceTimesQuery, homePageQuery } from "@/sanity/queries";
import HomeContent from "@/components/HomeContent";

export type ServiceTime = { name_en: string; name_es: string; time: string };

export type HomePageData = {
  heroTitle_en?: string;
  heroTitle_es?: string;
  heroSubtitle_en?: string;
  heroSubtitle_es?: string;
};

export const revalidate = 60;

export default async function Home() {
  const [visitData, homeData] = await Promise.all([
    client.fetch<{ serviceTimes: ServiceTime[] } | null>(homeServiceTimesQuery),
    client.fetch<HomePageData | null>(homePageQuery),
  ]);
  return (
    <HomeContent
      serviceTimes={visitData?.serviceTimes ?? null}
      homeData={homeData}
    />
  );
}
