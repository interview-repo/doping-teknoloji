import { DersIcon } from "@/components/icons";

interface IProps {
  title: string;
  length: number;
}

export default function ExamInfoDisplay({ title, length }: IProps) {
  return (
    <div className="mb-5 flex items-center justify-start">
      <DersIcon />
      <div className="ml-3 flex flex-col items-start justify-center">
        <span className="text-base font-semibold not-italic leading-5 text-neutral-800">
          {title}
        </span>
        <span className="text-xs font-normal not-italic text-slate-500">
          {length} soru
        </span>
      </div>
    </div>
  );
}
