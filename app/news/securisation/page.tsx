// components/MissionSection.js
import React from 'react';
import Link from "next/link";
import Image from 'next/image'; // Utiliser le composant Image de Next.js
import '../../styles/hero.css';

export default function securisationPage(){
  return (
    <section className="missionContainer">
      <div className="contentWrapper">
        
        {/* Colonne Gauche : Image illustrative */}
        <div className="imageColumn">
          {/* Remplacez par une image appropriée de la nature ou d'une communauté */}
          <Image 
            src="/img/abou-11.png" 
            alt="Paysage ou travail de l'Association Bongolavamaitso"
            width={600}
            height={450}
            layout="responsive"
            className="missionImage"
          />
          <Image 
            src="/img/abou-11.png" 
            alt="Paysage ou travail de l'Association Bongolavamaitso"
            width={600}
            height={450}
            layout="responsive"
            className="missionImage"
          />
        </div>

        {/* Colonne Droite : Texte de la Mission */}
        <div className="textColumn animate-reveal">
          <h2 className="title">
            Sécurisation des populations de lémuriens dans l’aire protégée de Corridor forestier bongolava
          </h2>
          <h3 className="subtitle">
            Problème de conservation
          </h3>
          <p className="leadText">
           Corridor Forestier Bongolava est une aire protégée qui se localise dans les deux districts de Mampikony et de Port-Bergé, région Sofia, partie Nord-Ouest de Madagascar. Elle présente une richesse faunique et floristique importante. Ainsi, elle abrite huit espèces de lémuriens. Cependant, ces espèces de lémuriens se sont heurtées à des sérieux problèmes de perte d’habitat. Les feux et défrichement sont les causes majeures de cette perte.
          </p>
          <h3 className="subtitle">
            Activités du projet
          </h3>
          <p className="bodyText">
Ce présent projet va focaliser à l’inventaire des espèces de lémuriens existantes au sein de l’aire protégée Corridor forestier bongolava à travers des transects, à la formation de l’équipe de Fikambanana Bongolava Maitso sur le suivi des espèces de lémuriens identifiées et à l’installation des pare feu en collaboration avec les communautés autour des fragments de forêt où les espèces ont été identifiées.
          </p>
            <h3 className="subtitle">
            Résultats du projet
          </h3>
          <p className="bodyText">
A la fin de ce projet, l’abondance et la répartition des espèces de lémuriens de Bongolava seront connues suivant les fragments de forêt existants. Ensuite, l’équipe FBM va acquérir des connaissances nécessaires afin de poursuivre la conservation de ces espèces de lémuriens. De plus, la surface de forêt brulée sera réduite à travers les pare feu installés.
          </p>
          {/* Bouton pour aller plus loin (Optionnel) */}
          <button className="missionButton">
            En savoir plus sur nos réalisations
          </button>
        </div>
      </div>
    </section>
  );
}