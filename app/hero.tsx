"use client"
// components/HeroSection.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  '/img/1.jpg', // Remplacez par vos chemins d'images réels
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/1.jpg',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gère le défilement automatique des images toutes les 5 secondes (Logique inchangée)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    // 1. styles.heroContainer -> Remplacé par des classes Tailwind
    // (Plein écran, positionnement relatif, flex pour centrer le contenu)
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Boucle pour afficher toutes les images avec leur état d'animation */}
      {images.map((imgSrc, index) => (
        <div
          key={index}
          // 2. styles.backgroundImage & styles.active -> Classes Tailwind pour l'animation
          className={`
            absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
      ))}

      {/* 3. styles.overlay -> Voile Tailwind (position absolue, couleur noire semi-transparente) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 4. styles.content -> Contenu (positionnement Z élevé, centrage du texte, couleur blanche) */}
      <div className="relative z-10 text-center text-white max-w-4xl p-6">
        
        {/* 5. styles.title -> Titre (grande taille, gras, espacement) */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          Association Bongolavamaitso
        </h1>
        
        {/* 6. styles.subtitle -> Sous-titre (taille moyenne) */}
        <p className="text-xl md:text-2xl font-light mb-8">
          Enracinons l'Avenir, Cultivons le Changement.
        </p>
        
        {/* 7. styles.ctaButton -> Bouton CTA (padding, couleur de fond, hover, coins arrondis, ombre) */}
        <button className="
          bg-green-600 hover:bg-green-700 text-white font-semibold 
          py-3 px-8 rounded-full text-lg 
          transition duration-300 ease-in-out shadow-lg transform hover:scale-105
        ">
         <Link href="/news">Découvrir Nos Projets 🌱</Link> 
        </button>
      </div>
    </div>
  );
};

export default HeroSection;