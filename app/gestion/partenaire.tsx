// components/PartnersSection.tsx

export default function PartnersSection() {
  const partners = [
    {
      name: "Fikambanana Vondrona 1",
      desc: "Partenaire local sur les actions communautaires et la mobilisation de terrain.",
      type: "Association locale",
    },
    {
      name: "ONG Fanantenana",
      desc: "Soutien logistique et technique pour les projets sociaux d’envergure.",
      type: "ONG",
    },
    {
      name: "Entreprise Soa Group",
      desc: "Contribution financière et matérielle pour les campagnes solidaires.",
      type: "Partenaire privé",
    },
  ];

  return (
    <section id="partenaires" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Nos partenaires
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Ces partenaires accompagnent et renforcent nos actions majeures,
          permettant d’élargir notre impact sur le terrain.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 rounded-lg bg-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                {partner.name}
              </h3>
              <p className="text-xs text-indigo-600 mb-2">
                {partner.type}
              </p>
              <p className="text-sm text-gray-700">
                {partner.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
