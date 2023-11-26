import { useContext } from "react";
import ExamContext from "../context";

export default function useExam() {
  const context = useContext(ExamContext);
  return context;
}
