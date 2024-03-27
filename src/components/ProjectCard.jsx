import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "./Image";

const ProjectCard = ({ title, image, color, id }) => {
  return (
    <Link to={`/${title.toLowerCase()}`} key={id} className="projectLink col-12 col-lg-6">
        <div
          style={{ backgroundColor: color }}
          className="projectCard d-flex align-items-center justify-content-center p-5"
          onClick={() => {}}
        >
          <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
            <h3 className="projectTitle">{title}</h3>
            <span className="viewWork">
              View Work <FiArrowUpRight />
            </span>
          </div>
          <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
            <Image src={image} alt="Laptop displaying the application" />
          </div>
        </div>
    </Link>
  );
};

export default ProjectCard;
