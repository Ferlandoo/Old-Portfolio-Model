import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

const ProjectList = () =>
  projects.map((project) => (
    <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
  ));

export default ProjectList;
