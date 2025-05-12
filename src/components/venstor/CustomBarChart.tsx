import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { BarChartEntry } from "@/types";

const CustomBarChart = ({
  fill,
  chartConfig,
  title,
  data,
}: {
  fill: string;
  title: string;
  chartConfig: ChartConfig;
  data: BarChartEntry[];
}) => {
  return (
    <div className="shadow-bargraph bg-white rounded-lg pt-6 pb-5 pr-4 flex flex-col gap-6">
      <h3 className="text-2xl font-bold font-inter leading-full text-center">
        {title}
      </h3>
      <ChartContainer config={chartConfig} className="h-48 w-full ">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill={fill} radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default CustomBarChart;
