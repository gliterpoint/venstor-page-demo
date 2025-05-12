import { LegendIconBlue, LegendIconGreen } from "../../assets/constants";

type LegendPayloadItem = {
  value: string;
  type?: string;
  id?: string;
  color?: string;
  dataKey?: string | number;
};

type CustomLegendProps = {
  payload?: LegendPayloadItem[];
};
const iconMap: { [key: string]: React.ReactNode } = {
  uv: <LegendIconGreen />,
  pv: <LegendIconBlue />,
};

const CustomLegendLineChart: React.FC<CustomLegendProps> = (props) => {
  const { payload } = props;
  if (!payload) return null;

  return (
    <ul
      className="flex items-center justify-center gap-4"
      style={{ listStyle: "none", display: "flex", padding: 0 }}
    >
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          className="flex items-center"
          // style={{ marginRight: 20, display: "flex", alignItems: "center" }}
        >
          {/* Custom icon based on the dataKey */}
          {(typeof entry.dataKey === "string" && iconMap[entry.dataKey]) || (
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                backgroundColor: entry.color,
                marginRight: 8,
              }}
            />
          )}
          <span className="font-inter inline-block ml-2 text-[#000000B2] text-sm">
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CustomLegendLineChart;
