import useExam from "@/hooks/useExam";

export default function ShowCorrectAnswer() {
  const { showCorrect, toggleShowCorrect } = useExam();

  return (
    <div className="w-48 flex-shrink-0 bg-gray-100 rounded-lg">
      <label className="justify-around items-center relative inline-flex cursor-pointer select-none h-12 w-full px-3.5">
        <span className="text-sm leading-5 text-neutral-800 font-medium">
          Cevapları Göster
        </span>
        <div className="relative h-6 w-10">
          <input
            type="checkbox"
            name="autoSaver"
            className="sr-only"
            checked={showCorrect}
            onChange={toggleShowCorrect}
          />
          <span
            className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
              showCorrect ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                showCorrect ? "translate-x-6" : ""
              }`}
            ></span>
          </span>
        </div>
      </label>
    </div>
  );
}
