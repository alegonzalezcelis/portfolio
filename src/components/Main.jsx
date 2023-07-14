import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <>
      <main className="py-10 flex flex-col justify-start text-left">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">
          ALE GONZÁLEZ CELIS
        </h1>
        <div className="text-4xl md:text-6xl text-picton-blue font-bold mt-2 h-24">
          <Typewriter
            options={{
              strings: [
                "DESARROLLADOR FRONT END",
                "INGENIERO INFORMÁTICO",
                "DEVOPS",
              ],
              delay: 75,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex mt-2">
          <a
            href="mailto:ghkarim460@gmail.com"
            className="text-white text-2xl border-2 p-4 rounded-full hover:border-picton-blue"
          >
            CONTÁCTAME
          </a>
          <a href="#" className="text-white text-2xl p-4 hover:underline hover:underline-offset-8">
            DESCARGA MI CV
            <i className="fa-solid fa-circle-down ml-2 hover:text-picton-blue"></i>
          </a>
        </div>
      </main>
    </>
  );
};

export default Main;
