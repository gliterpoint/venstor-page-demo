const RefinancingOptimizationCard = ({
  title,
  value,
  data,
}: {
  title: string;
  value: string;
  data: { value: string; label: string }[];
}) => {
  return (
    <div className="border border-[#CECECE] rounded-2xl overflow-hidden">
      <div className="p-4">
        <h3 className="text-base font-bold leading-full">{title}</h3>
      </div>
      <div className="p-4 border-t border-[#cecece] flex flex-col gap-2.5">
        <h3 className="text-center text-2xl sm:text-4xl leading-full font-roboto text-[#38A323] font-bold">
          {value}
        </h3>
        {/* <div className=" flex items-center justify-between gap-4"> */}
        <div className="flex-1 flex flex-col gap-2">
          {data.map((item) => (
            <div
              key={item.value}
              className="flex flex-row items-center justify-between gap-2"
            >
              <div className="flex flex-row items-center gap-2">
                <div
                  className="flex-none h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#95A4FC" }}
                ></div>
                <p className="text-primary text-sm font-medium">{item.label}</p>
              </div>
              <p className="text-primary text-sm font-medium">{item.value}</p>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default RefinancingOptimizationCard;
