import cachipunImg from "../assets/img/cachipun.png";
import viajesChileImg from "../assets/img/viajes-chile.png";
import fourcardsImg from "../assets/img/four-cards.png";

const Proyecto = ({ proyectos }) => {
  return (
    <>
      {/* {proyectos.map((proyecto) => (
        <li key={proyecto.id}>
          <div className="grid grid-cols-12 gap-4">
            <figure className="col-span-4 bg-picton-blue rounded-lg">
              <img src={`../assets/img/${proyecto.imagen}`} alt={proyecto.nombre} />
            </figure>
            <div className="col-span-6 flex flex-col text-white">
              <h3 className="font-bold text-2xl">{proyecto.nombre}</h3>
              <p className="mt-5 text-sm">{proyecto.descripcion}</p>
              <div className="flex flex-wrap gap-4 mt-5">
                {proyecto.tecnologias.map((tecnologia) => (
                  <div
                    key={tecnologia}
                    className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4"
                  >
                    {tecnologia}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center gap-y-10 text-3xl bg-gray-400"></div>
          </div>
        </li>
      ))} */}
      <div className="grid grid-cols-12 gap-4">
        <figure className="col-span-4">
          <img src={cachipunImg} alt="Cachipun" />
        </figure>
        <div className="col-span-6 flex flex-col text-white">
          <h3 className="font-bold text-2xl">Cachipun</h3>
          <p className="mt-5 text-sm">
            El clásico juego del Piedra, papel y tijeras
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              JavaScript
            </div>
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              Tailwind
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-y-10 text-3xl text-white">
          <a href="">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <figure className="col-span-4">
          <img src={viajesChileImg} alt="Viajes Chile" />
        </figure>
        <div className="col-span-6 flex flex-col text-white">
          <h3 className="font-bold text-2xl">Agencia de viajes Chile</h3>
          <p className="mt-5 text-sm">
            Landing Page de la agencia de viajes Chile desarrollada en un
            bootcamp de Desafío Latam
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              HTML
            </div>
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              CSS
            </div>
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              Sass
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-y-10 text-3xl text-white">
          <a href="">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <figure className="col-span-4">
          <img src={fourcardsImg} alt="Four Cards" />
        </figure>
        <div className="col-span-6 flex flex-col text-white">
          <h3 className="font-bold text-2xl">Four Cards</h3>
          <p className="mt-5 text-sm">
            Desafío responsive de la plataforma FrontEnd Mentor
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              HTML
            </div>
            <div className="text-white text-xs font-light border-2 border-white rounded-full py-2 px-4">
              CSS
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-y-10 text-3xl text-white">
          <a href="">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Proyecto;
