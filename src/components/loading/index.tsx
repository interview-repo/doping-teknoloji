export default function Loading() {
  return (
    <div className="bg-gray-200 w-full h-[calc(100vh-75px)] flex justify-center items-center">
      <div className="flex w-full items-center justify-center bg-gray-200">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-rose-700 animate-spin">
          <div className="h-9 w-9 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
