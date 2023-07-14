import foto from "../assets/img/alegoncelis.jpg"
const About = () => {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex my-10 items-center text-white text-3xl gap-x-5">
          <figure>
            <img src={foto} alt="Alejandro González Celis" className="h-32 w-32 rounded-full " />
          </figure>
          <i className="fa-brands fa-linkedin hover:text-picton-blue"></i>
          <i className="fa-brands fa-github hover:text-picton-blue"></i>
        </div>
        {/* Contenedor del texto */}
        <div className="grid md:grid-cols-2 gap-4 text-white text-2xl">
          <p className="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident enim facere quasi praesentium porro inventore et id. Eius veniam at accusantium delectus expedita similique quaerat!</p>
          <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit provident, ipsam distinctio autem veritatis commodi libero, nobis optio repudiandae mollitia consectetur facilis ratione tenetur. Ullam.</p>
        </div>
      </section>
    </>
  );
};

export default About;
