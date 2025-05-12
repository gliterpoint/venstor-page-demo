export type RenderCustomLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  index: number;
  fill: string;
};

export interface PieChartDataItem {
  name: string;
  value: number;
  // Add more fields if your data has them
}

export type BarChartEntry = {
  month: string;
  desktop: number;
  mobile: number;
};

export type LineChartDataPoint = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export type PieDataItem = {
  name: string;
  value: number;
};
