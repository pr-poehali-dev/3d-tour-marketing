import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import DemoTour from "@/components/sections/DemoTour";
import CasesReviews from "@/components/sections/CasesReviews";
import Process from "@/components/sections/Process";
import PriceCalculator from "@/components/sections/PriceCalculator";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-pure-white">
      <Hero />
      <ProblemSolution />
      <DemoTour />
      <CasesReviews />
      <Process />
      <PriceCalculator />
      <FinalCTA />
    </div>
  );
};

export default Index;
