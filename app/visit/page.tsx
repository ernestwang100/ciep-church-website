import { client } from "@/sanity/client";
import { visitPageQuery } from "@/sanity/queries";
import VisitContent, { type VisitPageData } from "@/components/VisitContent";

export const revalidate = 60;

export default async function PlanYourVisit() {
  const visitData = await client.fetch<VisitPageData>(visitPageQuery);
  return <VisitContent visitData={visitData} />;
}
