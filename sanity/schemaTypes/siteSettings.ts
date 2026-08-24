import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Contenu du site",
  type: "document",
  // This makes it a "singleton" in the studio structure (see structure.ts note in README)
  fields: [
    defineField({
      name: "heroTag",
      title: "Petit texte au-dessus du titre",
      type: "string",
      initialValue: "Nettoyage professionnel à Annecy",
    }),
    defineField({
      name: "heroTitleLine1",
      title: "Titre — ligne 1",
      type: "string",
      initialValue: "Les Alpes",
    }),
    defineField({
      name: "heroTitleLine2",
      title: "Titre — ligne 2",
      type: "string",
      initialValue: "Multiservices",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Phrase d'accroche",
      type: "text",
      rows: 3,
      initialValue:
        "Des prestations de nettoyage haut de gamme pour immeubles, bureaux, Airbnb et fins de chantier.",
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
      description: "Format international, ex: +33767575659 (sans espaces, utilisé pour le bouton 'Appeler')",
      initialValue: "+33767575659",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "alpesmultiservices@icloud.com",
    }),
    defineField({
      name: "addressLine1",
      title: "Adresse — ligne 1",
      type: "string",
      initialValue: "4 rue des Tisserands",
    }),
    defineField({
      name: "addressLine2",
      title: "Adresse — ligne 2",
      type: "string",
      initialValue: "Cran-Gevrier, Annecy (74960)",
    }),
    defineField({
      name: "services",
      title: "Services proposés",
      type: "array",
      of: [
        {
          type: "object",
          name: "service",
          fields: [
            defineField({
              name: "type",
              title: "Icône",
              type: "string",
              options: {
                list: [
                  { title: "Immeuble", value: "building" },
                  { title: "Airbnb (maison)", value: "airbnb" },
                  { title: "Bureau / mallette", value: "office" },
                ],
                layout: "radio",
              },
              initialValue: "building",
            }),
            defineField({
              name: "title",
              title: "Titre du service",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "gallery",
      title: "Photos de résultats",
      type: "array",
      of: [
        {
          type: "image",
          name: "galleryImage",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              title: "Texte affiché sur la photo",
              type: "string",
              initialValue: "Résultat impeccable",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contenu du site — Les Alpes Multiservices" };
    },
  },
});
