export const Header = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm p-3 shadow-sm">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 ml-2">
            <span class="material-symbols-outlined text-primary text-3xl">
              school
            </span>
            <h1 className="font-bold text-xl text-gray-800">
              Attendance Dashboard
            </h1>
          </div>
          <button>
            <span class="material-symbols-outlined mr-2">person</span>
          </button>
        </div>
      </header>
    </>
  );
};
