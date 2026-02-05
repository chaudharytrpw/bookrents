import CategoryGrid from "./components/CategoryGrid";
import CTASection from "./components/CTASection";
import FeaturedBooks from "./components/FeaturedBooks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SearchSection from "./components/SearchSection";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      {/* <SearchSection /> */}
      <CategoryGrid />
      <FeaturedBooks />
      <HowItWorks />
      <CTASection />
      <Footer />
    </main>
  );
}