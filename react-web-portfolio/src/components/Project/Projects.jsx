import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectCardList } from "../ProjectCardList/ProjectCardList";
import "../ProjectCardList/index.css";
import './index.css';


export const Projects = () => {
    return (
        <section className="project" id="projects">
            <ProjectCardList />
        </section>
    )

}