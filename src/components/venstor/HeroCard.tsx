const HeroCard = ({
  bgColor,
  heading,
  value,
  stats = "",
}: {
  bgColor: string;
  heading: string;
  value: string;
  stats?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="rounded-xl md:rounded-2xl p-4 md:p-6 sm:min-h-28 flex items-center justify-center"
    >
      <div className="flex flex-col gap-1.5 md:gap-2.5 w-full">
        <h3 className="font-inter text-black-light leading-3.5 sm:leading-5 text-xs sm:text-sm font-semibold">
          {heading}
        </h3>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="text-black-global font-semibold leading-3.5 text-sm sm:leading-6 sm:text-2xl">
            {value}
          </p>
          {stats && (
            <div className="flex items-center gap-1">
              <span className="text-black-light text-xs leading-5 font-inter">
                {stats}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
