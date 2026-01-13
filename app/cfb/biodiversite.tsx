// components/BiodiversityHeritageSection.tsx

export default function BiodiversityHeritageSection() {
  const items = [
    {
      title: "Biodiversité locale",
      desc: "Protection des espèces endémiques, des forêts et des écosystèmes fragiles de notre région.",
    },
    {
      title: "Patrimoine culturel",
      desc: "Valorisation des traditions, de la langue, et des savoir-faire transmis de génération en génération.",
    },
    {
      title: "Patrimoine historique",
      desc: "Préservation des lieux de mémoire, des sites historiques et des symboles de notre identité.",
    },
  ];

  return (
    <section id="biodiversite-patrimoine" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Biodiversité et patrimoine
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Le fikambanana agit pour protéger la richesse naturelle et culturelle,
          afin de transmettre un héritage vivant aux générations futures.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
