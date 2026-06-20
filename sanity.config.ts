import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "The Church in El Paso",
  projectId: "thl9uh7a",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
