import { dataLineChart } from "@/data/constants";
import CustomLineChart from "../CustomLineChart";
import Heading from "../Heading";
import {
  LegendIconBlue,
  LegendIconRed,
  LegendIconYellow,
} from "@/assets/constants";

const CurrentMarketRentSection = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pt-12 pb-10">
      <div className="col-span-7">
        <div className="h-96 w-full">
          <CustomLineChart data={dataLineChart} />
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex flex-col font-roboto">
          <div className="py-4">
            <Heading text={"Loyer actuel vs loyer du marché"} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-light-black text-sm leading-5">
              Le “Gap to Market” est l’écart entre les loyers actuels et les
              loyers du marchéPrésentement il y a un écart de 58.85%. Le
              potentiel de la bâtisse est sous exploité.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-roboto mt-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconBlue />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                Loyer si aucun changement de locataire
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconYellow />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                Loyers potentiels avec 50% de roulement locatif
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconRed />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                Loyers du marché
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMarketRentSection;
