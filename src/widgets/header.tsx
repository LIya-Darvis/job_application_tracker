export const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative text-center mb-3 mt-5 text-5xl font-medium">
        <h1 className="relative text-white pb-3 leading-[65px] z-10 isolate">
          Job Application Tracker
        </h1>
        <div className="absolute left-1/2 bottom-1 -translate-x-1/2 h-20 w-96 bg-blue-600 blur-[30px] z-[1] opacity-50"></div>
      </div>
    </div>
  );
};
