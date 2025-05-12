const Heading = ({ text }: { text: string }) => {
  return (
    <h3 className="font-roboto font-semibold text-[28px] leading-full">
      {text}
    </h3>
  );
};

export default Heading;
