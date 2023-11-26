import {
  DHLogo,
  GorusOneriIcon,
  IconType,
  sidebarAppIcons,
  sidebarMenuIcons,
} from "@/components/icons";
import { useCallback } from "react";

export default function Sidebar() {
  const RenderButtons = useCallback(
    (Icon: IconType, i: number) => (
      <button
        key={i}
        className="relative flex w-full cursor-pointer justify-center text-blue-700"
      >
        <Icon />
      </button>
    ),
    []
  );

  return (
    <div className="flex w-24 flex-col items-center bg-white border-r border-neutral-200 relative">
      <div className="mt-5">
        <div className="h-10">
          <DHLogo />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 w-4/12">
        {sidebarMenuIcons.map(RenderButtons)}
      </div>

      <div className="mt-9 flex flex-col items-center gap-6 w-4/12 ">
        {sidebarAppIcons.map(RenderButtons)}
      </div>

      <button className="absolute flex w-full cursor-pointer justify-center text-blue-700 left-0 bottom-3.5 px-8 pb-0.5">
        <GorusOneriIcon />
      </button>
    </div>
  );
}
