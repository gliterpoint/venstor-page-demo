import { dataLineChart } from "@/data/constants";
import CustomLineChart from "../CustomLineChart";
import Heading from "../Heading";

const FutureValueSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-0">
      <div className="lg:col-span-5">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="sm:py-4">
            <Heading text={"Valeurs futurs sur 5 ans"} />
          </div>
          <div className="flex flex-col gap-0 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 font-roboto">
              <div className="flex flex-col gap-1.5 sm:gap-4 py-4 sm:py-0">
                <h3 className="text-[20px] sm:text-[40px] text-[#2B7E1B] leading-full font-bold">
                  1.5 M
                </h3>
                <p className="text-[#2B7E1B] text-sm leading-5">
                  Valeur future de la bâtisse
                </p>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-4 py-4 sm:py-0">
                <h3 className="text-[20px] sm:text-[40px] text-4xl text-[#0097D3] leading-full sm:leading-10 font-bold">
                  91,905$
                </h3>
                <p className="text-[#0097D3] text-sm leading-5">Revenus</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 font-roboto sm:py-6">
              <div className="flex flex-col gap-1.5 sm:gap-4 py-4 sm:py-0">
                <h3 className="text-[20px] sm:text-[40px] text-[#2B7E1B] leading-full font-bold">
                  +3%
                </h3>
                <p className="text-[#2B7E1B] text-sm leading-5">
                  Croissance de la valeur du bien
                </p>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-4 py-4 sm:py-0">
                <h3 className="text-[20px] sm:text-[40px] text-4xl text-[#0097D3] leading-full sm:leading-10 font-bold">
                  +4 %
                </h3>
                <p className="text-[#0097D3] text-sm leading-5">
                  croissance revenus / année
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="sm:py-4">
          <div className="lg:h-96 w-full">
            <CustomLineChart data={dataLineChart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureValueSection;
