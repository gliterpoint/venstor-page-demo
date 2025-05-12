import { dataLineChart } from "@/data/constants";
import CustomLineChart from "../CustomLineChart";
import Heading from "../Heading";

const FutureValueSection = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        <div className="flex flex-col gap-6">
          <div className="py-4">
            <Heading text={"Valeurs futurs sur 5 ans"} />
          </div>
          <div className="grid grid-cols-2 gap-6 font-roboto">
            <div className="flex flex-col gap-4">
              <h3 className="text-[40px] text-[#2B7E1B] leading-full font-bold">
                1.5 M
              </h3>
              <p className="text-[#2B7E1B] text-sm leading-5">
                Valeur future de la bâtisse
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl text-[#0097D3] leading-10 font-bold">
                91,905$
              </h3>
              <p className="text-[#0097D3] text-sm leading-5">Revenus</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 font-roboto py-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-[40px] text-[#2B7E1B] leading-full font-bold">
                +3%
              </h3>
              <p className="text-[#2B7E1B] text-sm leading-5">
                Croissance de la valeur du bien
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl text-[#0097D3] leading-10 font-bold">
                +4 %
              </h3>
              <p className="text-[#0097D3] text-sm leading-5">
                croissance revenus / année
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <div className="py-4">
          <div className="h-96 w-full">
            <CustomLineChart data={dataLineChart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureValueSection;
