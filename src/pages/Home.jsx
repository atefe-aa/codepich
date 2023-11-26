import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CvSection from "../components/CvSection";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <main id="fullpage">
      <HomeSection />
      <HomeSection>
        <ServicesSection />
      </HomeSection>
      <AboutSection />
      <CvSection />
      <ContactSection />
    </main>
  );
}

export default Home;
