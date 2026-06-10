import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: { list: ["en", "es"] },
      initialValue: "en",
    }),
  ],
  orderings: [{ title: "Date, Soonest", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
});
