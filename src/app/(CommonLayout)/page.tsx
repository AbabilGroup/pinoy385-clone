import Achievements from "@/components/pages/homepage/Achievements";
import Clients from "@/components/pages/homepage/Clients";
import Contact from "@/components/pages/homepage/Contact";
import Hero from "@/components/pages/homepage/Hero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Achievements />
      <Clients />
      <Contact />
    </main>
  );
};

export default HomePage;
