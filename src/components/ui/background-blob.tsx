import React from "react";

export default function BackgroundBlob({ variant = "none" }) {
  return (
    <>
      {variant === "top" && (
        <div>
          <div className="bg-[#fbe2e3] absolute -z-10 top-[-8rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#30132e]"></div>
          <div className="bg-[#dbd7fb] absolute -z-10 top-[-6rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        </div>
      )}

      {variant === "center" && (
        <div>
          <div className="bg-[#efecff] absolute -z-10 top-[-1rem] right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#4e4b76]"></div>
          <div className="bg-[#f9eaeb] absolute -z-10 bottom-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#434069]"></div>
        </div>
      )}

      {variant === "bottom" && (
        <div>
          <div className="bg-[#fbe2e3] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4c1f49]"></div>
          <div className="bg-[#e0dcfb] absolute -z-10 bottom-[-1rem] right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#4e4b76]"></div>
        </div>
      )}
    </>
  );
}
