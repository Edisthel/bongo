"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Gamepad2, // Pour l'interactif
  Layers,   // Pour les niveaux (vulgarisé/avancé)
  PlayCircle, // Pour les médias (vidéo/quiz)
  CheckCircle2 
} from "lucide-react";
import  Link  from "next/link";

const features = [
  {
    title: "Soutiens  aux familles",
    description: "Accompagnement moral, social et matériel des familles en difficulté.",
    icon: Gamepad2,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Moral", "Social", "Matériel"]
  },
  {
    title: "Actions Communautaires",
    description: "Organisation d’actions collectives pour renforcer la solidarité locale.",
    icon: PlayCircle,
    gradient: "from-purple-500 to-pink-500",
    tags: ["Organisation", "Mobilisation", "Planification"]
  },
  {
    title: "Actions Communautaires trat t",
    description: "Organisation d’actions collectives pour renforcer la solidarité locale.",
    icon: PlayCircle,
    gradient: "from-purple-500 to-pink-500",
    tags: ["Organisation", "Mobilisation", "Planification"]
  },
  {
    title: "Actions Communautaires sqshjh",
    description: "Organisation d’actions collectives pour renforcer la solidarité locale.",
    icon: PlayCircle,
    gradient: "from-purple-500 to-pink-500",
    tags: ["Organisation", "Mobilisation", "Planification"]
  },
  {
    title: "Formation et sensibilisation",
    description: "Ateliers, conférences et formations sur les valeurs et le vivre-ensemble.",
    icon: Layers,
    gradient: "from-amber-500 to-orange-500",
    tags: ["Débutant", "Progressif"]
  }
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-green-800 relative overflow-hidden">
      <header className="w-full fixed top-0 left-0 z-20 bg-black/50 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold">
            Autres
          </div>
          <ul className="flex gap-6 text-sm md:text-base">
            <li>
              <Link href="../" >Accueil</Link>
            </li>
            <li>
              <Link href="../cfb" >CFB</Link>
            </li>
            <li>
              <Link href="../gestion" >Gestion Corridor</Link>
            </li>
            <li className="bg-white text-black px-1 py-1 rounded-md" >
              <Link href="#" >Autres Activités</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Background decoration subtile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
          >
            Nos différents <span className="text-green-400">activités</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-400 md:text-xl text-yellow-300"
          >
            Découvrez les principales activités menées par notre assotion pour soutenir la communauté et porter nos valeurs sur le terrain.
          </motion.p>
        </div>

        {/* Grille des cartes (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Délai progressif
              whileHover={{ y: -5 }} // Petit saut au survol
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-slate-600 transition-colors duration-300"
            >
              {/* Effet de dégradé au survol de la carte */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

              <div>
                {/* Icône avec cercle lumineux */}
                <div className={`mb-6 inline-flex items-center justify-center rounded-lg bg-slate-800 p-3 shadow-lg group-hover:bg-slate-700 transition-colors`}>
                  <feature.icon className={`h-8 w-8 text-transparent bg-clip-text bg-gradient-to-br ${feature.gradient} stroke-current text-white`} />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Tags / Badges en bas de carte */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                {feature.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}