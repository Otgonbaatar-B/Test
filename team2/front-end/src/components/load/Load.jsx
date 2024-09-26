"use client";

import { HeadIcon } from "@/app/svg/Head";
import React, { useState, useEffect } from "react";

const BlueLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid blue",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    animation: "spin 2s linear infinite",
  };

  return (
    <div className="w-full">
      <div className="container  ">
        <div className="flex flex-col items-center ml-[500px] mt-[400px]">
          <div className="flex justify-center items-center gap-3">
            <HeadIcon />
            <h1 className="font-bold text-[27px]">Geld</h1>
          </div>
          <div className="pt-10 flex flex-col justify-center items-center">
            <>
              {loading ? (
                <>
                  <div style={loaderStyle}></div>
                  <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
                </>
              ) : (
                <div></div>
              )}
              <h2 className="pt-5">Түр хүлээнэ үү...</h2>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueLoader;
