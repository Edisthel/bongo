// components/TestimonialsSection.tsx

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rasoa",
      role: "Membre de la communauté",
      quote:
        "Grâce aux actions du fikambanana, notre quartier a retrouvé une vraie cohésion et un esprit de solidarité.",
    },
    {
      name: "Norolala",
      role: "Membre de la communauté",
      quote:
        "Grâce aux actions du fikambanana, notre quartier a retrouvé une vraie cohésion et un esprit de solidarité.",
    },
    {
      name: "Jean",
      role: "Bénéficiaire d’un soutien",
      quote:
        "Dans un moment très difficile, ils ont été présents pour ma famille, autant moralement que matériellement.",
    },
    {
      name: "Soazaka",
      role: "Membre de la communauté",
      quote:
        "Grâce aux actions du fikambanana, notre quartier a retrouvé une vraie cohésion et un esprit de solidarité.",
    },
    {
      name: "Lalao",
      role: "Volontaire",
      quote:
        "Participer aux missions m’a permis de voir concrètement l’impact des actions sur la vie des plus fragiles.",
    },
    {
      name: "Karmen",
      role: "Membre de la communauté",
      quote:
        "Grâce aux actions du fikambanana, notre quartier a retrouvé une vraie cohésion et un esprit de solidarité.",
    },
  ];

  return (
    <section
      id="temoignages"
      className="bg-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
          Témoignages des actions majeures
        </h2>
        <p className="text-red-600 max-w-2xl mx-auto text-center mb-10">
          Quelques paroles fortes de celles et ceux qui ont directement vécu ou
          participé aux actions majeures de l'association.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="bg-gray-50 rounded-xl p-6 h-full flex flex-col justify-between shadow-sm"
            >
              <blockquote className="text-sm text-gray-700 mb-4">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm font-semibold text-green-400">
                  {item.name}
                </p>
                <p className="text-xs text-yellow-700">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
