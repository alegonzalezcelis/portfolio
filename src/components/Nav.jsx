import { useRef } from "react";

const Nav = () => {
  //   const button = document.querySelector("#menu-button");
  //   const menu = document.querySelector("#menu");

  //   button.ader("click", () => {
  //     menu.classList.toggle("hidden");dEventListen
  //   });

  const menuButton = useRef(null)
  const menu = useRef(null)
  return (
    <>
      <nav className="bg-midnight px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center text-white text-2xl font-bold">
            <span className="text-white font-bold">Alegoncelis</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-50 rounded-lg md:hidden hover:bg-sky focus:outline-none focus:ring-2 focus:ring-cyan"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-semibold md:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-cyan md:hover:bg-transparent md:border-0 md:hover:text-sky md:p-0 md:hover:underline underline-offset-8"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#acerca-de-mi"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-cyan md:hover:bg-transparent md:border-0 md:hover:text-sky md:p-0 md:hover:underline underline-offset-8"
                >
                  Acerca de Mí
                </a>
              </li>
              <li>
                <a
                  href="#habilidades"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-cyan md:hover:bg-transparent md:border-0 md:hover:text-sky md:p-0 md:hover:underline underline-offset-8"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-cyan md:hover:bg-transparent md:border-0 md:hover:text-sky md:p-0 md:hover:underline underline-offset-8"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-cyan md:hover:bg-transparent md:border-0 md:hover:text-sky md:p-0 md:hover:underline underline-offset-8"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
