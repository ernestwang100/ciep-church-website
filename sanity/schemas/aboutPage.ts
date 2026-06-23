import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  // Singleton — only one document should exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "storyBody_en",
      title: "Our Story (English)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "storyBody_es",
      title: "Our Story (Spanish)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "beliefsBody_en",
      title: "What We Believe (English)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "beliefsBody_es",
      title: "What We Believe (Spanish)",
      type: "text",
      rows: 6,
    }),
  ],
});
