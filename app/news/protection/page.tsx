// components/MissionSection.js
import React from 'react';
import Image from 'next/image'; // Utiliser le composant Image de Next.js
import '../../styles/hero.css';

export default function protectionPage(){
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
            Protection strategy for forests fragments in the protected area Corridor Forestier Bongolava in collaboration with the community.
          </h2>
          <h3 className="subtitle">
            RESUME
          </h3>
          <p className="leadText">
    Fikambanana Bongolava Maitso (FBM) est une association locale à but non lucratif œuvrant sur la gestion des ressources naturelles et le développement des paysans locales. Elle est également gestionnaire de l’Aire protégée (AP) du corridor forestier bongolava. Appuyée par la fondation rufford en 2020, elle a mené un travail intitulé « Stratégie de protection des fragments de forêts au sein de l’AP corridor forestier bongolava en collaboration avec la communauté ».
          </p>
          <p className="bodyText">
Pour ce travail, FBM a fixé deux objectifs : gérer efficacement des occupants dans l’AP et contribuer à leur approvisionnement durable en bois. Pour parvenir au premier objectif, FBM a dû identifier, recenser et enregistrer avec un cahier de charge tous les occupants dans cette AP. Le deuxième objectif conduit FBM à mettre en place une centre pépinière pour la production des jeunes plants répondant aux besoins de la communauté.
          </p>
        <p className="bodyText">
Après sept mois d’intervention, au total de 685 occupants ont été recensés seulement dans la partie Nord de l’AP corridor forestier bongolava.
Environ 9003 de jeunes plants ont été disponibles dont 6873 de plants sont plantés.
          </p>

        <h3 className="subtitle">
            ABSTRACT
          </h3>
          <p className="leadText">
Fikambanana Bongolava Maitso (FBM) is a local non-profit association working on the management of natural resources and the development of local farmers. She is the manager of the Protected Area (PA) of the corridor forest bongolava. Supported by the rufford foundation in 2020, she carried out a work entitled “protection strategy for forest fragments in the PA corridor forest bongolava in collaboration with the community”.
          </p>
          <p className="bodyText">
For this work, FBM has two objectives: to manage effectively the occupants in the PA and to contribute to their sustainable wood supply. To achieve the first objective, FBM had to identify, list and register with specifications all the occupants in this PA. The second objective leads FBM to set up a nursery center for production of seedlings to meet the needs of the community.
          </p>
        <p className="bodyText">
After seven months of intervention,685 occupants have been identified only in the northern part of the Bongolava Forest Corridor PA. About 9003 seedlings were available and 6873 seedlings are planted.
          </p>
          <p className="leadText">
Keywords: Occupant, reforestation, protected area corridor forest bongolava
          </p>
        </div>
      </div>
    </section>
  );
}