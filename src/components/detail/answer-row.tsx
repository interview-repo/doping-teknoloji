import { getKeys } from "@/common/utils/get-keys";
import { AnswerOptionKeys } from "@/common/types";

interface IProps {
  userAnswer?: AnswerOptions;
  index: number;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface OptionButtonProps {
  option: AnswerOptions;
  isSelected: boolean;
}

export default function AnswerRow({
  userAnswer,
  isActive,
  index,
  onClick,
}: IProps) {
  return (
    <button
      key={index}
      data-id={`question-${index}`}
      className={`mb-1 flex h-14 w-full flex-shrink-0 px-5 rounded-md items-center justify-between cursor-pointer ${
        isActive
          ? "bg-blue-200 hover:bg-blue-200"
          : "bg-blue-50 hover:bg-blue-100 hover:bg-opacity-[0.6]"
      }`}
      onClick={onClick}
    >
      <span className="flex-shrink-0 text-sm font-semibold not-italic text-neutral-800 flex flex-1 mr-3">
        {index + 1}.soru
      </span>
      <div className="flex gap-x-2.5">
        {getKeys(AnswerOptionKeys).map((option, i) => (
          <OptionButton
            option={option}
            isSelected={userAnswer === option}
            key={i}
          />
        ))}
      </div>
    </button>
  );
}

function OptionButton({ option, isSelected }: OptionButtonProps) {
  return (
    <div
      className={`h-10 w-10 flex-shrink-0 border border-solid border-sky-700 text-base font-bold rounded-full justify-center items-center flex ${
        isSelected ? "bg-sky-700 text-white" : "bg-sky-50 text-slate-500"
      }`}
    >
      {option}
    </div>
  );
}
