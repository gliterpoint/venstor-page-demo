const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-2 text-center font-roboto md:pt-2">
      <h3 className="text-light-black font-bold text-[20px] leading-6 sm:text-2xl md:text-4xl md:leading-11">
        {title}
      </h3>
      <div>
        <p className="text-light-black leading-[18px] text-xs sm:text-base sm:leading-[24px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
