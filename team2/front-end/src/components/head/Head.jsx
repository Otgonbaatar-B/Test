import { HeadIcon } from "@/app/svg/Head";

export const Head = () => {
  return (
    <div className="w-full">
      <div className="container grid grid-row grid-flow-col gap-4">
        <div className="flex items-center justify-center ">
          <div className="flex justify-center items-center flex-col w-[384px] h-[426px]">
            <div className="flex gap-2">
              <HeadIcon /> <h1 className="font-bold text-[16px]">Geld</h1>
            </div>
            <div className="pt-10">
              <h1 className="text-center text-[24px] font-bold">
                Welcome Back
              </h1>
              <p className="text-center pt-3">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-10">
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
              <button className="text-white text-[20px] font-bold bg-[#0166FF] rounded-[20px]  w-[384px] h-[48px] ">
                Log in
              </button>
            </div>
            <div className="flex pt-10 gap-5">
              <p>Don’t have account?</p>
              <button className="text-[#0166FF]">Sign up</button>
            </div>
          </div>
        </div>
        <div className="bg-[#0166FF]"></div>
      </div>
    </div>
  );
};
