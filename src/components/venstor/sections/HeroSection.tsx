import { LocationIcon } from "@/assets/constants";
import Heading from "../Heading";
import HeroCard from "../HeroCard";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[520px_1fr] gap-4 md:gap-6 font-plus-jakarta-sans items-start">
      {/* Left Side  */}
      <div className="flex flex-col gap-4 md:gap-7 col-span-2 lg:col-auto order-2 lg:order-1">
        <div className="flex flex-col gap-2 md:gap-4">
          <Heading text={"Property Overview"} />
          <div className="flex flex-row gap-2.5 md:gap-4 lg:max-w-64">
            <div className="flex-none">
              <LocationIcon />
            </div>
            <p className="text-[#535353] font-normal text-sm md:text-base">
              945 rue Notre Dame Est Montreal, H4K 8N8
            </p>
          </div>
        </div>
        {/* Hero Statistics Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-7">
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
        <div className="border border-[#E6E6E6] px-4 py-4 md:py-6 md:px-4 rounded-lg sm:rounded-xl">
          <p className="text-sm sm:text-2xl font-inter font-normal text-[#848484] leading-full">
            Note:{" "}
            <span className="text-[#1FB356] font-medium leading-full">A-</span>
          </p>
        </div>
      </div>
      {/* End Left Side  */}

      {/* Right Side  */}
      <div className="flex flex-col gap-6 col-span-2 lg:col-auto order-1 lg:order-2">
        <div className="md:p-6">
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-hero-mobile md:shadow-hero">
            <img src="/hero-img.jpg" alt="hero-img" className="w-full" />
          </div>
        </div>
      </div>
      {/* End Right Side  */}
    </div>
  );
};

export default HeroSection;
