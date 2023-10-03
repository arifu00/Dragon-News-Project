import { NavLink } from "react-router-dom";
import NavBar from "../Home/Shared/NavBar/NavBar";

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:w-3/4 lg:w-1/2 mx-auto  bg-[#fff] mt-12 px-20 rounded-lg py-20">
        <div className="">
          <h2 className="text-3xl font-semibold text-[#403F3F] text-center mb-10">Please Login</h2>
          <hr className="mb-6 border-[#E7E7E7]" />
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="text-[#403F3F] text-xl font-semibold">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-4 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-[#403F3F] text-xl font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-4 mb-3 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="py-4 bg-[#403F3F] text-white text-xl font-semibold rounded-lg hover:bg-slate-400 ">Login</button>
            </div>
            <div className="mt-6 text-center text-sm font-semibold text-[#706F6F]">
                <p>Don’t Have An Account ? <NavLink className="text-[#F75B5F]" to='/register'>Register</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
