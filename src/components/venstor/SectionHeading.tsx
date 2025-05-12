const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-2 text-center font-roboto !pt-2">
      <h3 className="text-light-black font-bold text-4xl leading-11">
        {title}
      </h3>
      <div>
        <p className="text-light-black">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
