"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import  Link  from "next/link";

const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"]; // remplace par tes vraies images


export default function HeroPage() {
  const [current, setCurrent] = useState(0);

  // Auto-slide toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3000 ms = 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-20 bg-black/50 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold">
            Gestion
          </div>
          <ul className="flex gap-6 text-sm md:text-base">
            <li>
              <Link href="../" >Accueil</Link>
            </li>
            <li>
              <Link href="../cfb" >CFB</Link>
            </li>
            <li className="bg-white text-black px-1 py-1 rounded-md" >
              <Link href="#" >Gestion Corridor</Link>
            </li>
            <li>
              <Link href="../autres" >Autres Activités</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}
      <section
        id="accueil"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Slider images */}
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Overlay sombre pour lisibilité du texte */}
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Gestion Corridor
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-200">
            "Citation"
          </p>
        </div>
      </section>
    </div>

  );
}
