import useExam from "@/hooks/useExam";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export default function NavigationQuestion() {
  const {
    navigation: { next, previous, isFirstQuestion, isLastQuestion },
  } = useExam();

  const cn =
    "flex h-12 w-36 cursor-pointer items-center bg-gray-100 hover:bg-gray-200 py-0 pr-0 text-center text-sm font-extrabold not-italic text-slate-700 rounded-lg";

  return (
    <div className="mt-5 flex items-center justify-between">
      <button
        className={`${cn} pl-2 ${isFirstQuestion && "invisible"}`}
        onClick={previous}
      >
        <div className="mr-2 mt-0 flex h-4 w-4 items-center justify-center">
          <ChevronLeftIcon />
        </div>
        Önceki Soru
      </button>

      <button
        className={`${cn} pl-4 ${isLastQuestion && "invisible"}`}
        onClick={next}
      >
        Sonraki Soru
        <div className="ml-2 mt-px flex h-4 w-4 items-center justify-center">
          <ChevronRightIcon />
        </div>
      </button>
    </div>
  );
}
