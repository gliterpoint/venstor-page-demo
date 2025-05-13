import StrategyCard from "../StrategyCard";
import Heading from "../Heading";

const StrategyCardSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <Heading
        text={"Stratégie : Augmenter la qualité de vie des locataires"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StrategyCard
          title={"Rénovation Cuisine"}
          icon={"/illustration-1.png"}
          data={["-15,000$ / unitée", "+150$ / mois logement"]}
        />
        <StrategyCard
          title={"Rénovation Salle De Bain"}
          icon={"/illustration-2.png"}
          data={["-15,000$ / unitée", "+150$ / mois logement"]}
        />
        <StrategyCard
          title={"Ajout De Thermopompe"}
          icon={"/illustration-3.png"}
          data={["-15,000$ / unitée", "+150$ / mois logement"]}
        />
      </div>
    </div>
  );
};

export default StrategyCardSection;
