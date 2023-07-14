import ToolSkills from "./ToolSkills";

const Skills = () => {
  return (
    <>
      <section className="flex flex-col text-left">
        <div className="flex flex-wrap my-10 gap-4 w-3/4 md:w-1/2">
          <ToolSkills nombre="html" />
          <ToolSkills nombre="css" />
          <ToolSkills nombre="Javascript" />
          <ToolSkills nombre="Sass" />
          <ToolSkills nombre="Git" />
          <ToolSkills nombre="Tailwind" />
          <ToolSkills nombre="React" />
          <ToolSkills nombre="Bootstrap" />
          <ToolSkills nombre="Jenkins" />
          <ToolSkills nombre="Docker" />
        </div>
      </section>
    </>
  );
};

export default Skills;
