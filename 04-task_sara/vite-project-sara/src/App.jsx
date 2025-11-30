import { Students } from './components/Students';
import { initialStudents } from './data/students';

export const App = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Attendance Dashboard</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            rel="stylesheet"
          />
        </head>
        <body>
          <div>
            <header>
              <div>
                <span class="material-symbols-outlined text-primary text-3xl">
                  school
                </span>
                <h1>Attendance Dashboard</h1>
              </div>
              <button>
                <span class="material-symbols-outlined">person</span>
              </button>
            </header>
            <main>
              <div>
                <section>
                  <div>
                    <p>Total Students</p>
                    <p>32</p>
                  </div>
                  <div>
                    <p>Present</p>
                    <p>28</p>
                  </div>
                  <div>
                    <p>Absent</p>
                    <p>3</p>
                  </div>
                  <div>
                    <p>Late</p>
                    <p>1</p>
                  </div>
                </section>
                <section>
                  <div>
                    <label>
                      <div>
                        <span class="material-symbols-outlined">search</span>
                      </div>
                      <input placeholder="Search student name..." />
                    </label>
                  </div>
                </section>
                <section>
                  {initialStudents.map((student) => {
                    return <Students key={student.id} student={student} />;
                  })}
                </section>
              </div>
            </main>
          </div>
        </body>
      </html>
    </>
  );
};
