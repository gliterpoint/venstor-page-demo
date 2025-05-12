import { InfoIcon } from "@/assets/constants";

const StrategyCard = ({
  title,
  icon,
  data,
}: {
  title: string;
  icon: string;
  data: string[];
}) => {
  return (
    <div className="border border-[#CECECE] rounded-2xl overflow-hidden">
      <div className="p-4">
        <h3 className="text-base font-bold leading-full">{title}</h3>
      </div>
      <div className="p-4 border-t border-[#cecece] flex items-center justify-between gap-4">
        <div className="flex-1 flex flex-col gap-2">
          {data.map((item) => (
            <div key={item} className="flex flex-row items-center gap-2">
              <div className="flex-none">
                <InfoIcon />
              </div>
              <p className="text-primary text-sm">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex-none w-14">
          <img src={icon} alt="illustration-1" />
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
