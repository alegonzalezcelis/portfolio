import "./App.css";
import Titulo from "./components/Titulo";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyecto from "./components/Proyecto";
import proyectosData from "./assets/proyectos.json"

function App() {
  return (
    <>
      <div className="flex flex-col mx-5 text-left">
        <Header />
        <Main />
        <Titulo titulo="Acerca de mí" />
        <About />
        <Titulo titulo="skills" />
        <Skills />
        <Titulo titulo="Proyectos" />
        {/* Sección de proyectos */}
        <section className="flex flex-col gap-y-4">
          <Proyecto proyectos={proyectosData}/>
        </section>
      </div>
    </>
  );
}

export default App;
