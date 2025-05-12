import type { ReactNode } from "react";
import SectionHeading from "./venstor/SectionHeading";

type SectionLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

const SectionLayout = ({ children, subtitle, title }: SectionLayoutProps) => {
  return (
    <div className="border border-[#B1B1B1] p-4 rounded-3xl flex flex-col gap-6">
      {/* Heading  */}
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />
      </div>
      {/* End Heading  */}

      {children}
    </div>
  );
};

export default SectionLayout;
