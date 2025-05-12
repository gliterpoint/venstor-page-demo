import Heading from "../Heading";
import InvestmentStrategy from "../InvestmentStrategy";

const InvestmentStrategySection = () => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-[161px_1fr_1fr] gap-4">
        <div className="shadow-working bg-white p-4 rounded-2xl">
          <img src="/illustration-4.png" alt="illustration-4" />
        </div>
        <InvestmentStrategy
          title="Investment Strategy"
          data={[
            {
              label: "Estimated Renovation Cost",
              value: "$150,000",
            },
            {
              label: "Potential Rental Income:",
              value: "$150,000",
            },
            {
              label: "Total",
              value: "= $24,000/year",
            },
          ]}
        />
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <Heading text="Why It Works" />
            <div className="flex flex-col gap-4">
              <p className="font-roboto text-sm leading-5">
                Turning a garage into a fully livable unit is a proven
                investment strategy in dense urban areas. It boosts property.
              </p>
              <p className="font-roboto text-sm leading-5">
                Value and generates consistent rental income with minimal land
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentStrategySection;
