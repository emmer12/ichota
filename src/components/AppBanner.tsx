import React from "react";

function AppBanner() {
  return (
    <div className="app-banner py-[108px] bg-primary px-6 sm:px-0">
      <div className="flex max-w-6xl m-auto items-center flex-col-reverse sm:flex-row ">
        <div className="flex-1">
          <h4 className="text-white font-bold text-3xl sm:text-4xl mb-5">
            Download iChota
          </h4>
          <p className="text-sm sm:text-base text-[#F1F1F8] font-normal">
            Get the best deals wherever you are. Make extra cash by <br />
            selling items or providing a service on iChota. <br /> Download now!
          </p>

          <div className="flex mt-7 gap-3">
            <img src="/images/app-store.png" alt="App Store Logo" />
            <img src="/images/play-store.png" alt="Play Store Logo" />
          </div>
        </div>
        <div className="flex-1 ">
          <img
            className="sm:scale-105 translate-x-[-30px] sm:translate-x-0"
            src="/images/app-ui.png"
            alt="App UI Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
