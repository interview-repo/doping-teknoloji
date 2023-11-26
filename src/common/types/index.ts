export enum AnswerOptionKeys {
  "A" = "A",
  "B" = "B",
  "C" = "C",
  "D" = "D",
  "E" = "E",
}

declare global {
  type AnswerOptions = keyof typeof AnswerOptionKeys;

  interface Question {
    question: string;
    options: Record<AnswerOptions, string>;
    correctAnswer: AnswerOptions;
  }

  interface AnswerInfo {
    questionIndex: number;
    correctAnswer: AnswerOptions;
    userAnswer: AnswerOptions | undefined;
    isCorrect: boolean;
  }

  interface IExamData {
    id: string;
    lesson: string;
    title: string;
    questions: Question[];
    showCorrect: boolean;
    currentIndex: number;
    answers: Map<number, AnswerInfo>;
    isLoading: boolean;
    isError: boolean;
  }
}
