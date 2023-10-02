import moment from "moment/moment";
import logo from "../../../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="px-4 py-5">
        <div className="">
          <img className="mx-auto mb-3" src={logo} alt="" />
          <p className="mb-3 text-lg text-center font-normal text-[#706F6F]">
            Journalism Without Fear or Favour
          </p>
          <p className="mb-3 text-xl text-center font-medium text-[#706F6F]">
            <span className="text-[#403F3F]">{moment().format("dddd")}</span>
            {moment().format(" MMMM D, YYYY, h:mm:ss a")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
