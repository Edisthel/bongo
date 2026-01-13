// components/RulesActivitiesSection.tsx

export default function RulesActivitiesSection() {
  const rules = [
    "Respect mutuel entre tous les membres et bénéficiaires.",
    "Transparence dans la gestion des actions et des ressources.",
    "Interdiction de toute forme de discrimination ou de violence.",
  ];

  const activities = [
    "Réunions régulières pour planifier et évaluer les actions.",
    "Sorties de terrain pour sensibilisation et accompagnement.",
    "Formations internes pour renforcer les compétences des membres.",
  ];

  return (
    <section id="regles-activites" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Règles et activités
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Le fonctionnement du « Fikambanana tsy Mataho-Maty » repose sur des
          règles claires et des activités régulières au service de la communauté.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Règles */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Règles de fonctionnement
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Activités */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Activités principales
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              {activities.map((act) => (
                <li key={act}>{act}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
