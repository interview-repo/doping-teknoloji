import { createContext } from "react";
import useExamManager from "../hooks/useExamManager";

const ExamContext = createContext<ReturnType<typeof useExamManager>>(null!);
export default ExamContext;
