import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: { list: ["en", "es"] },
      initialValue: "en",
    }),
  ],
  orderings: [{ title: "Date, Newest", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
