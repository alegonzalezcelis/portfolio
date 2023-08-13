import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <>
      <main className="py-10 flex flex-col text-center">
        <h1 className="text-white text-5xl md:text-6xl font-semibold">
          ALE
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
        <p className="mx-auto text-white text-xl my-5 md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="flex mt-2 mx-0">
          <a
            href="mailto:ghkarim460@gmail.com"
            className="text-white text-sm border-2 py-2 px-5 my-auto rounded-full hover:border-picton-blue"
          >
            CONTÁCTAME
          </a>
          <a href="#" className="text-white text-sm p-4 hover:underline hover:underline-offset-8">
            DESCARGA MI CV
            <i className="fa-solid fa-circle-down ml-2 hover:border-picton-blue"></i>
          </a>
        </div>
      </main>
    </>
  );
};

export default Main;
