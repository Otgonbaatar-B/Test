import Link from "next/link";
import { LogoIcon } from "../icons/LogoIcon";

export const CreateAccountPage = () => {
  return (
    <div className="flex ">
      <div className="w-[55%] h-screen flex items-center justify-center ">
        <div className="w-[384px] h-[426px] flex flex-col gap-3 justify-center items-center ">
          <LogoIcon />
          <h1 className="font-semibold text-2xl">Create Geld Account</h1>
          <p>Sign up below to create your Wallet account</p>
          <input
            className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
            placeholder="Name"
            type="text"
          />
          <input
            className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
            placeholder="Email"
            type="text"
          />
          <input
            className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
            placeholder="Password"
            type="password"
          />
          <input
            className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
            placeholder="Re-Password"
            type="password"
          />
          <button className="btn w-full rounded-3xl text-white bg-[#0166FF] ">
            Sign up
          </button>
          <div className="flex gap-3">
            <p>Already have account?</p>
            <Link className="text-[#0166FF]" href={"/"}>
              log in
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] h-screen w-[45%]"></div>
    </div>
  );
};
