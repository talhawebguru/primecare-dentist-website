import Header from "./components/common/Header";
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import AboutSection from './components/home/AboutSection';
import ProcessSection from './components/home/ProcessSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import TeamSection from './components/home/TeamSection';
import BlogSection from './components/home/BlogSection';
import ContactSection from './components/home/ContactSection';
import ContactInfoBar from "./components/home/ContactInfoBar";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ContactInfoBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
