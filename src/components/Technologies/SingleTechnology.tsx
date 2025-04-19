import { Technology } from "@/types/tecnology";

const SingleTechnology = ({ technology }: { technology: Technology }) => {
  const { icon, title } = technology;
  return (
    <div className="single-technology flex w-1/2 flex-1 flex-shrink-0 flex-grow-0 basis-1/6 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href="javascript:void(0);"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative my-3 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {icon}
      </a>
    </div>
  );
};

export default SingleTechnology;
