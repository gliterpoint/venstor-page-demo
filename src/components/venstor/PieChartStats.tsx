const PieChartStats = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-4xl text-light-black leading-10 font-bold">
        {value}
      </h3>
      <p className="text-light-black text-sm leading-5">{title}</p>
    </div>
  );
};

export default PieChartStats;
