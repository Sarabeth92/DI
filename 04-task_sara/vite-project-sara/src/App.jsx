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

  //Función para cambiar estado (present/absent/late)
  const handleChangeStatus = (id, newStatus) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  return (
    <>
      <Header />
      <main className="bg-gray-100 h-full p-2">
        <Contador students={alumnos} />
        <Buscador />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {alumnos.map((student) => (
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
