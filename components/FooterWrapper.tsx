import { client } from "@/sanity/client";
import { footerQuery } from "@/sanity/queries";
import Footer, { type FooterData } from "@/components/Footer";

export default async function FooterWrapper() {
  const data = await client.fetch<FooterData | null>(footerQuery);
  return <Footer data={data} />;
}
