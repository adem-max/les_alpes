import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // true = fast, cached reads (fine for a public site with occasional edits)
  useCdn: true,
});
