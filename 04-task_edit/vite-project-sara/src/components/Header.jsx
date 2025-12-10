export const Header = ({ onAddStudent }) => {
  return (
    <>
      <header className="w-full bg-white shadow-sm p-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 ml-2">
            <span className="material-symbols-outlined text-primary text-blue-500 text-3xl">
              school
            </span>
            <h1 className="font-bold text-xl text-gray-800">
              Attendance Dashboard
            </h1>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            onClick={onAddStudent}
          >
            <span className="material-symbols-outlined text-gray-700 text-2xl">
              person
            </span>
          </button>
        </div>
      </header>
    </>
  );
};
