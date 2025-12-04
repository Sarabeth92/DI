import { Students } from './components/Students';
import { initialStudents } from './data/students';
import { Contador } from './components/Contador';
import { Header } from './components/Header';
import { Buscador } from './components/Buscador';

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 p-2">
        <Contador />
        <Buscador />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
          {initialStudents.map((student) => {
            return <Students key={student.id} student={student} />;
          })}
        </div>
      </main>
    </>
  );
};
