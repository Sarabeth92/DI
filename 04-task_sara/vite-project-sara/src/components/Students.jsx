export const Students = ({ student }) => {
  const { id, name, image } = student;
  return (
    <>
      <div>
        <div>
          <div>
            <img alt={`Avatar of ${name}`} src={image} />
            <div>
              <p>{name}</p>
              <p>ID: {id}</p>
            </div>
          </div>
          <span>Present</span>
        </div>
        <div>
          <button>Present</button>
          <button>Absent</button>
          <button>Late</button>
        </div>
      </div>
    </>
  );
};
