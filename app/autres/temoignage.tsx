// components/TestimonialSection.js

// Pour l'exemple, nous allons simuler un composant Star Rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.729c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};


const testimonialsData = [
  {
    quote: "Grâce aux cours de Physique Chimie pour la série C, mon fils a gagné 4 points de moyenne en un trimestre ! Les professeurs sont vraiment les meilleurs.",
    name: "Mme Diop",
    title: "Parent d'élève, Série C",
    rating: 5,
  },
  {
    quote: "La maîtrise des outils numériques rend les SVT passionnantes. C'est simple, interactif, et ça change des cours classiques. Un vrai plus !",
    name: "A. Koné",
    title: "Élève, Série D",
    rating: 4,
  },
  {
    quote: "La collaboration entre les enseignants se ressent. Les cours de Mathématiques étaient parfaitement alignés avec le programme. J'ai réussi mon examen haut la main.",
    name: "F. Traoré",
    title: "Ancien Élève, Série A",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Ce Qu'ils Disent
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            La Preuve de Notre Succès
          </p>
        </div>

        {/* Grille des Témoignages */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500 flex flex-col h-full"
            >
              {/* Étoiles */}
              <StarRating rating={testimonial.rating} />
              
              {/* Citation */}
              <blockquote className="mt-4 flex-grow">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Auteur */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-indigo-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;