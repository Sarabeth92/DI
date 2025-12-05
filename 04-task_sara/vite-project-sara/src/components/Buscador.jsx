export const Buscador = () => {
  return (
    <>
      <div className="flex justify-end mr-4 mx-4 my-3 ">
        <div className="border border-gray-200 rounded-lg bg-white">
          <label className="flex flex-row gap-2 p-1">
            <div>
              <span className="material-symbols-outlined text-gray-500 text-base">
                search
              </span>
            </div>
            <input
              className="text-xs text-gray-500"
              placeholder="Search student name..."
            />
          </label>
        </div>
      </div>
    </>
  );
};
