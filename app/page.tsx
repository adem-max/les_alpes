// app/page.tsx
// Next.js + TypeScript + TailwindCSS
// Fancy premium version — no local images, uses stock photos

"use client";

import {
  Sparkles,
  Building2,
  Home,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Nettoyage d'immeubles",
    description:
      "Entretien des copropriétés, parties communes et nettoyage approfondi.",
  },
  {
    icon: Home,
    title: "Nettoyage Airbnb",
    description:
      "Rotation rapide, linge et préparation impeccable pour vos voyageurs.",
  },
  {
    icon: Briefcase,
    title: "Bureaux & chantiers",
    description:
      "Nettoyage professionnel flexible pour entreprises et fins de chantier.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1800&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-blue-900/60" />

        {/* Decorative blur */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                Nettoyage professionnel à Annecy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Les Alpes
              <span className="block text-blue-400">Multiservices</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Des prestations de nettoyage haut de gamme pour immeubles,
              bureaux, Airbnb et fins de chantier.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-2xl shadow-blue-500/30 flex items-center gap-2"
              >
                Demander un devis
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </a>

              <a
                href="tel:+33767575659"
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                Appeler maintenant
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="relative -mt-10 z-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            {[
              {
                icon: Clock3,
                title: "24h/24",
                subtitle: "Intervention rapide",
              },
              {
                icon: ShieldCheck,
                title: "Fiable",
                subtitle: "Professionnalisme garanti",
              },
              {
                icon: Star,
                title: "Qualité",
                subtitle: "Résultats impeccables",
              },
              {
                icon: Sparkles,
                title: "Premium",
                subtitle: "Service haut de gamme",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon
                  className="mx-auto mb-3 text-blue-600"
                  size={32}
                />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Nos services
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Un nettoyage impeccable,
              <span className="block text-slate-400">
                pour chaque espace
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg">
                    <service.icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Résultats
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Excellence & propreté
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl h-[420px]"
              >
                <img
                  src={img}
                  alt="Nettoyage professionnel"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm uppercase tracking-widest opacity-80">
                    Les Alpes Multiservices
                  </p>

                  <h3 className="text-2xl font-bold">
                    Résultat impeccable
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Besoin d'un service
            <span className="block">de nettoyage ?</span>
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis rapide et gratuit.
          </p>

          <div className="mt-10">
            <a
              href="tel:+33767575659"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue-700 font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              <Phone size={20} />
              +33 7 67 57 56 59
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Parlons de votre projet
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Phone />
                </div>

                <div>
                  <p className="font-bold text-lg">Téléphone</p>
                  <p className="text-slate-600">
                    +33 7 67 57 56 59
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Mail />
                </div>

                <div>
                  <p className="font-bold text-lg">Email</p>
                  <p className="text-slate-600">
                    alpesmultiservices@icloud.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin />
                </div>

                <div>
                  <p className="font-bold text-lg">Adresse</p>
                  <p className="text-slate-600">
                    4 rue des Tisserands,
                    <br />
                    Cran-Gevrier, Annecy (74960)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Cleaning"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-black mb-4">
                Service premium à Annecy
              </h3>

              <p className="text-slate-200">
                Intervention rapide, qualité professionnelle et satisfaction
                garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.08746%2C45.88628%2C6.12746%2C45.92628&layer=mapnik&marker=45.90628%2C6.10746"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-xl">
              Les Alpes Multiservices
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              © 2025 — Tous droits réservés
            </p>
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=61575299105766"
            target="_blank"
            className="px-6 py-3 rounded-full border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all"
          >
            Facebook
          </a>
        </div>
      </footer>
    </main>
  );
}