import { Students } from './components/Students';
import { initialStudents } from './data/students';
import { Contador } from './components/Contador';
import { Header } from './components/Header';
import { Buscador } from './components/Buscador';
import { useState } from 'react';

export const App = () => {
  const [alumnos, setAlumnos] = useState(
    initialStudents.map((student) => ({
      ...student,
      status: 'absent',
    }))
  );

  // Funcionalidad buscador
  const [search, setSearch] = useState('');
  const filteredStudents = alumnos.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  // Función añadir estudiante
  const handleAddStudent = () => {
    const name = window.prompt('Nombre del nuevo estudiante:');
    if (!name) return;

    setAlumnos((prev) => {
      const nextId =
        prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;

      return [
        ...prev,
        {
          id: nextId,
          name,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAiXTLMVxb41bvHaOzQWCBGA3og-ka0eYAkQeOKjGVNNmT-bYvtxBkQg1jjGkbhX-nY8lcUikppFilnCUMXjZ8H_EAyzY8o4wVDFZD1P7jhYi-N7NSMHThOTZuQ0cd24wvF3mEYCTtAeBsDOdaF0XpPhRpn96eVbFSvh6cwTtbDWSZ-q0Xj2J9I1pQ0SJFsyuOqucBLSWv2FO3Nurcjv3sungpAjKpc0rdztRqYIK2XCX2D3Rbw-CzCz-DfBW5Gjh8txNz1preOOKs',
          status: 'absent',
          attendance: [],
        },
      ];
    });
  };

  // Función para cambiar estado (present/absent/late)
  const handleChangeStatus = (id, newStatus) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  return (
    <>
      <Header onAddStudent={handleAddStudent} />

      <main className="bg-gray-100 h-full p-2">
        <Contador students={alumnos} />

        <Buscador search={search} onSearchChange={setSearch} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filteredStudents.map((student) => (
            <Students
              key={student.id}
              student={student}
              onChangeStatus={(newStatus) =>
                handleChangeStatus(student.id, newStatus)
              }
            />
          ))}
        </div>
      </main>
    </>
  );
};
