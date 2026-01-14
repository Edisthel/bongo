// components/TeamCorridor.tsx
type TeamMember = {
  name: string;
  role: string;
  organization: string;
  description: string;
  photoUrl?: string;
};

const team: TeamMember[] = [
  {
    name: "Rasoanaivo Tahina",
    role: "Coordinateur de corridor",
    organization: "Projet Corridor Forestier",
    photoUrl: "img/1.jpg",
    description:
      "Supervise la mise en œuvre du plan de gestion, la coordination avec les partenaires et le suivi des indicateurs de conservation.",
  },
  {
    name: "Rabenandrasana Lova",
    role: "Responsable suivi écologique",
    organization: "Unité de conservation",
    photoUrl: "img/2.jpg",
    description:
      "Assure le suivi de la biodiversité, la collecte des données de terrain et l’analyse des pressions sur les habitats.",
  },
  {
    name: "Raharinirina Fara",
    role: "Spécialiste développement communautaire",
    organization: "ONG partenaire",
    photoUrl: "img/3.jpg",
    description:
      "Accompagne les communautés riveraines dans la mise en place d’activités durables et de transferts de gestion.",
  },
  {
    name: "Raharinirina Fara 3",
    role: "Spécialiste développement communautaire",
    organization: "ONG partenaire",
    photoUrl: "img/3.jpg",
    description:
      "Accompagne les communautés riveraines dans la mise en place d’activités durables et de transferts de gestion.",
  },
  {
    name: "Andrianina Tojo",
    role: "Chargé de restauration forestière",
    organization: "Projet Corridor Forestier",
    photoUrl: "img/bio1.png",
    description:
      "Pilote les actions de reboisement, d’agroforesterie et de restauration des zones dégradées dans le corridor.",
  },
];

export default function TeamCorridor() {
  return (
    <section className="border-t border-gray-200 pt-10 bg-green-800">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Équipe de gestion du corridor
          </h2>
          <p className="mt-3 text-yellow-500">
            Une équipe pluridisciplinaire travaille au quotidien pour concilier
            conservation du corridor forestier et développement local durable.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              {member.photoUrl && (
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="mb-4 h-20 w-20 self-center rounded-full object-cover"
                />
              )}

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-emerald-700">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500">{member.organization}</p>
                <p className="mt-3 text-sm text-gray-700">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
