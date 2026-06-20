import { client } from "@/sanity/client";
import { ministriesQuery } from "@/sanity/queries";
import MinistriesList from "@/components/MinistriesList";

type Ministry = {
  _id: string;
  name: string;
  description: string;
  leader: string;
  contactEmail: string;
  imageUrl: string;
};

const fallbackMinistries: Ministry[] = [
  { _id: "1", name: "Children", description: "Programs for kids of all ages to grow in faith.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "2", name: "Youth / Teenagers", description: "A space for teens to connect, grow, and lead.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "3", name: "College Students", description: "Community and discipleship for young adults.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "4", name: "Men", description: "Gatherings, Bible study, and brotherhood for men.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "5", name: "Women", description: "Fellowship, prayer, and growth for women of all ages.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "6", name: "Small Groups", description: "Midweek groups for deeper community throughout El Paso.", leader: "", contactEmail: "", imageUrl: "" },
  { _id: "7", name: "Outreach", description: "Serving El Paso and beyond with hands and heart.", leader: "", contactEmail: "", imageUrl: "" },
];

export const revalidate = 3600;

export default async function Ministries() {
  const fetched: Ministry[] = await client.fetch(ministriesQuery);
  const ministries = fetched.length > 0 ? fetched : fallbackMinistries;
  return <MinistriesList items={ministries} />;
}
