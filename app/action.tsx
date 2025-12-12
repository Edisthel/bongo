// components/CallToActionSection.js
import React from 'react';
import './styles/hero.css';

const CallToActionSection = () => {
  return (
    <section className="ctaContainer">
      <div className="ctaContent">
        
        <h2 className="title">
          Ensemble, faisons grandir le Bongolava Maitso
        </h2>
        
        <p className="subtitle">
          Chaque action, du soutien financier à la collaboration sur le terrain, est essentielle pour la gestion durable de l'Aire Protégée et le développement des communautés.
        </p>

        <div className="buttonGroup">
          
          {/* Bouton Principal : Soutien */}
          <button className="ctaButton primary">
            Faire un Don 💚
          </button>
          
          {/* Bouton Secondaire : Contact */}
          <button className="ctaButton secondary">
            Devenir Partenaire
          </button>

        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;