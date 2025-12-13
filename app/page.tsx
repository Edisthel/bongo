import HeroSection from "./hero";
import MissionSection from "./Mission";
import ResultsSection from "./resultat";
import CallToActionSection from "./action";
import Footer from "./footer";
import TeamResponsibilities from "./responsabilite";
import Galerie from "./gallerie";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <MissionSection />
        <TeamResponsibilities />
        <ResultsSection />
        <Galerie />
        <CallToActionSection />
        <Footer />
      </main>
  );
}
