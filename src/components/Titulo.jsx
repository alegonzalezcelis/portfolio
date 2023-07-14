const Titulo = ({titulo}) => {
  return (
    <>
      <h2 className="text-white text-5xl my-10">
        <span className="text-picton-blue font-bold mr-1">&lt;</span>
        {titulo}
        <span className="text-picton-blue font-bold ml-1">/&gt;</span>
      </h2>
    </>
  );
};

export default Titulo;
