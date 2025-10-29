import { Footer, Header, Guitar } from './components';

import { db } from './data/db';

export const App = () => {
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map((g) => (
            <Guitar key={g.id} guitar={g} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
