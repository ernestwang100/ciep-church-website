import { defineField, defineType } from "sanity";

export default defineType({
  name: "sermon",
  title: "Sermon",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "speaker", title: "Speaker", type: "string" }),
    defineField({ name: "series", title: "Series", type: "string" }),
    defineField({ name: "videoUrl", title: "Video URL (YouTube/Vimeo)", type: "url" }),
    defineField({ name: "audioUrl", title: "Audio URL", type: "url" }),
  ],
  orderings: [{ title: "Date, Newest", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
