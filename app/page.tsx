import HeroSection from "./hero";
import MissionSection from "./Mission";
import ResultsSection from "./resultat";
import CallToActionSection from "./action";
import Footer from "./footer";
import TeamResponsibilities from "./responsabilite";
import Galerie from "./gallerie";
import { galleryItems } from "./imgaeFaune";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <MissionSection />
        <TeamResponsibilities />
        <ResultsSection />
        <Galerie message= " Préserver et restaurer les écosytèmes naturels." galleryItems = { galleryItems } />
        <CallToActionSection />
        <Footer />
      </main>
  );
}
