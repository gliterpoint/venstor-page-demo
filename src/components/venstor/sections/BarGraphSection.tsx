import CustomBarChart from "../CustomBarChart";
import { barChartData, chartConfigOne } from "@/data/constants";
import { GraphPointer } from "@/assets/constants";

const BarGraphSection = () => {
  return (
    <div className="flex flex-col gap-9 mt-2">
      <div className="h-[1px] w-full bg-[#DBDBDB] max-w-[550px] mx-auto"></div>
      {/* Bar Chart Section  */}
      <div className="grid grid-cols-3 max-w-4xl mx-auto">
        <CustomBarChart
          fill={"#808080"}
          chartConfig={chartConfigOne}
          title="$75,540"
          data={barChartData}
        />
        <div className="flex items-center justify-center">
          <GraphPointer />
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
