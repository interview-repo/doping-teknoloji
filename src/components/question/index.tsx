import { getKeys } from "@/common/utils/get-keys";
import useExam from "@/hooks/useExam";
import AnswerOption from "../answer";

export default function Question() {
  const {
    getCurrentQuestion: { question, options },
  } = useExam();

  return (
    <>
      <div
        className="grid flex-wrap flex-1 py-10 content-evenly justify-start justify-items-start"
        dangerouslySetInnerHTML={{
          __html: question,
        }}
      />

      <div className="flex flex-col gap-y-2">
        {getKeys(options ?? {}).map((option, i) => (
          <AnswerOption key={i} text={options[option]} option={option} />
        ))}
      </div>
    </>
  );
}
