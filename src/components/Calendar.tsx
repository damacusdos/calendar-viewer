// icons
import ArrowLeft from "../assets/arrow-left.svg?react";
import ArrowRight from "../assets/arrow-right.svg?react";

export const Calendar = () => {
  return (
    <article className="bg-white w-[694px] h-[678px] rounded-[20px] pt-[46px] px-[62px] pb-[57px]">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-4xl font-bold">July 2022</h1>
        <div className="flex gap-x-8">
          <ArrowLeft className="hover:cursor-pointer" />
          <ArrowRight className="hover:cursor-pointer" />
        </div>
      </div>
    </article>
  );
};
