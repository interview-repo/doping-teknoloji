import { useReducer } from "react";

type Action =
  | { type: "SET_EXAM_DATA"; payload: IExamData }
  | { type: "ANSWER_QUESTION"; payload: AnswerOptions }
  | { type: "GO_TO_QUESTION"; payload: number }
  | { type: "TOGGLE_SHOW_CORRECT" };

export default function useExamReducer(initialState: Partial<IExamData> = {}) {
  return useReducer(
    (state: IExamData, action: Action): IExamData => {
      switch (action.type) {
        case "SET_EXAM_DATA":
          return {
            ...state,
            ...action.payload,
            isLoading: false,
            isError: !Array.isArray(action.payload.questions),
          };

        case "ANSWER_QUESTION": {
          const question = state.questions[state.currentIndex];
          if (!question) return state;

          return {
            ...state,
            answers: new Map(state.answers).set(state.currentIndex, {
              questionIndex: state.currentIndex,
              correctAnswer: question.correctAnswer,
              isCorrect: action.payload === question.correctAnswer,
              userAnswer: action.payload,
            }),
          };
        }

        case "TOGGLE_SHOW_CORRECT":
          return { ...state, showCorrect: !state.showCorrect };

        case "GO_TO_QUESTION":
          return {
            ...state,
            currentIndex: Math.max(
              0,
              Math.min(
                action.payload,
                Array.from(state.questions ?? []).length - 1
              )
            ),
          };

        default:
          return state;
      }
    },
    {
      id: "",
      lesson: "",
      title: "",
      questions: null!,
      showCorrect: false,
      currentIndex: 0,
      answers: new Map(),
      isLoading: true,
      isError: false,
      ...initialState,
    }
  );
}
