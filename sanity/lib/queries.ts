export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  heroTag,
  heroTitleLine1,
  heroTitleLine2,
  heroSubtitle,
  phone,
  email,
  addressLine1,
  addressLine2,
  services[]{
    type,
    title,
    description
  },
  gallery[]{
    caption,
    "url": asset->url
  }
}`;

export type Service = {
  type: "building" | "airbnb" | "office";
  title: string;
  description: string;
};

export type GalleryImage = {
  caption: string;
  url: string;
};

export type SiteSettings = {
  heroTag: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  services: Service[];
  gallery: GalleryImage[];
} | null;
