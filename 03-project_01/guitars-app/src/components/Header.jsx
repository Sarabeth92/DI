export const Header = ({ cart }) => {
  const getTotalItems = () => {
    return cart.reduce((total, g) => {
      return total + g.price * g.quantity;
    }, 0);
  };

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {cart.length === 0 ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <TableCart cart={cart} />
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const TableCart = ({ cart, clearCart }) => {
  return (
    <>
      <table className="w-100 table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ image, price, name, quantity }) => {
            return (
              <tr>
                <td>
                  <img
                    className="img-fluid"
                    src={`/img/${image}.jpg`}
                    alt="imagen guitarra"
                  />
                </td>
                <td>{name}</td>
                <td className="fw-bold">{price}</td>
                <td className="flex align-items-start gap-4">
                  <button type="button" className="btn btn-dark">
                    -
                  </button>
                  {quantity}
                  <button type="button" className="btn btn-dark">
                    +
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" type="button">
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="text-end">
        Total pagar: <span className="fw-bold">${getTotalItems()}</span>
      </p>
      <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
    </>
  );
};
