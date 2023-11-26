import Sidebar from "./components/sidebar";
import ExamManager from "./container/exam-manager";

function App() {
  return (
    <div
      className="flex bg-gray-50 text-black mx-auto w-10/12 h-[calc(100vh - 50px)] border rounded-2xl mt-5 border-gray-200 shadow-2xl shadow-zinc-300 overflow-hidden"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <Sidebar />
      <ExamManager />
    </div>
  );
}

export default App;
