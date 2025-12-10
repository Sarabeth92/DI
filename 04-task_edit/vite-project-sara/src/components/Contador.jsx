export const Contador = ({ students }) => {
  // Total de alumnos
  const total = students.length;

  // Totales por estado
  const present = students.filter((s) => s.status === 'present').length;
  const absent = students.filter((s) => s.status === 'absent').length;
  const late = students.filter((s) => s.status === 'late').length;
  const sick = students.filter((s) => s.status === 'sick').length; // NUEVO

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4 p-4">
        <div className="rounded-2xl shadow-lg flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">
            Total Students
          </p>
          <p className="text-2xl font-bold text-gray-700 mt-1">{total}</p>
        </div>

        <div className="rounded-2xl shadow-lg flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Present</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{present}</p>
        </div>

        <div className="rounded-2xl shadow-lg flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Absent</p>
          <p className="text-2xl font-bold text-red-500 mt-1">{absent}</p>
        </div>

        <div className="rounded-2xl shadow-lg flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Late</p>
          <p className="text-2xl font-bold text-yellow-400 mt-1">{late}</p>
        </div>

        <div className="rounded-2xl shadow-sm flex flex-col p-3 bg-white">
          <p className="text-sm font-medium text-gray-500 mt-1">Sick</p>
          <p className="text-2xl font-bold text-purple-500 mt-1">{sick}</p>
        </div>
      </div>
    </>
  );
};
