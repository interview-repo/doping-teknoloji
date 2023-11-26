import React from "react";
import useExamManager from "../hooks/useExamManager";
import ExamContext from "../context";

export default function Provider({ children }: { children: React.ReactNode }) {
  const examManager = useExamManager();

  return (
    <React.Suspense fallback={null}>
      <ExamContext.Provider value={examManager}>
        {children}
      </ExamContext.Provider>
    </React.Suspense>
  );
}
