// components/MissionSection.js
import React from 'react';
import Image from 'next/image'; // Utiliser le composant Image de Next.js
import '../../styles/hero.css';

export default function assessmentPage(){
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
            Assessment of the population Erymnochelys madagascariensis in the lakes inside the protected area Corridor Forestier Bongolava
          </h2>
          <h3 className="subtitle">
            Abstract
          </h3>
          <p className="leadText">
           The protected area (PA) of the Corridor Forestier Bongolava is locate in the Northwestern part of Madagascar. The FBM team, the manager of this PA, supported by Global Wildlife Conservation invested in inventory activities on Erymnochelys madagascariensis known locally as “BIARA”.
The objective is to justify its presence in this PA, and to see its distribution. In total, 10 lakes namely Lake Andrakanala, Ankorefo, Ambatonankoay, Ambalamangaoko, Antsafa, Andranomadio, Ankolompana, Matsaborimena, Matsaborifaly and Maroakata were the subject of these inventories. Among these lakes, only in Ankolompana, Maroakata, Ankorefo and Matsaborifaly Erymnochelys madagascariensis was present.
          </p>
          <p className="bodyText">
However, the species is highly threatened due to consumption by the local community and disturbance of its habitat.
          </p>
        </div>
      </div>
    </section>
  );
}