import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="flex bg-[#e6e3e3] py-4 px-3 mb-5">
        <button className="mr-4 text-xl font-medium text-white bg-[#D72050] px-6 py-2">
          Latest
        </button>
        <Marquee pauseOnHover={true} speed={100} className="text-lg font-semibold text-[#403F3F]">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
