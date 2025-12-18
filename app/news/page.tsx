import { ShieldAlert, ShieldOff, SquareChartGantt} from "lucide-react";
import Link from "next/link";

export default function Home(){
    const links = [
        {name: 'Assessment', href: 'news/assessment', icon: SquareChartGantt, text: "Assessment of the population Erymnochelys madagascariensis in the lakes inside the protected area Corridor Forestier Bongolava"},
        {name: 'Protection', href: 'news/protection', icon: ShieldOff, text: "Protection strategy for forests fragments in the protected area Corridor Forestier Bongolava in collaboration with the community"},
        {name: 'Securisation', href: 'news/securisation', icon: ShieldAlert, text: "Sécurisation des populations de lémuriens dans l’aire protégée de Corridor forestier bongolava"},
    ];
    const primaryColor = 'text-green-700';
    const bgColor = 'bg-gradient-to-br from-green-100 to-indigo-200';
    const accentBg = 'bg-green-50'; // Arrière-plan légèrement vert pour les sections
    const borderColor = 'border-green-300';
    
    return (
        <main>
           <div className="bg-green-50 rounded-lg p-6 sm:p-10 shadow-xl">
          <h2 className={`text-2xl font-bold ${primaryColor} mb-8 border-b-2 border-green-300 pb-2`}>
            NEWS
          </h2>
          <dl className="animate-reveal space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            {links.map((item, index) => (
              <div key={index} className="flex flex-col items-start p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`flex items-center justify-center h-12 w-12 rounded-md ${accentBg} border-2 ${borderColor}`}>
                  {/* L'icône du composant Lucide React */}
                  <item.icon className={`h-6 w-6 ${primaryColor}`} aria-hidden="true" />
                </div>
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover: text-blue-800 hover:underline text-lg font-medium"
                    >
                        {item.name}
                    </Link>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        </main>
    );
}