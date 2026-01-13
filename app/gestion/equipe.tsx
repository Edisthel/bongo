// components/TeamSection.tsx

export default function TeamSection() {
  const team = [
    {
      name: "Rakoto Hery",
      role: "Président du Fikambanana",
      bio: "Coordonne les grandes orientations et représente le mouvement auprès des partenaires.",
    },
    {
      name: "Rasoava Lala",
      role: "Responsable des actions sociales",
      bio: "Supervise les interventions de terrain et le suivi des familles accompagnées.",
    },
    {
      name: "Jean Paul",
      role: "Responsable communication",
      bio: "Assure la visibilité des actions et le lien avec la communauté.",
    },
  ];

  return (
    <section id="equipes" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Présentation des équipes
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Une équipe soudée, engagée et complémentaire qui porte les valeurs du
          « Fikambanana tsy Mataho-Maty » sur le terrain.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm text-indigo-600 mb-2">
                {person.role}
              </p>
              <p className="text-sm text-gray-700">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
