"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Gamepad2, // Pour l'interactif
  Layers,   // Pour les niveaux (vulgarisé/avancé)
  PlayCircle, // Pour les médias (vidéo/quiz)
  CheckCircle2 
} from "lucide-react";

const features = [
  {
    title: "Apprentissage Interactif",
    description: "Fini les PDF statiques. Manipulez des modèles 3D, simulez des expériences chimiques et visualisez les mathématiques en temps réel.",
    icon: Gamepad2,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Simulations", "3D", "Immersion"]
  },
  {
    title: "Formats Variés & Complets",
    description: "Une bibliothèque multimédia complète pour ne jamais s'ennuyer. Alternez entre théorie, pratique et évaluation ludique.",
    icon: PlayCircle,
    gradient: "from-purple-500 to-pink-500",
    tags: ["Cours", "Exercices", "Quiz", "Vidéos 4K"]
  },
  {
    title: "Vulgarisation & Expertise",
    description: "Que vous soyez débutant ou futur ingénieur, le contenu s'adapte. Commencez par comprendre le concept, puis plongez dans les formules complexes.",
    icon: Layers,
    gradient: "from-amber-500 to-orange-500",
    tags: ["Débutant", "Expert", "Progressif"]
  }
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-slate-900 relative overflow-hidden">
      
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
            Une pédagogie <span className="text-blue-400">nouvelle génération</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-slate-400 md:text-xl"
          >
            Tout ce dont vous avez besoin pour exceller en sciences, réuni sur une seule plateforme intelligente.
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