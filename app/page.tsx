import HeroSection from "./hero";
import MissionSection from "./Mission";
import ResultsSection from "./resultat";
import CallToActionSection from "./action";
import Footer from "./footer";
import TeamResponsibilities from "./responsabilite";
import Galerie from "./gallerie";
import { galleryItems } from "./imgaeFaune";
import HeroSection2 from "./hero2";

export default function Home() {
  return (
      <main>
        <HeroSection2 />
        <MissionSection />
        <TeamResponsibilities />
        <Footer />
      </main>
  );
}
