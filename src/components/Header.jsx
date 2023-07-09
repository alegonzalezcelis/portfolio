import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <header className="container w-full px-5 md:px-0 mx-auto flex flex-col justify-between text-white">
        <div className="mt-10">
          <h1 className="mb-4 mt-10 text-2xl md:text-6xl font-medium">Hola</h1>
          <h2 className="mb-4 text-2xl md:text-6xl font-medium">
            Soy <span className="font-bold">Alejandro González Celis</span>
          </h2>

          <Typewriter
            options={{
              strings: ['Desarrollador Front End', 'Ingeniero Informático'],
              autoStart: true,
              loop: true,
            }}
          />

          <p className="my-4 text-md md:text-lg w-full md:w-1/2 text-justify font-semibold">
            Mi enfoque principal es crear interfaces de usuario intuitivas y
            atractivas que proporcionen una gran experiencia de usuario.
          </p>
          <div className="h-24 flex">
            <a href="mailto:alegonzalez1993@gmail.com" target="_blank">
              <button
                type="button"
                className="text-white hover:text-white border border-sky hover:bg-cyan focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:mt-10"
              >
                <i className="fa-solid fa-envelope text-xl w-3 h-4 mr-2"></i>
                Conversemos
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1bbCNYKOJMFidcjX0-iFTn4_Eh3vVINqf/view?usp=sharing"
              target="_blank"
            >
              <button
                type="button"
                className="text-white hover:text-white border border-sky hover:bg-cyan focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 md:mt-10"
              >
                <i className="fa-solid fa-file-arrow-down text-xl w-3 h-4 mr-2"></i>
                Currículum
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
