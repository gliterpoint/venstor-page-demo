import { LocationIcon } from "@/assets/constants";
import Heading from "../Heading";
import HeroCard from "../HeroCard";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[520px_1fr] gap-6 font-plus-jakarta-sans items-start">
      {/* Left Side  */}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <Heading text={"Property Overview"} />
          <div className="flex flex-row gap-4 max-w-64">
            <div className="flex-none">
              <LocationIcon />
            </div>
            <p className="text-[#535353] font-normal">
              945 rue Notre Dame Est Montreal, H4K 8N8
            </p>
          </div>
        </div>
        {/* Hero Statistics Section */}
        <div className="grid grid-cols-2 gap-7">
          <HeroCard
            bgColor="#E3F5FF"
            heading="Prix"
            value="1,300,000"
            // stats="+11.01%"
          />

          <HeroCard
            bgColor="#F7F9FB"
            heading="Unités"
            value="5 Unités"
            // stats="-0.03%"
          />

          <HeroCard
            bgColor="#F7F9FB"
            heading="Revenue"
            value="75,540$"
            // stats="+15.03%"
          />

          <HeroCard
            bgColor="#E5ECF6"
            heading="Dépenses"
            value="10,272$"
            stats="(13.59%)"
          />

          <HeroCard
            bgColor="#E6E6E6"
            heading="Mise de fonds"
            value="277,000$"
            stats="(20%)"
          />

          <HeroCard
            bgColor="#E6F8FB"
            heading="Rendement estimé"
            value="26.15%"
          />
        </div>
        {/* End Hero Statistics Section */}
        <div className="border border-[#E6E6E6] py-6 px-4 rounded-xl">
          <p className="text-2xl font-inter font-normal text-[#848484] leading-full">
            Note:{" "}
            <span className="text-[#1FB356] font-medium leading-full">A-</span>
          </p>
        </div>
      </div>
      {/* End Left Side  */}

      {/* Right Side  */}
      <div className="flex flex-col gap-6">
        <div className="p-6">
          <div className="rounded-2xl overflow-hidden shadow-hero">
            <img src="/hero-img.jpg" alt="hero-img" className="w-full" />
          </div>
        </div>
      </div>
      {/* End Right Side  */}
    </div>
  );
};

export default HeroSection;
