import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "les_alpes_studio",
  title: "Les Alpes Multiservices",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    // Lets you (not her) poke at raw data if something looks wrong. Safe to leave in.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
