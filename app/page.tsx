import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY, type SiteSettings } from "@/sanity/lib/queries";
import HomeClient from "./HomeClient";

// Re-fetch content at most once every 60s, so her edits show up quickly
// without rebuilding on every single visitor request.
export const revalidate = 60;

export default async function Page() {
  const data = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY);
  return <HomeClient data={data} />;
}
