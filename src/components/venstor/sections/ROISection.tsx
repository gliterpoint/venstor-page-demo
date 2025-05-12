import { dataLineChart } from "@/data/constants";
import CustomLineChart from "../CustomLineChart";
import Heading from "../Heading";
import {
  LegendIconBlue,
  LegendIconRed,
  LegendIconYellow,
} from "@/assets/constants";

const ROISection = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pt-12 pb-6">
      <div className="col-span-7">
        <div className="h-96 w-full">
          <CustomLineChart data={dataLineChart} />
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex flex-col font-roboto">
          <div className="py-4">
            <Heading text={"Rendement sur mise de fonds"} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-light-black text-sm leading-5">
              Il s’agit de mesurer combien d’argent une personne gagne par
              rapport à ce qu’elle a investi au départ. Par exemple, si
              quelqu’un met 200 $ pour un projet et qu’il en retire 300 $ de
              profit, cela veut dire que son investissement initial lui a
              rapporté plus que ce qu’il avait mis. Le rendement sur la mise de
              fonds permet donc de savoir si l’effort financier de départ valait
              la peine.
            </p>
            <p className="text-light-black text-sm leading-5">
              RSMDF = Rendement sur Mise de Fonds (cash on cash)
            </p>
          </div>
          <div className="flex flex-col gap-4 font-roboto mt-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconBlue />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                RSMDF avec la valeur de la bâtisse + équité crée + cashflow
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconYellow />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                RSMDF avec la valeur de la bâtisse + cashflow
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex-none">
                <LegendIconRed />
              </div>
              <p className="text-[#000000B2] text-sm leading-full font-inter">
                RSMDF avec cashflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROISection;
