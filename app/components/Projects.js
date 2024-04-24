import Card from "./Card";

import { projects } from "./ProjectCards";
const Projects = () => {
  return (
    <section className="m__75">
      <div className="heading__comp pb-5">
        <div>
          <div className="section__sub__heading">Projects</div>
          <div className="section__heading">Portfolio</div>
        </div>
      </div>
      <div>
        {projects.map((projects, index) => {
          return <Card key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
