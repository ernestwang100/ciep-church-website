import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle_en",
      title: "Hero Title (English)",
      type: "string",
    }),
    defineField({
      name: "heroTitle_es",
      title: "Hero Title (Spanish)",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle_en",
      title: "Hero Subtitle (English)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroSubtitle_es",
      title: "Hero Subtitle (Spanish)",
      type: "text",
      rows: 2,
    }),
  ],
});
