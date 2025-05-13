import CustomBarChart from "../CustomBarChart";
import { barChartData, chartConfigOne } from "@/data/constants";
import { GraphPointer, GraphPointerMobile } from "@/assets/constants";

const BarGraphSection = () => {
  return (
    <div className="flex flex-col gap-9 mt-2 sm:mt-0">
      <div className="h-[1px] w-full bg-[#DBDBDB] max-w-[550px] mx-auto hidden md:block"></div>
      {/* Bar Chart Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl mx-auto">
        <CustomBarChart
          fill={"#808080"}
          chartConfig={chartConfigOne}
          title="$75,540"
          data={barChartData}
        />
        <div className="lg:flex items-center justify-center hidden">
          <GraphPointer />
        </div>
        <div className="lg:hidden items-center justify-center flex py-4">
          <GraphPointerMobile />
        </div>
        <CustomBarChart
          fill={"#06B6D4"}
          chartConfig={chartConfigOne}
          title="$98,340"
          data={barChartData}
        />
      </div>
    </div>
  );
};

export default BarGraphSection;
