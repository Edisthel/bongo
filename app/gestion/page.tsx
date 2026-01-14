import Footer from "../footer";
import CorridorForestierPage from "./corridor";
import TeamCorridor from "./equipeCor";
import HeroPage from "./hero";
import PartnersSection from "./partenaire";

export default function HomePage() {
  return (
  <main>
        <CorridorForestierPage />
        <TeamCorridor />
        <PartnersSection />
        <Footer />
      </main>

  );
}
