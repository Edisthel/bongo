"use client"
// components/TeamResponsibilities.js

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users, // Icône pour l'engagement communautaire
  Leaf,  // Icône pour la protection de la biodiversité
  Zap,   // Icône pour l'innovation
  X,     // Icône pour fermer le modal
} from 'lucide-react'; // Nous utiliserons Lucide pour les icônes.

// Les données de l'équipe et des responsabilités
const teamMembers = [
  { id: 1, name: "Membre 1", imageUrl: "/img/about-5.png" }, // Remplacez par vos chemins d'images
  { id: 2, name: "Membre 2", imageUrl: "/img/about-8.png" },
  { id: 3, name: "Membre 3", imageUrl: "/img/abou-11.png" },
];

const responsibilities = [
  { icon: Users, title: "Engagement communautaire", text: "Les populations locales sont au cœur de notre projet." },
  { icon: Leaf, title: "Protection de la biodiversité", text: "Chaque action vise la préservation de notre patrimoine naturel." },
  { icon: Zap, title: "Innovation", text: "Nous intégrons des outils technologiques modernes et les cartes interactives." },
];

const TeamResponsibilities = () => {
  // État pour gérer l'image agrandie (modal)
  const [selectedImage, setSelectedImage] = useState(null);

  // Fonction pour ouvrir le modal avec une image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Empêche le défilement du corps
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Les couleurs sont définies pour un thème vert et blanc
  const primaryColor = 'text-green-700'; // Vert foncé pour le texte important
  const bgColor = 'bg-gradient-to-br from-green-100 to-indigo-200';
  const accentBg = 'bg-green-50'; // Arrière-plan légèrement vert pour les sections
  const borderColor = 'border-green-300';

  return (
    <div className={`${bgColor} py-12 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section des Images de l'Équipe */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg ${borderColor} border-4 transition-transform duration-300 hover:scale-105 cursor-pointer`}
              onClick={() => openModal(member.imageUrl)} // Clic pour agrandir
            >
              {/* Utilisation du composant Image de Next.js pour l'optimisation */}
              <Image
                src={member.imageUrl}
                alt={`Photo de ${member.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority={true} // Pour les images visibles au chargement
              />
            </div>
          ))}
        </div>

        {/* Section Titre et Texte Principal */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${primaryColor} mb-4`}>
            Responsabilité
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Nous agissons dans une démarche durable et transparente.
          </p>
        </div>

        {/* Section Nos Responsabilités */}
        <div className="bg-green-50 rounded-lg p-6 sm:p-10 shadow-xl">
          <h2 className={`text-2xl font-bold ${primaryColor} mb-8 border-b-2 border-green-300 pb-2`}>
            Nos responsabilités
          </h2>
          <dl className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            {responsibilities.map((item, index) => (
              <div key={index} className="flex flex-col items-start p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`flex items-center justify-center h-12 w-12 rounded-md ${accentBg} border-2 ${borderColor}`}>
                  {/* L'icône du composant Lucide React */}
                  <item.icon className={`h-6 w-6 ${primaryColor}`} aria-hidden="true" />
                </div>
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {item.title}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Modal d'agrandissement de l'image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal} // Fermer en cliquant en dehors de l'image
        >
          <div className="relative p-4 max-w-3xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {/* Bouton de fermeture */}
            <button
              className="absolute top-0 right-0 m-4 p-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition"
              onClick={closeModal}
              aria-label="Fermer l'image agrandie"
            >
              <X className="h-6 w-6" />
            </button>
            {/* L'image agrandie */}
            <div className="relative w-full h-full max-h-[80vh]">
              <Image
                src={selectedImage}
                alt="Image agrandie de l'équipe"
                layout="responsive"
                width={800} // Définir une taille de base
                height={600}
                objectFit="contain" // S'assurer que toute l'image est visible
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamResponsibilities;