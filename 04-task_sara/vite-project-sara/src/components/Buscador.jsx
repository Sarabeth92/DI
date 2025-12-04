export const Buscador = () => {
  return (
    <>
      <div className="flex justify-end mr-4">
        <div className="border-2 border-gray-200 rounded-xl bg-white">
          <label className="flex flex-row gap-2 p-1">
            <div>
              <span
                className="text-xs text-gray-800"
                class="material-symbols-outlined"
              >
                search
              </span>
            </div>
            <input
              className="text-xs text-gray-400"
              placeholder="Search student name..."
            />
          </label>
        </div>
      </div>
    </>
  );
};
