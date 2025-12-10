export const Buscador = ({ search, onSearchChange }) => {
  return (
    <div className="flex justify-end mr-4 mx-4 my-3">
      <div className="border border-gray-200 rounded-lg bg-white">
        <label className="flex flex-row gap-2 items-center px-2 py-1">
          <span className="material-symbols-outlined text-gray-500 text-base">
            search
          </span>
          <input
            className="text-xs text-gray-700 outline-none"
            placeholder="Search student name..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
