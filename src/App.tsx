import SectionLayout from "./components/SectionLayout";
import HeroSection from "@/components/venstor/sections/HeroSection";
import PieChartSection from "./components/venstor/sections/PieChartSection";
import FutureValueSection from "./components/venstor/sections/FutureValueSection";
import ROISection from "./components/venstor/sections/ROISection";
import PriceGuageSection from "./components/venstor/sections/PriceGuageSection";
import BarGraphSection from "./components/venstor/sections/BarGraphSection";
import CurrentMarketRentSection from "./components/venstor/sections/CurrentMarketRentSection";
import StrategyCardSection from "./components/venstor/sections/StrategyCardSection";
import RefinancingOptimizationSection from "./components/venstor/sections/RefinancingOptimizationSection";
import Heading from "./components/venstor/Heading";
import InvestmentStrategySection from "./components/venstor/sections/InvestmentStrategySection";
import PotentialSummarySection from "./components/venstor/sections/PotentialSummarySection";
import PropertyInformationalSection from "./components/venstor/sections/PropertyInformationalSection";

function App() {
  return (
    <div className="max-w-7xl p-3 ml-auto mr-auto py-10 sm:py-24">
      <div className="flex flex-col gap-6">
        {/* Hero Section  */}
        <HeroSection />
        {/* End Hero Section  */}

        {/* Slider Section  */}
        <PriceGuageSection />
        {/* End Slider Section  */}

        {/* Section One  */}
        <SectionLayout
          title={"Achat sans optimisation"}
          subtitle={`Vous achetez la bâtisse mais vous ne faites aucunes optimisations.
          Seulement de l’appréciation à travers le temps. Et une augmentation
          des loyers selon la grille du T.A.L`}
        >
          {/* Pie Chart Section  */}
          <PieChartSection />
          {/* End Pie Chart Section  */}

          {/* Line Chart One Section  */}
          <FutureValueSection />
          {/* End Line Chart One Section  */}

          {/* Line Chart Two Section  */}
          <ROISection />
          {/* End Line Chart Two Section  */}
        </SectionLayout>
        {/* End Section One  */}

        {/* Section Two  */}
        <SectionLayout
          title={"Optimisation :  Ajout de services"}
          subtitle={`Vous proposez aux locataires d’améliorer leurs qualités de vie en proposant des services additionnels ou des rénovations`}
        >
          {/*Bar Chart Section  */}
          <BarGraphSection />
          {/* End Bar Chart Section  */}

          {/* Current Rent and Market Rent Section  */}
          <CurrentMarketRentSection />
          {/* End Current Rent and Market Rent Section  */}

          <div className="flex flex-col gap-6 md:gap-10">
            {/* Card Section  */}
            <StrategyCardSection />
            {/* End Card Section  */}

            {/* Card Two Section  */}
            <RefinancingOptimizationSection
              title={"Refinancement après optimisation"}
            />
            {/* End Card Two Section  */}
          </div>
        </SectionLayout>
        {/* End Section Two  */}

        {/* Note Heading  */}
        <div className="sm:py-6">
          <p className="text-[#344054] text-lg leading-7 font-medium">
            *L’augmentation annuel des loyers est basées sur les précédentes
            grilles du T.A.L et celle de la CORPIQ
          </p>
        </div>
        {/* End Note Heading  */}

        {/* Section Three  */}
        <SectionLayout
          title={"Optimisation : Ajouts de logement"}
          subtitle={`Conversion de garage, ajout d’étage ou demi-sous-sol : maximisez le potentiel de votre propriété`}
        >
          {/*Bar Chart Section  */}
          <BarGraphSection />
          {/* End Bar Chart Section  */}

          <div className="flex flex-col gap-6 sm:gap-10">
            <div className="sm:text-center sm:pt-6">
              <Heading text="Stratégie : Conversion de garage en logement" />
            </div>
            <InvestmentStrategySection />

            {/* Card Two Section  */}
            <RefinancingOptimizationSection title="Refinancement après travaux" />
            {/* End Card Two Section  */}
          </div>
        </SectionLayout>
        {/* End Section Three  */}

        {/* Section Four  */}
        <SectionLayout
          title={"Résumé du potentiel"}
          subtitle={`Voici la performance des meilleurs stratégies retenus`}
        >
          <PotentialSummarySection />
        </SectionLayout>
        {/* End Section Four  */}

        {/* Section Five  */}
        <PropertyInformationalSection />
        {/* End Section Five  */}
      </div>
    </div>
  );
}

export default App;
