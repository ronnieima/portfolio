import { notoSerif } from "@/utils/fonts";
import React from "react";

function UnderConstructionPage() {
  return (
    <div
      className={`${notoSerif.className} flex justify-center items-center text-4xl h-[100svh] px-8 text-center`}
    >
      under construction.
    </div>
  );
}

export default UnderConstructionPage;
