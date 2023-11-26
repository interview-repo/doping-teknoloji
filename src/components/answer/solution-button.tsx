import { PlayButtonIcon } from "@/components/icons";

export default function SolutionButton() {
  return (
    <div className="flex h-10 w-40 cursor-pointer rounded-md py-0 text-center text-xs font-bold not-italic text-white items-center whitespace-nowrap justify-evenly px-2 mr-1 bg-emerald-600">
      <div className="flex mr-1 w-5">
        <PlayButtonIcon />
      </div>
      Çözüm Videosu
    </div>
  );
}
