"use client"
// components/Galerie.js
import Image from 'next/image';
import { useState } from 'react';
import {
  Users, // Icône pour l'engagement communautaire
  Leaf,  // Icône pour la protection de la biodiversité
  Zap,   // Icône pour l'innovation
  X,     // Icône pour fermer le modal
} from 'lucide-react'; // Nous utiliserons Lucide pour les icônes.

const primaryColor = 'text-yellow-700'; // Vert foncé pour le texte important

export default function Galerie({message, galleryItems}) {
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
  return (
    <div className="gallery-container">
      {/* Section Titre et Texte Principal */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${primaryColor} mb-4`}>
            Gallerie d'image
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-green-800 sm:mt-4">
            {message}
          </p>
        </div>
      <div className="image-grid" >
        {galleryItems.map((item) => (
          <div key={item.id} className="image-item animate-reveal hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105" onClick={() => openModal(item.src)}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              // 'layout="responsive"' est souvent préférable pour une grille.
              // Dans Next.js 13+ et l'approche par défaut, vous définissez
              // 'fill' pour que l'image remplisse son conteneur parent.
              // Ici, nous utilisons les dimensions pour un ratio fixe.
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // `placeholder="blur"` ou `placeholder="empty"` pour une meilleure expérience
              placeholder="empty"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .gallery-container {
          margin: 0 auto;
          padding: 20px;
          background-color: #c9e2c9ff;
        }
        .image-grid {
          display: grid;
          /* Crée une grille de 3 colonnes de taille égale, s'ajustant automatiquement */
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .image-item {
          /* Conservez le ratio si vous utilisez l'approche width/height comme ci-dessus */
          border: 1px solid #ddd;
          overflow: hidden; /* Important pour cacher les débordements */
        }
      `}</style>

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
}