import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import TargetMarket from "@/components/TargetMarket";
import BusinessModel from "@/components/BusinessModel";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import ProductService from "@/components/ProductService";
import AppMockup from "@/components/AppMockup";
import MarketingPlan from "@/components/MarketingPlan";
import Operations from "@/components/Operations";
import FinancialOverview from "@/components/FinancialOverview";
import ZeroWasteEcosystem from "@/components/ZeroWasteEcosystem";
import FuturePlan from "@/components/FuturePlan";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <TargetMarket />
      <BusinessModel />
      <CompetitorAnalysis />
      <ProductService />
      <AppMockup />
      <MarketingPlan />
      <Operations />
      <FinancialOverview />
      <ZeroWasteEcosystem />
      <FuturePlan />
      <CTA />
      <Footer />
    </main>
  );
}
