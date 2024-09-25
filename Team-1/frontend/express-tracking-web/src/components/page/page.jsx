"use client";
import Link from "next/link";
import { LogoIcon } from "../icons/LogoIcon";

export const HomePage = () => {
  const BACKEND_ENDPOINT = "http://localhost:2222/log-in";

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="flex ">
      <div className="w-[55%] h-screen flex items-center justify-center ">
        <div className="w-[384px] h-[426px] flex flex-col gap-3 justify-center items-center ">
          <LogoIcon />
          <h1 className="font-semibold text-2xl">Welcome back</h1>
          <p>Welcome back, Please enter your details</p>
          <form
            className="flex gap-3 flex-col w-full"
            action=""
            onSubmit={handleOnSubmit}
          >
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Email"
              type="text"
              name="email"
            />
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Password"
              type="password"
              name="password"
            />
            <button className="btn w-full rounded-3xl text-white bg-[#0166FF] ">
              Log In
            </button>
          </form>

          <div className="flex gap-3">
            <p>Don't have account?</p>
            <Link className="text-[#0166FF]" href={"./sign-up"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] h-screen w-[45%]"></div>
    </div>
  );
};
