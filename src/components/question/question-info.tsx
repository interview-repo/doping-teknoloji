import useExam from "@/hooks/useExam";
import { questionControlButtons } from "@/components/icons";

export default function QuestionInfo() {
  const { lesson, currentIndex } = useExam();

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-shrink-0 rounded bg-slate-700 px-3 py-1.5 min-w-[150px] text-white">
        <span className="text-left text-xs font-extrabold not-italic text-current">
          Soru:{lesson}
        </span>
        <span className="flex-grow text-right text-xs font-extrabold not-italic text-current">
          #{currentIndex + 1}
        </span>
      </div>

      <div className="flex items-start w-48 gap-x-1">
        {questionControlButtons.map((Icon, i) => (
          <button
            key={i}
            className="flex cursor-pointer items-center bg-gray-100 text-center text-sm p-2 rounded-lg"
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}
