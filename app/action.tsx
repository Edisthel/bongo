// components/CallToActionSection.js
import React from 'react';
import './styles/hero.css';

const CallToActionSection = () => {
  return (
    // ctaContainer: max-width, padding, background, center items
    <section className="bg-gradient-to-br from-green-100 to-indigo-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ctaContent: text alignment and spacing */}
        <div className="text-center">
          
          {/* title: size, font-weight, color, margin-bottom */}
          <h2 className="text-3xl font-extrabold tracking-tight text-green-900 hover: 'text-indigo-700' sm:text-4xl">
            Ensemble, faisons grandir le Bongolava Maitso
          </h2>
          
          {/* subtitle: size, color, margin-top, max-width */}
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-3xl mx-auto">
            Chaque action, du soutien financier à la collaboration sur le terrain, est essentielle pour la gestion durable de l'Aire Protégée et le développement des communautés.
          </p>

          {/* buttonGroup: spacing, layout (flex on md screens) */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            
            {/* Bouton Principal : Faire un Don (Primary Button) */}
            <a
              href="#" // Remplacer par la destination de don
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg 
                text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Faire un Don 💚
            </a>
            
            {/* Bouton Secondaire : Devenir Partenaire (Secondary Button) */}
            <a
              href="#" // Remplacer par la destination de contact
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm
                text-gray-700 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              Devenir Partenaire
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;