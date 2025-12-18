import { Sprout, BookOpen, UsersRound, Handshake, BookOpenCheck, ChartPie } from "lucide-react";

export default function ResultsSection() {
  return (
    <section className="min-h-screen w-full py-20 px-6 bg-gradient-to-b from-green-450 via-green-800 to-green-900 text-white">
      
      {/* ---------------------------------------N---------------------------------------------------*/}
      {/* ---------------------------------------N---------------------------------------------------*/}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
          Services
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Construire un territoire résilient, durable et respecteux de la biodiversité.
        </p>
        <p className="mt-3 text-yellow-300 text-lg">
        Protéger et valoriser l'environnement de Bongolavamaitso en préservant la biodiversité, en sensibilisant les communauté.
        </p>
      </div>




      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-2xl border border-gray-700 
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <Sprout className="w-14 h-14 text-cyan-300 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Préserver et restaurer les écosytèmes naturels</h2>
          <p className="text-gray-300">
            Maintenir l'équilibre écologique et renforcer la biodiversité locale.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-cyan-600 transition">
            Préservation
          </button>
        </div>



        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-2xl border border-gray-700
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <BookOpen className="w-14 h-14 text-yellow-300 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Sensibiliser et éduquer la population.</h2>
          <p className="text-gray-300">
            Développer une culture environnementale durable.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition">
            Sensibilisation
          </button>
        </div>



        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-indigo-800 to-indigo-900 p-6 rounded-2xl border border-gray-700
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-300 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <UsersRound className="w-14 h-14 text-green-300 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Impliquer la communauté dans la protection de l'environnement</h2>
          <p className="text-gray-300">
            Construire une gouvernance environnementale participative.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-green-600 transition">
            Protection
          </button>
        </div>

        
        
        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-purple-800 to-purple-900 p-6 rounded-2xl border border-gray-700
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-300 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <Handshake className="w-14 h-14 text-purple-300 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Favoriser la collaboration et les partenariats</h2>
          <p className="text-gray-300">
            Multiplier l'impacte et renforcer la solidarité écologique.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition">
            Collaboration
          </button>
        </div>

        
        
        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-indigo-800 to-indigo-900 p-6 rounded-2xl border border-gray-700
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <BookOpenCheck className="w-14 h-14 text-pink-300 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Garantir la transparence et la responsabilité</h2>
          <p className="text-gray-300">
            Multiplier l'impacte et renforcer la solidarité écologique.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition">
            Transparence
          </button>
        </div>

        
        
        {/* ---------------------------------------N---------------------------------------------------*/}
        {/* ---------------------------------------N---------------------------------------------------*/}
        <div className="group relative bg-gradient-to-br from-teal-800 to-teal-900 p-6 rounded-2xl border border-gray-700
                        shadow-lg hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 opacity-0 group-hover:opacity-20
                          blur-xl rounded-2xl transition-all duration-500"></div>
          <ChartPie className="w-14 h-14 text-gray-400 mb-4 drop-shadow-lg" />
          <h2 className="text-xl font-bold mb-2">Produire et diffuser des données environnementales fiables </h2>
          <p className="text-gray-300">
            Offrir une base de références scientifique pour la prise de décision.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 transition">
            Information
          </button>
        </div>

      </div>
    </section>
  );
}