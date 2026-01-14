// app/corridor-forestier/page.tsx
"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestion d'un corridor forestier",
  description:
    "Présentation de la gestion durable d’un corridor forestier : enjeux, menaces, principes de gestion et rôle des communautés.",
};

export default function CorridorForestierPage() {
  return (
    <main className="mx-auto prose prose-lg bg-white">
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
            <li className="bg-white text-black px-1 py-1 rounded-md">
              <Link href="#" >Gestion Corridor</Link>
            </li>
            <li>
              <Link href="../autres" >Autres Activités</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="text-center mb-16 space-y-4 pt-30">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-500"
                >
                  Gestion <span className="text-green-400"> Corridor </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mx-auto max-w-[700px] text-slate-400 md:text-xl text-yellow-300"
                >
                  Découvrez les principales gestion des activités menées par notre assotion pour soutenir la communauté et porter nos valeurs sur le terrain.
                </motion.p>
              </div>
      <section className="min-h-[50vh] bg-white text-black px-20 py-6">
        <h1 className = "text-2xl text-green-400 font-semibold mb-4">Gestion d&apos;un corridor forestier</h1>
        <p>
          Un corridor forestier est un ensemble continu de forêts et de milieux
          naturels qui relient des noyaux d&apos;habitat importants pour la
          faune et la flore. Il permet la circulation des espèces, le maintien
          des flux génétiques et la préservation de processus écologiques
          essentiels comme le cycle de l’eau, la protection des sols et la
          régulation du climat local.
        </p>
        <p>
          À Madagascar, certains corridors relient les derniers vestiges de
          forêts humides de l’Est et constituent la source de nombreuses
          rivières qui alimentent les populations en eau et en services
          écosystémiques.
        </p>
      </section>
        

      <section className="min-h-[50vh] bg-white text-black px-20 py-6">
        <h2 className = "text-2xl text-green-400 font-semibold mb-4">Pourquoi gérer ce corridor&nbsp;?</h2>
        <p>
          La gestion d&apos;un corridor forestier vise à préserver ses fonctions
          écologiques tout en répondant aux besoins des populations locales.
        </p>
        <ul>
          <li>
            Maintenir la biodiversité et limiter la perte d&apos;espèces due à
            la fragmentation des habitats.
          </li>
          <li>
            Protéger les services écosystémiques : eau d&apos;irrigation,
            fertilité des sols, régulation du microclimat, protection contre
            l’érosion.
          </li>
          <li>
            Conserver un couvert forestier continu pour réduire les effets de
            bordure et préserver le patrimoine génétique des espèces.
          </li>
          <li>
            Contribuer à l’atténuation et à l’adaptation aux changements
            climatiques grâce au rôle de stockage de carbone des forêts.
          </li>
        </ul>
      </section>

      <section className="min-h-[50vh] bg-white text-black px-20 py-6">
        <h2 className = "text-2xl text-green-400 font-semibold mb-4">Pressions et menaces</h2>
        <p>
          Malgré son importance écologique et sociale, le corridor est soumis à
          de fortes pressions liées aux activités humaines.
        </p>
        <ul>
          <li>
            Défrichements agricoles, cultures sur brûlis et extension des
            surfaces de production.
          </li>
          <li>
            Exploitation illégale du bois, bois énergie et parfois activités
            minières dans ou à proximité du corridor.
          </li>
          <li>
            Pauvreté, enclavement et absence d&apos;alternatives économiques
            durables pour les communautés riveraines.
          </li>
          <li>
            Fragmentation progressive du massif forestier en îlots isolés, ce
            qui diminue la qualité des habitats et favorise les espèces
            envahissantes.
          </li>
        </ul>
      </section>

      <section className="min-h-[50vh] bg-white text-black px-20 py-6">
        <h2 className = "text-2xl text-green-400 font-semibold mb-4">Principes de gestion durable</h2>
        <p>
          Une gestion durable du corridor repose sur une organisation du
          territoire et des usages qui concilie conservation et développement
          local.
        </p>
        <ul>
          <li>
            Définir un statut clair du corridor (par exemple aire protégée) et
            mettre en place un zonage interne avec des règles d&apos;usage
            adaptées à chaque zone.
          </li>
          <li>
            Maintenir une largeur suffisante et la continuité du couvert
            forestier pour garantir des habitats d&apos;intérieur favorables à
            la faune sensible.
          </li>
          <li>
            Élaborer et appliquer un plan d&apos;aménagement et de gestion
            participatif, impliquant les communautés et les autorités locales.
          </li>
          <li>
            Encadrer les activités autorisées (agriculture, collecte,
            exploitation forestière) et interdire les usages destructeurs dans
            les zones sensibles.
          </li>
        </ul>
      </section>

      <section className="min-h-[50vh] bg-white text-black px-20 py-6">
        <h2 className = "text-2xl text-green-400 font-semibold mb-4">Rôle des communautés et actions</h2>
        <p>
          L&apos;implication active des communautés de base est essentielle
          pour garantir la pérennité du corridor forestier.
        </p>
        <ul>
          <li>
            Mettre en place des transferts de gestion communautaire avec des
            conventions précisant droits, obligations et mécanismes de contrôle.
          </li>
          <li>
            Promouvoir des pratiques agricoles durables et des cultures de
            rente permettant d&apos;améliorer les revenus sans dégrader la
            forêt.
          </li>
          <li>
            Restaurer les zones dégradées par le reboisement, l&apos;
            agroforesterie et la protection des berges des rivières et des
            sources.
          </li>
          <li>
            Développer des mécanismes financiers innovants, comme les paiements
            pour services environnementaux, pour soutenir les activités de
            conservation.
          </li>
        </ul>
      </section>
    </main>
  );
}
