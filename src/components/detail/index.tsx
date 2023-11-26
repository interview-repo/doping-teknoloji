import useExam from "@/hooks/useExam";
import ExamInfoDisplay from "./info-display";
import ExamAnswerMonitor from "./answer-monitor";

export default function ExamDetail() {
  const { length, lesson } = useExam();

  return (
    <div className="flex flex-shrink-0 flex-col bg-white p-4 h-[calc(100vh-194px)]">
      <ExamInfoDisplay title={lesson} length={length} />
      <ExamAnswerMonitor />
    </div>
  );
}
