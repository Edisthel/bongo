// components/MissionSection.js
import React from 'react';
import Image from 'next/image'; // Utiliser le composant Image de Next.js
import './styles/hero.css';

const MissionSection = () => {
  return (
    <section className="missionContainer">
      <div className="contentWrapper">
        
        {/* Colonne Gauche : Image illustrative */}
        <div className="imageColumn">
          {/* Remplacez par une image appropriée de la nature ou d'une communauté */}
          <Image 
            src="/images/mission_bongolava.jpg" 
            alt="Paysage ou travail de l'Association Bongolavamaitso"
            width={600}
            height={450}
            layout="responsive"
            className="missionImage"
          />
        </div>

        {/* Colonne Droite : Texte de la Mission */}
        <div className="textColumn">
          <h2 className="title">
            Qui sommes-nous ?
          </h2>
          <p className="leadText">
            **Bongolava Maitso (FBM)** est une **association locale à but non lucratif** (ONG) œuvrant pour la **gestion durable des ressources naturelles** et le **développement des communautés paysannes locales**.
          </p>

          <h3 className="subtitle">
            Gestionnaires de l'Aire Protégée
          </h3>
          <p className="bodyText">
            FBM est également le **gestionnaire officiel de l’Aire Protégée (AP) du corridor forestier Bongolava**. Notre engagement principal est la préservation de ce patrimoine écologique vital.
          </p>
          
          <h3 className="subtitle">
            Soutien et Projets Clés
          </h3>
          <p className="bodyText">
            Appuyée par la **Fondation Rufford en 2020**, nous avons mené un travail crucial intitulé : *« Stratégie de protection des fragments de forêts au sein de l’AP corridor forestier Bongolava en collaboration avec la communauté »*. Cette approche communautaire est au cœur de notre succès.
          </p>

          {/* Bouton pour aller plus loin (Optionnel) */}
          <button className="missionButton">
            En savoir plus sur nos réalisations
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;