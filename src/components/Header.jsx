const Header = () => {
  return (
    <>
    {/* Extender solo el borde para que ocupe el 100% de la página, saliendose  */}
      <header className="flex justify-between py-10 px-5 text-center">
        <h2 className="text-white text-3xl">
          {/* <span className="text-picton-blue font-bold mr-1">&lt;</span> */}
          Ale
          {/* <span className="text-picton-blue font-bold ml-1">/&gt;</span> */}
        </h2>
        <a href="mailto:alegonzalezcelis@gmail.com" className="text-white text-md my-auto hover:underline">alegonzalezcelis@gmail.com</a>
      </header>
    </>
  );
};

export default Header;
