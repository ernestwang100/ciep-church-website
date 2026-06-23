import { groq } from "next-sanity";

export const announcementsQuery = groq`
  *[_type == "announcement"] | order(date desc) {
    _id, title, date, body, language
  }
`;

export const eventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id, title, date, location, description, language,
    "imageUrl": image.asset->url
  }
`;

export const sermonsQuery = groq`
  *[_type == "sermon"] | order(date desc) {
    _id, title, date, speaker, series, videoUrl, audioUrl
  }
`;

export const ministriesQuery = groq`
  *[_type == "ministry"] | order(order asc) {
    _id, name, description, leader, contactEmail,
    "imageUrl": image.asset->url
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(ageGroup asc) {
    _id,
    "name": title,
    description,
    "imageUrl": image.asset->url
  }
`;

export const staffQuery = groq`
  *[_type == "staff"] | order(order asc) {
    _id, name, title, bio,
    "photoUrl": photo.asset->url
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    storyBody_en, storyBody_es,
    beliefsBody_en, beliefsBody_es
  }
`;
