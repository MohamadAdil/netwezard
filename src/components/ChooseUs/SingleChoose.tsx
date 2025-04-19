import { Choose } from "@/types/choose";

const SingleChoose = ({
  choose,
  cstmClass1,
  cstmClass2,
}: {
  choose: Choose;
  cstmClass1: string;
  cstmClass2: string;
}) => {
  const { icon, title, paragraph } = choose;
  return (
    <div className="wow fadeInUp items-top mb-8 flex" data-wow-delay=".15s">
      <div
        className={`mb-10 ${cstmClass1} flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary`}
      >
        {icon}
      </div>
      <div className={`w-full ${cstmClass2}`}>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
          {title}
        </h3>
        <p className=" text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleChoose;
