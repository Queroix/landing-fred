import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import PropertiesSection from "@/sections/PropertiesSection";
import SpecialOffersSection from "@/sections/SpecialOffersSection";
import ContactSection from "@/sections/ContactSection";
import LocationSection from "@/sections/LocationSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <SpecialOffersSection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsappButton />
    </>
  );
}
