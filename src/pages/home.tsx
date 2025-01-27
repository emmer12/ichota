import AppBanner from "@/components/AppBanner";
import Banner from "@/components/Banner";
import FormTab from "@/components/FormTab";
import OverviewTab from "@/components/OverviewTab";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

enum ActiveTab {
  OVERVIEW = "overview",
  FORM = "form",
}

function Home() {
  const [active, setActive] = useState<ActiveTab | null>(ActiveTab.OVERVIEW);

  const handleActive = (tab: ActiveTab) => {
    setActive(tab);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Banner />

      <section className=" max-w-6xl m-auto py-[50px]">
        <div className="tab-con  w-full border-b-[0.5px]  border-[#33333354]">
          <div className="flex justify-center gap-14 text-lg sm:text-2xl">
            <div
              onClick={() => setActive(ActiveTab.OVERVIEW)}
              role="tab"
              className={cn(
                "py-2 sm:py-6 cursor-pointer hover:text-primary transition-colors",
                {
                  "text-primary border-b-[5px] border-primary":
                    active == ActiveTab.OVERVIEW,
                }
              )}
            >
              Overview
            </div>
            <div
              role="tab"
              onClick={() => setActive(ActiveTab.FORM)}
              className={cn(
                "py-2 sm:py-6 cursor-pointer hover:text-primary transition-colors",
                {
                  "text-primary border-b-[5px] border-primary":
                    active == ActiveTab.FORM,
                }
              )}
            >
              Application
            </div>
          </div>
        </div>

        <div className="tab-body">
          {active == ActiveTab.OVERVIEW && (
            <OverviewTab onApply={() => handleActive(ActiveTab.FORM)} />
          )}
          {active == ActiveTab.FORM && <FormTab />}
        </div>
      </section>
      <AppBanner />
    </div>
  );
}

export default Home;
