
import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import TemplatesPreview from "../components/home/TemplatesPreview";
import WhySmartCV from "../components/home/WhySmartCV";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";


export default function Home() {
  return (
    <div className="bg-background">
      
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Features />
      <TemplatesPreview />
      <WhySmartCV />
      <Testimonials />
      <CTA />
      
    </div>
  );
}