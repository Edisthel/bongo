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

const primaryColor = 'text-white-700'; // Vert foncé pour le texte important

const galleryItems = [
  {
    id: 1,
    src: '/img/1.jpg',
    alt: 'Un magnifique paysage de montagne',
    width: 1920, // Largeur réelle de l'image originale
    height: 1953, // Hauteur réelle de l'image originale
  },
  {
    id: 2,
    src: '/img/2.jpg',
    alt: 'Une rue animée dans une grande ville',
    width: 1600,
    height: 800,
  },
  {
    id: 3,
    src: '/img/3.jpg',
    alt: 'Un portrait en noir et blanc',
    width: 1920,
    height: 1953,
  },
  {
    id: 4,
    src: '/img/bio2.png',
    alt: 'Un magnifique paysage de montagne',
    width: 1920, // Largeur réelle de l'image originale
    height: 1953, // Hauteur réelle de l'image originale
  },
  {
    id: 5,
    src: '/img/bio3.png',
    alt: 'Une rue animée dans une grande ville',
    width: 1600,
    height: 800,
  },
  {
    id: 6,
    src: '/img/bio5.png',
    alt: 'Un portrait en noir et blanc',
    width: 1920,
    height: 1953,
  },
  {
    id: 7,
    src: '/img/bio6.png',
    alt: 'Un magnifique paysage de montagne',
    width: 1920, // Largeur réelle de l'image originale
    height: 1953, // Hauteur réelle de l'image originale
  },
  {
    id: 8,
    src: '/img/haz3.png',
    alt: 'Une rue animée dans une grande ville',
    width: 1600,
    height: 800,
  },
  {
    id: 9,
    src: '/img/haz4.png',
    alt: 'Un portrait en noir et blanc',
    width: 1920,
    height: 1953,
  },
  // ... Ajoutez plus d'images
];

export default function Galerie() {
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
          <p className="mt-3 max-w-2xl mx-auto text-xl text-yellow-600 sm:mt-4">
            Préserver et restaurer les écosytèmes naturels.
          </p>
        </div>
      <div className="image-grid" >
        {galleryItems.map((item) => (
          <div key={item.id} className="image-item" onClick={() => openModal(item.src)}>
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
          background-color: #034e03ff;
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