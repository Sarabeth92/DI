export const Students = ({ student, onChangeStatus }) => {
  const { id, name, image, status } = student;

  // Pastilla de estado
  // (no fui capaz a que cambiara de color solo con tailwind y tuve que meterselo forzado)
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
    if (status === 'sick') {
      return { backgroundColor: '#e9d5ff', color: '#7c3aed' }; // morado;
    }
    return { backgroundColor: '#e5e7eb', color: '#4b5563' }; // gris
  };

  // Estilo extra para el botón activo
  // me paso lo mismo con el boton pulsado, tuve que meterlo a la fuerza
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
    <div className="rounded-lg shadow-lg m-3 bg-white">
      <div className="flex items-center gap-4 p-2">
        <img
          className="w-14 h-14 rounded-full object-cover"
          alt={`Avatar of ${name}`}
          src={image}
        />

        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">ID: {id}</p>
        </div>

        <span
          className="ml-auto mr-1 px-3 py-1 text-xs font-medium rounded-full"
          style={getBadgeStyle()}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="flex justify-between gap-3 m-2">
        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white transition"
          style={getActiveButtonStyle('present')}
          onClick={() => onChangeStatus('present')}
        >
          Present
        </button>

        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition"
          style={getActiveButtonStyle('absent')}
          onClick={() => onChangeStatus('absent')}
        >
          Absent
        </button>

        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200 text-gray-700 hover:bg-yellow-400 hover:text-white transition"
          style={getActiveButtonStyle('late')}
          onClick={() => onChangeStatus('late')}
        >
          Late
        </button>

        <button
          className="flex-1 px-3 py-2 rounded-xl text-xs font-medium bg-gray-200  
             text-gray-700 hover:bg-purple-600 hover:text-white transition"
          style={getActiveButtonStyle('sick')}
          onClick={() => onChangeStatus('sick')}
        >
          Sick
        </button>
      </div>
    </div>
  );
};
