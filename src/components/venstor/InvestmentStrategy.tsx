import { InfoIcon } from "@/assets/constants";

const InvestmentStrategy = ({
  title,
  data,
}: {
  title: string;
  data: { value: string; label: string }[];
}) => {
  return (
    <div className="border border-[#CECECE] rounded-2xl overflow-hidden font-roboto h-full">
      <div className="p-4">
        <h3 className="text-black-global text-base font-bold leading-full">
          {title}
        </h3>
      </div>
      <div className="p-4 border-t border-[#cecece] flex items-center justify-between gap-4">
        <div className="flex-1 flex flex-col gap-2">
          {data.map((item) => (
            <div
              key={item.value}
              className="flex flex-row items-center justify-between gap-2"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex-none">
                  <InfoIcon />
                </div>
                <p className="text-light-black text-sm font-medium">
                  {item.label}
                </p>
              </div>
              <p className="text-primary text-sm font-bold text-right">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentStrategy;
