// components/ActivitiesSection.tsx

export default function ActivitiesSection() {
  const activities = [
    {
      title: "Soutien aux familles",
      desc: "Accompagnement moral, social et matériel des familles en difficulté.",
    },
    {
      title: "Actions communautaires",
      desc: "Organisation d’actions collectives pour renforcer la solidarité locale.",
    },
    {
      title: "Formation et sensibilisation",
      desc: "Ateliers, conférences et formations sur les valeurs et le vivre-ensemble.",
    },
  ];

  return (
    <section
      id="activites"
      className="bg-gray-50 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Présentation des activités
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10">
          Découvrez les principales activités menées par notre fikambanana pour
          soutenir la communauté et porter nos valeurs sur le terrain.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
