import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import PropertiesSection from "@/sections/PropertiesSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsappButton />
    </>
  );
}
