export const Students = ({ student }) => {
  const { id, name, image } = student;
  return (
    <>
      <div className="rounded-lg shadow-lg p-4 m-4 bg-white">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full object-cover"
            alt={`Avatar of ${name}`}
            src={image}
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-900 text-sm">{name}</p>
            <p className="text-gray-500 text-xs">ID: {id}</p>
          </div>
          <span className="ml-auto mr-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
            Present
          </span>
        </div>
        <div className="flex justify-between gap-3 m-2">
          <button className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 hover:text-white hover:bg-blue-600">
            Present
          </button>
          <button className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 hover:text-white hover:bg-blue-600">
            Absent
          </button>
          <button className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 hover:text-white hover:bg-blue-600">
            Late
          </button>
        </div>
      </div>
    </>
  );
};
