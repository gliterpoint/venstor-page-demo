import { dataLineChart } from "@/data/constants";
import CustomLineChart from "../CustomLineChart";
import {
  LegendIconBlue,
  LegendIconRed,
  LegendIconYellow,
} from "@/assets/constants";
import HeroCard from "../HeroCard";

const PotentialSummarySection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className=" w-full">
          <CustomLineChart
            data={dataLineChart}
            isLegend={false}
            yAxis={false}
          />
        </div>
        <div className="w-full">
          <CustomLineChart
            data={dataLineChart}
            isLegend={false}
            yAxis={false}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 font-roboto items-center justify-center">
          <div className="flex flex-row items-center gap-4">
            <div className="flex-none">
              <LegendIconRed />
            </div>
            <p className="text-[#000000B2] text-sm leading-full font-inter">
              RSMDF avec cashflow
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex-none">
              <LegendIconYellow />
            </div>
            <p className="text-[#000000B2] text-sm leading-full font-inter">
              RSMDF avec la valeur de la bâtisse + cashflow
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex-none">
              <LegendIconBlue />
            </div>
            <p className="text-[#000000B2] text-sm leading-full font-inter">
              RSMDF avec la valeur de la bâtisse + équité crée + cashflow
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 max-w-4xl mx-auto w-full">
        <HeroCard
          bgColor="#E6F6FD"
          heading="Appréciation naturel"
          value="18%"
          // stats="+11.01%"
        />

        <HeroCard
          bgColor="#EDFCEA"
          heading="Ajout de logement"
          value="57.82%"
          // stats="-0.03%"
        />

        <HeroCard
          bgColor="#F3F3F5"
          heading="Ajout de service"
          value="45%"
          // stats="+15.03%"
        />
      </div>
    </>
  );
};

export default PotentialSummarySection;
