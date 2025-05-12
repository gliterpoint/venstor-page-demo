import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  type DotProps,
} from "recharts";
import CustomLegendLineChart from "./CustomLegendLineChart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import type { FC } from "react";
import type { LineChartDataPoint } from "@/types";

const CustomizedLineOneDot: FC<DotProps> = (props) => {
  const { cx, cy } = props;
  if (cx == null || cy == null) return null;
  return (
    <svg
      x={cx - 9}
      y={cy - 8}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.323836"
        y="-0.323836"
        width="0.950849"
        height="0.647673"
        transform="matrix(1 0 0 -1 8.96289 7.46414)"
        stroke="#00A6E8"
        strokeWidth="0.647673"
      />
      <circle
        opacity="0.25"
        cx="8"
        cy="8"
        r="7.5"
        transform="matrix(1 0 0 -1 0.962891 16.1123)"
        stroke="#00A6E8"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        fill="#00A6E8"
      />
      <circle
        cx="4"
        cy="4"
        r="3.5"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        stroke="black"
        strokeOpacity="0.25"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        fill="#00A6E8"
      />
      <circle
        cx="4"
        cy="4"
        r="3.5"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        stroke="black"
        strokeOpacity="0.25"
      />
    </svg>
  );
};

const CustomizedLineTwoDot: FC<DotProps> = (props) => {
  const { cx, cy } = props;
  if (cx == null || cy == null) return null;
  return (
    <svg
      x={cx - 9}
      y={cy - 8}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.323836"
        y="-0.323836"
        width="0.950849"
        height="0.647673"
        transform="matrix(1 0 0 -1 8.96289 7.46414)"
        stroke="#167F3D"
        strokeWidth="0.647673"
      />
      <circle
        opacity="0.25"
        cx="8"
        cy="8"
        r="7.5"
        transform="matrix(1 0 0 -1 0.962891 16.1123)"
        stroke="#167F3D"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        fill="#167F3D"
      />
      <circle
        cx="4"
        cy="4"
        r="3.5"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        stroke="black"
        strokeOpacity="0.25"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        fill="#167F3D"
      />
      <circle
        cx="4"
        cy="4"
        r="3.5"
        transform="matrix(1 0 0 -1 4.96289 12.1123)"
        stroke="black"
        strokeOpacity="0.25"
      />
    </svg>
  );
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const CustomLineChart = ({
  data,
  isLegend = true,
  yAxis = true,
}: {
  data: LineChartDataPoint[];
  isLegend?: boolean;
  yAxis?: boolean;
}) => {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#00000050" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickFormatter={(value) => value.slice(0, 7)}
          />
          {yAxis && (
            <YAxis
              tickLine={false}
              axisLine={false}
              className="font-inter text-sm leading-full"
            />
          )}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          {isLegend && <Legend content={<CustomLegendLineChart />} />}
          <Line
            type="linear"
            dataKey="pv"
            stroke="#1CA34E"
            dot={<CustomizedLineTwoDot />}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="uv"
            stroke="#00A6E8"
            dot={<CustomizedLineOneDot />}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};

export default CustomLineChart;
