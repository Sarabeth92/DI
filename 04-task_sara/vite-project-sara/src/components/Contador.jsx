export const Contador = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-5">
        <div className="rounded-2xl shadow-sm  flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">
            Total Students
          </p>
          <p className="text-2xl font-bold text-gray-700 mt-1">32</p>
        </div>
        <div className="rounded-2xl shadow-sm  flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Present</p>
          <p className="text-2xl font-bold text-green-600 mt-1">28</p>
        </div>
        <div className="rounded-2xl shadow-sm  flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Absent</p>
          <p className="text-2xl font-bold text-red-500 mt-1">3</p>
        </div>
        <div className="rounded-2xl shadow-sm  flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Late</p>
          <p className="text-2xl font-bold text-yellow-400 mt-1">1</p>
        </div>
      </div>
    </>
  );
};
