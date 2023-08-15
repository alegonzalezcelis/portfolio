import "./App.css";
import Titulo from "./components/Titulo";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
// import Skills from "./components/Skills";
import Proyecto from "./components/Proyecto";
import proyectosData from "./assets/proyectos.json";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5 text-left">
        <Main />
        {/* Sección Acderca de Mí */}
        <Titulo titulo="Acerca de mí" />
        <About />
        {/* Sección Skills */}
        <Titulo titulo="skills" />
        <section className="flex flex-col text-left">
          <div className="flex flex-wrap my-10 gap-4 w-full md:w-1/2">
            <Skills nombre="html" />
            <Skills nombre="css" />
            <Skills nombre="Javascript" />
            <Skills nombre="Sass" />
            <Skills nombre="Git" />
            <Skills nombre="Tailwind" />
            <Skills nombre="React" />
            <Skills nombre="Bootstrap" />
            <Skills nombre="Jenkins" />
            <Skills nombre="Docker" />
          </div>
          {/* Sección Proyectos */}
        </section>
        <Titulo titulo="Proyectos" />
        <Proyecto proyectos={proyectosData} />
        <Titulo titulo="Contacto" />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
