import useExam from "@/hooks/useExam";
import AnswerResponseButton from "./response-button";
import SolutionButton from "./solution-button";

type IProps = {
  text: string;
  option: AnswerOptions;
};

export default function AnswerOption({ option, text }: IProps) {
  const { answerQuestion, getOptionDetail, showCorrect } = useExam();

  const {
    isAnsweredOption,
    isCorrectAnswer,
    isSelectable,
    isAnswered,
    isCorrect,
  } = getOptionDetail(option);

  function getOptionColor() {
    if (!isAnswered) return "hover:bg-gray-100";
    if (isCorrectAnswer) return "bg-green-500";
    if (isAnsweredOption && showCorrect && !isCorrect) return "bg-red-300";
    if (isAnsweredOption) return "bg-blue-100";
    return "";
  }

  return (
    <button
      className={`group flex h-12 items-center justify-between border border-solid pl-4 py-0 rounded-md ${getOptionColor()}`}
      onClick={answerQuestion(option)}
      disabled={!isSelectable}
    >
      <div className="flex items-center">
        <div className="inline-flex items-center">
          <input
            id={option}
            type="radio"
            className={`m-0 grid h-5 w-5 cursor-default appearance-none place-content-center border-2 border-solid border-inherit rounded-full font-light ${
              isAnsweredOption ? "bg-black" : "bg-inherit"
            }`}
          />
        </div>
        <label className="ml-4 leading-6 text-inherit">
          {option}) <span dangerouslySetInnerHTML={{ __html: text }} />
        </label>
      </div>

      {isSelectable && <AnswerResponseButton />}
      {isCorrectAnswer && isAnswered && <SolutionButton />}
    </button>
  );
}
