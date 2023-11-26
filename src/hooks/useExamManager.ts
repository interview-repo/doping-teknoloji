import { useCallback, useMemo } from "react";
import useExamReducer from "./useExamReducer";

export default function useExamManager(initialState: Partial<IExamData> = {}) {
  const [state, dispatch] = useExamReducer(initialState);

  const setExamData = useCallback(
    (data: IExamData) => dispatch({ type: "SET_EXAM_DATA", payload: data }),
    [dispatch]
  );

  const getQuestionInfo = useCallback(
    (index: number) => ({
      ...(state.questions?.[index] || {}),
      isAnswered: state.answers.has(index),
      answer: state.answers.get(index),
      index,
    }),
    [state.questions, state.answers]
  );

  const getCurrentQuestion = useMemo(
    () => getQuestionInfo(state.currentIndex)!,
    [state.currentIndex, getQuestionInfo]
  );

  const getOptionDetail = useCallback(
    (option: AnswerOptions) => {
      const { isAnswered, answer } = getCurrentQuestion;
      const isAnsweredOption = isAnswered && answer?.userAnswer === option;

      return {
        isAnswered,
        isAnsweredOption,
        isCorrect: Boolean(answer?.isCorrect),
        isSelectable: !isAnsweredOption && !(isAnswered && state.showCorrect),
        isCorrectAnswer: state.showCorrect && answer?.correctAnswer === option,
      };
    },
    [getCurrentQuestion, state.showCorrect]
  );

  const answerQuestion = useCallback(
    (userAnswer: AnswerOptions) => () =>
      dispatch({ type: "ANSWER_QUESTION", payload: userAnswer }),
    [dispatch]
  );

  const getAnswers = useMemo(
    () =>
      Array.from(state.questions ?? []).map((_, index) => ({
        questionIndex: index,
        userAnswer: state.answers.get(index)?.userAnswer,
      })),
    [state.answers, state.questions]
  );

  const toggleShowCorrect = useCallback(
    () => dispatch({ type: "TOGGLE_SHOW_CORRECT" }),
    [dispatch]
  );

  const navigation = useMemo(
    () => ({
      next: () =>
        dispatch({ type: "GO_TO_QUESTION", payload: state.currentIndex + 1 }),
      previous: () =>
        dispatch({ type: "GO_TO_QUESTION", payload: state.currentIndex - 1 }),
      goToQuestion: (index: number) =>
        dispatch({ type: "GO_TO_QUESTION", payload: index }),
      isFirstQuestion: state.currentIndex === 0,
      isLastQuestion: state.currentIndex === state.questions?.length - 1,
    }),
    [state.currentIndex, state.questions?.length, dispatch]
  );

  return {
    ...state,
    setExamData,
    getCurrentQuestion,
    getOptionDetail,
    answerQuestion,
    getAnswers,
    toggleShowCorrect,
    navigation,
    length: state.questions?.length,
  } as const;
}
