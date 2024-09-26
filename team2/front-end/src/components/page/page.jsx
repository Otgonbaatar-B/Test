import { HeadIcon } from "@/app/svg/Head";

import Link from "next/link";
export const HomePage = () => {
  return (
    <div className="w-full" id="Header">
      <div className="container grid grid-row grid-flow-col gap-4">
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center  pl-52 w-[1220px] h-[1020px]">
            <div className="flex justify-center items-center flex-col w-[384px] h-[426px]">
              <div className="flex gap-2">
                <HeadIcon /> <h1 className="font-bold text-[16px]">Geld</h1>
              </div>
              <div className="pt-10">
                <h1 className="text-center text-[24px] font-bold">
                  Create Geld account
                </h1>
                <p className="text-center pt-3">
                  Sign up below to create your Wallet account
                </p>
              </div>
              <div className="flex flex-col gap-6 pt-10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" w-[384px] h-[48px] bg-[#F3F4F6] pl-10 rounded-xl border border-gray-300"
                  placeholder="Name "
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className=" w-[384px] h-[48px] bg-[#F3F4F6] pl-10 rounded-xl border border-gray-300"
                  placeholder="Email "
                />
                <input
                  type="text"
                  name="password"
                  id="password"
                  className=" w-[384px] h-[48px] bg-[#F3F4F6] pl-10 rounded-xl border border-gray-300"
                  placeholder="Password"
                />
                <input
                  type="text"
                  name="password"
                  id="password"
                  className=" w-[384px] h-[48px] bg-[#F3F4F6] pl-10 rounded-xl border border-gray-300"
                  placeholder="Re-password"
                />
                <Link href={`/load`}>
                  <button className="text-white text-[20px] font-bold bg-[#0166FF] hover:bg-blue-400 rounded-[20px]  w-[384px] h-[48px] ">
                    Sign up
                  </button>
                </Link>
              </div>
              <div className="flex pt-10 gap-5">
                <p>Already have account?</p>
                <Link href={`/`}>
                  <button className="text-[#0166FF]">Log in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF]  w-[1200px] h-[1200px]"></div>
      </div>
    </div>
  );
};
