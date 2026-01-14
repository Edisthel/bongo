import Footer from "../footer";
import BiodiversityHeritageSection from "./biodiversite";
import HeroPage from "./hero";
import ActivitiesSection from "./present";
import RulesActivitiesSection from "./regles";

export default function HomePage() {
  return (
  <main>
        <HeroPage />
        <ActivitiesSection />
        <BiodiversityHeritageSection />
        <RulesActivitiesSection />

        <Footer />
      </main>

  );
}
