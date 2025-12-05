export const Students = ({ student, onChangeStatus }) => {
  const { id, name, image, status } = student;

  // Pastilla de estado (badge)
  const getBadgeStyle = () => {
    if (status === 'present') {
      return { backgroundColor: '#bbf7d0', color: '#16a34a' }; // verde
    }
    if (status === 'absent') {
      return { backgroundColor: '#fecaca', color: '#b91c1c' }; // rojo
    }
    if (status === 'late') {
      return { backgroundColor: '#fef3c7', color: '#d97706' }; // amarillo
    }
    return { backgroundColor: '#e5e7eb', color: '#4b5563' }; // gris
  };

  // Estilo extra para el botón activo
  const getActiveButtonStyle = (buttonStatus) => {
    if (status === buttonStatus) {
      return {
        backgroundColor: '#2563eb', // azul
        color: 'white',
        boxShadow: '0 0 6px rgba(37,99,235,0.4)',
      };
    }
    return {};
  };

  return (
    <div className="rounded-lg shadow-lg m-4 bg-white">
      {/* Parte superior */}
      <div className="flex items-center gap-4 p-3">
        <img
          className="w-14 h-14 rounded-full object-cover"
          alt={`Avatar of ${name}`}
          src={image}
        />

        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">ID: {id}</p>
        </div>

        {/* Badge */}
        <span
          className="ml-auto mr-1 px-3 py-1 text-xs font-medium rounded-full"
          style={getBadgeStyle()}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Botones */}
      <div className="flex justify-between gap-3 m-2">
        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
          style={getActiveButtonStyle('present')}
          onClick={() => onChangeStatus('present')}
        >
          Present
        </button>

        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
          style={getActiveButtonStyle('absent')}
          onClick={() => onChangeStatus('absent')}
        >
          Absent
        </button>

        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
          style={getActiveButtonStyle('late')}
          onClick={() => onChangeStatus('late')}
        >
          Late
        </button>
      </div>
    </div>
  );
};
