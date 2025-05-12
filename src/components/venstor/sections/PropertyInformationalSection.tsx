import { BagIcon, GreenIcon } from "@/assets/constants";
import InvestmentStrategy from "../InvestmentStrategy";
import SectionHeading from "../SectionHeading";

const PropertyInformationalSection = () => {
  return (
    <div className="py-10 flex flex-col gap-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title={"Information sur la batisse (a venir)"}
          subtitle={`Vous achetez la bâtisse mais vous ne faites aucunes optimisations. Seulement de l’appréciation à travers le temps. Et une augmentation des loyers selon la grille du T.A.L`}
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-span-4">
            <InvestmentStrategy
              title="Property Information 1"
              data={[
                {
                  label: "Year Built:",
                  value: "1987",
                },
                {
                  label: "Zoning Type:",
                  value: "Multi-Family Residential",
                },
                {
                  label: "Heating Type:",
                  value: "Electric Baseboard Heating",
                },
              ]}
            />
          </div>
        ))}

        <div className="col-span-6 h-full">
          <InvestmentStrategy
            title="Property Information 1"
            data={[
              {
                label: "Year Built:",
                value: "1987",
              },
              {
                label: "Zoning Type:",
                value: "Multi-Family Residential",
              },
              {
                label: "Heating Type:",
                value: "Electric Baseboard Heating",
              },
            ]}
          />
        </div>
        <div className="col-span-6 h-full">
          <div className="border border-[#CECECE] rounded-2xl overflow-hidden font-roboto">
            <div className="p-4">
              <h3 className="text-black-global text-base font-bold leading-full">
                Rental Composition
              </h3>
            </div>
            <div className="p-4 border-t border-[#cecece] flex items-center justify-between gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex-none">
                      <BagIcon />
                    </div>
                    <p className="text-light-black text-sm font-medium">
                      Total Units:
                    </p>
                  </div>
                  <p className="text-primary text-sm font-bold">06</p>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-3 bg-[#FAFAFA] px-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex flex-row items-center gap-2"
                      >
                        <div className="flex-none">
                          <GreenIcon />
                        </div>
                        <p className="text-light-black text-sm font-bold">
                          1 * 1 Bedroom
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformationalSection;
