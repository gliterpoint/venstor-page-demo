const PieChartStats = ({ value, title }: { value: string; title: string }) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-4">
      <h3 className=" text-center sm:text-left text-[20px] leading-6 sm:text-4xl text-light-black sm:leading-10 font-bold">
        {value}
      </h3>
      <p className="text-light-black text-xs min-[420px]:text-sm leading-4 sm:leading-5 text-center sm:text-left">
        {title}
      </p>
    </div>
  );
};

export default PieChartStats;
