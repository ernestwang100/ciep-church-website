import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "ageGroup",
      title: "Age Group",
      type: "string",
      validation: (r) => r.required(),
      options: {
        list: [
          { title: "Children", value: "children" },
          { title: "Youth", value: "youth" },
          { title: "Young Adults", value: "youngAdults" },
          { title: "Adults", value: "adults" },
          { title: "Seniors", value: "seniors" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
  ],
  orderings: [{ title: "Age Group", name: "ageGroupAsc", by: [{ field: "ageGroup", direction: "asc" }] }],
});
