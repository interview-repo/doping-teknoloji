import { useEffect } from "react";
import useExam from "@/hooks/useExam";
import fakeFetchData from "@/common/api/fake-fetch";
import { ArrowLeftIcon } from "@/components/icons";

import ShowCorrectAnswer from "@/components/control/correct-answer";
import FinishExam from "@/components/control/finish-exam";
import ExamDetail from "@/components/detail";
import Question from "@/components/question";
import NavigationQuestion from "@/components/question/navigation";
import QuestionInfo from "@/components/question/question-info";
import Loading from "@/components/loading";
import ErrorMessage from "@/components/error";

export default function ExamManager() {
  const { id, title, isLoading, isError, setExamData } = useExam();

  useEffect(() => {
    fakeFetchData().then(setExamData);
  }, [setExamData]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <div className="w-full px-6 py-0">
      <div className="flex h-20 justify-between relative items-end my-5">
        <div className="h-6 w-6 absolute left-0 top-0">
          <ArrowLeftIcon />
        </div>
        <h3 className="text-2xl font-bold block order-first self-end">
          {title} #{id}
        </h3>
        <div className="flex justify-between items-stretch w-96 pl-5">
          <ShowCorrectAnswer />
          <FinishExam />
        </div>
      </div>

      <div className="flex gap-x-6 items-start">
        <div className="flex- flex-1">
          <div className="flex flex-col justify-between p-5 bg-white min-h-[550px] h-[calc(100vh_-_300px)] rounded-md overflow-x-scroll shadow-lg shadow-slate-200">
            <QuestionInfo />
            <Question />
          </div>
          <NavigationQuestion />
        </div>
        <ExamDetail />
      </div>
    </div>
  );
}
