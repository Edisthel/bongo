import HeroSection from "./hero";
import MissionSection from "./Mission";
import ResultsSection from "./resultat";
import CallToActionSection from "./action";
import Footer from "./footer";
import TeamResponsibilities from "./responsabilite";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <MissionSection />
        <TeamResponsibilities />
        <ResultsSection />
        <CallToActionSection />
        <Footer />
      </main>
  );
}
