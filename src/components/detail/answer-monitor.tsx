import useExam from "@/hooks/useExam";
import AnswerRow from "./answer-row";
import ScrollTo from "./scroll-to";

export default function ExamAnswerMonitor() {
  const {
    currentIndex,
    getAnswers,
    navigation: { goToQuestion },
  } = useExam();

  return (
    <ScrollTo querySelector={`[data-id="question-${currentIndex}"]`}>
      {getAnswers.map(({ userAnswer, questionIndex }) => (
        <AnswerRow
          key={questionIndex}
          index={questionIndex}
          userAnswer={userAnswer}
          isActive={currentIndex === questionIndex}
          onClick={() => goToQuestion(questionIndex)}
        />
      ))}
    </ScrollTo>
  );
}
