import React, { useState, useCallback } from "react";
import { PowerIcon } from "@/components/icons";

const ClosePopup = React.lazy(() => import("./close-popup"));

export default function FinishExam() {
  const [show, setShow] = useState(false);
  const toggle = useCallback(() => setShow((prev) => !prev), []);

  return (
    <React.Fragment>
      <button
        className=" flex h-12 w-40 flex-shrink-0 cursor-pointer bg-amber-300 hover:bg-yellow-400 text-sm font-semibold text-slate-700 justify-evenly items-center rounded-lg"
        onClick={toggle}
      >
        <div className="flex h-8 w-8 items-center justify-center bg-red-600 px-2 rounded-lg">
          <PowerIcon />
        </div>
        Testi Bitir
      </button>

      {show && (
        <React.Suspense>
          <ClosePopup onClose={toggle} />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}
