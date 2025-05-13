import { COLORS, dataPieChart } from "@/data/constants";
import CustomPieChart from "../CustomPieChart";
import Heading from "../Heading";
import PieChartStats from "../PieChartStats";

const PieChartSection = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-7">
        <div className="flex flex-col gap-4 md:gap-6 md:pl-6 py-4 md:py-0">
          <div className="md:py-4">
            <Heading text={"Financement"} />
          </div>
          <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-2 sm:gap-6 font-plus-jakarta-sans">
            <PieChartStats value={"20%"} title={"Mise de fonds nécessaire"} />
            <div className="w-[1px] bg-[#CECECE]"></div>
            <PieChartStats value={"4.75%"} title={"Taux intérêt"} />
            <div className="w-[1px] bg-[#CECECE]"></div>
            <PieChartStats value={"30 ans"} title={"Amortissement"} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="pt-4">
          <Heading text={"Structure du financement"} />
          <div className="lg:h-80 pt-5">
            <CustomPieChart data={dataPieChart} colors={COLORS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartSection;
