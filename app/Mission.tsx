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
            Corridor Forestier
          </h2>
          <h3 className="subtitle">
            Localisation
          </h3>
          <p className="leadText">
           L'Aire Protégée du Corridor Forestier Bongolava se trouve dans la partie Nord-Ouest de Madagascar. Elle est constituée de deux districts de Mampikony et de Port-Bergé, à cheval entre sept communes rurales et 54 Fokontany.
          </p>
          <p className="bodyText">
            Elle couvre une superficie de 60 589 ha et s'étend entre les latitudes 15°25'09" et 16°10'05" Sud et les longitudes 47°15'10" et 47°39'10" Est. Son altitude varie entre 38m à 320m. Sa végétation naturelle est constitué d'une forêt sèche décidue avec un couvert forrestier atteignant 15m.
          </p>
          <h3 className="subtitle">
            HISTORIQUES
          </h3>
          <p className="leadText">
           Bref historique du corridor Forestier Bongolava.
          </p>
          <p className="bodyText">
            Suivant l'arrêté N° 262/MAPMFOR du 02 février 1961, la forêt de Marosely a été devenue "Forêt classé de Marosely". Après la mise en place du système des aires protégées à Madagascar (SAPM) pour la mise en oeuvre de la vision de Durban, la conservation international (CI) a initié les processus de transformation de la Forêt classé de Marosely en Aire protégée en 2004. En conséquence, le statut de protection temporaire de l'Aire protégée du Corridor forestier bongolava est sorti selon l'arrêté interministériel N°16.069/2006.
          </p>
          <p className="bodyText">
            Par suite du Congrès mondial des Parcs à Sydney en 2014, l'Etat malgache a soutenu la Vision de Durban suite à laquelle le décret 760-2005 régissant sur la création définitive de l'Aire Protégée "Corridor Forestier Bongolava, Districts de Mampikony et de Port-Bergé, Région de Sofia" est sorti en 2015. Cette dernière est désormais classée dans la catégorie V et définie ainsi "Paysage Harmonieux Protégé" selon la définition de l'IUCN.
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