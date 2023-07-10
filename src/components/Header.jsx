import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <header className="md:px-0 mx-auto mt-10 flex-auto flex-col justify-between text-white">
        <div className="mt-10 text-left">
          <h1 className="mb-4 text-4xl md:text-6xl">
            Alejandro González Celis
          </h1>
          <div className="text-3xl md:text-7xl text-sky font-bold">
            <Typewriter
              options={{
                strings: ["Desarrollador Front End", "Ingeniero Informático"],
                delay: 75,
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="my-4 text-md md:text-lg w-full md:w-1/2 text-justify">
            Mi enfoque principal es crear interfaces de usuario intuitivas y
            atractivas que proporcionen una gran experiencia de usuario.
          </p>
          <div className="flex justify-start gap-5 text-3xl">
            <a
              href="https://www.linkedin.com/in/alejandro-gonzalez-celis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/alegonzalezcelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
