import { defineField, defineType } from "sanity";

export default defineType({
  name: "visitPage",
  title: "Visit Page",
  type: "document",
  fields: [
    defineField({
      name: "serviceTimes",
      title: "Service Times",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name_en", title: "Name (English)", type: "string" }),
            defineField({ name: "name_es", title: "Name (Spanish)", type: "string" }),
            defineField({ name: "time", title: "Time", type: "string" }),
          ],
          preview: {
            select: { title: "name_en", subtitle: "time" },
          },
        },
      ],
    }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label (e.g. West)", type: "string" }),
            defineField({ name: "address", title: "Street Address", type: "string" }),
            defineField({ name: "city", title: "City, State, ZIP", type: "string" }),
            defineField({ name: "mapSrc", title: "Google Maps Embed URL", type: "url" }),
            defineField({ name: "directionsHref", title: "Google Maps Directions URL", type: "url" }),
          ],
          preview: {
            select: { title: "label", subtitle: "address" },
          },
        },
      ],
    }),
    defineField({
      name: "expectBody_en",
      title: "What to Expect (English)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "expectBody_es",
      title: "What to Expect (Spanish)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "parkingBody_en",
      title: "Parking Info (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "parkingBody_es",
      title: "Parking Info (Spanish)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "kidsBody_en",
      title: "Kids & Families (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "kidsBody_es",
      title: "Kids & Families (Spanish)",
      type: "text",
      rows: 3,
    }),
  ],
});
