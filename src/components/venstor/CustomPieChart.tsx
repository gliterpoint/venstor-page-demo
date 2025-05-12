import { Cell, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { dataPieChart } from "@/data/constants";
import type { RenderCustomLabelProps } from "@/types";
const chartConfig = {} satisfies ChartConfig;

// Piechart Custom Labels
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
  fill,
}: RenderCustomLabelProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  // Step 1: Start directly at the edge of the segment
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;

  // Step 2: Create bent connector
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 10) * sin;

  const ex = mx + (cos >= 0 ? 1 : -1) * 80;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";
  const name = dataPieChart[index].name;

  return (
    <g>
      {/* Bent connector line - use the segment color */}
      <path
        d={`M${sx},${sy} L${mx},${my} L${ex},${ey}`}
        stroke={fill}
        fill="none"
        strokeWidth={1}
      />

      {/* Label and percentage exactly at the end of the connector */}
      <text
        x={ex}
        y={ey - 6}
        textAnchor={textAnchor}
        fill="#333"
        fontSize={12}
        className="font-inter text-[#000000B2]"
      >
        {name}
      </text>

      <text
        x={ex}
        y={ey + 12}
        textAnchor={textAnchor}
        fill={fill}
        fontSize={12}
        className="font-inter text-[#000000B2]"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    </g>
  );
};
// End Piechart Custom Labels

const CustomPieChart = ({
  data,
  colors,
}: {
  data: { value: number; name: string }[];
  colors: string[];
}) => {
  return (
    <ChartContainer config={chartConfig}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          dataKey="value"
          data={data}
          cx="45%"
          cy="50%"
          outerRadius={110}
          labelLine={false}
          label={renderCustomLabel}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default CustomPieChart;
