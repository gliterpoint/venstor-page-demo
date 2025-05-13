import Heading from "../Heading";

const PriceGuageSection = () => {
  return (
    <div className="flex flex-col gap-4 md:py-4">
      <Heading text={"Données du marché en vente présentement"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-plus-jakarta-sans py-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default PriceGuageSection;
