import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs';
import qZone1 from '../../../../assets/qZone1.png'
import qZone2 from '../../../../assets/qZone2.png'
import qZone3 from '../../../../assets/qZone3.png'
const RightSideBar = () => {
  return (
    <div>
        {/* login with  */}
      <div className="p-4 border">
        <h4 className="text-xl font-bold mb-5">Login with</h4>
        <button className="btn btn-outline w-full border mb-2">
          <BsGoogle></BsGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full border ">
          <BsGithub></BsGithub>
          Login with GitHub
        </button>
      </div>
      {/* Find us */}
      <div className="p-4 mt-6 border">
        <h4 className="text-xl font-bold mb-5">Find Us On</h4>
        <a className="flex items-center gap-2 pl-5 border-slate-400 text-lg font-medium text-[#706F6F] py-3 rounded-t-lg w-full border ">
          <BsFacebook></BsFacebook>
         FaceBook
        </a>
        <a className="flex items-center gap-2 pl-5 border-slate-400  text-lg font-medium text-[#706F6F] py-3 border-x w-full ">
          <BsInstagram></BsInstagram>
         Instagram
        </a>
        <a className="flex items-center gap-2 pl-5  text-lg font-medium text-[#706F6F] py-3 rounded-b-lg w-full border border-slate-400 mb-2">
          <BsTwitter></BsTwitter>
         Twitter
        </a>
        
      </div>

      {/* Q-zone  */}
      <div className="p-4 mt-6 border bg-[#F3F3F3]">
        <h4 className="text-xl font-bold mb-5">Q-Zone</h4>
        <div className="space-y-2">
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
