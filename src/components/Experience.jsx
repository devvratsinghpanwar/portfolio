import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constant";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
    <h3 className="text-white text-[24px] font-bold">
      <a
        href={experience.githubLink} // Add this property to your experience data
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {experience.title}
      </a>
    </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      ></p>
    </div>
    <div className="mt-5">
      <img
        src={experience.image} // Make sure you add 'image' key to your experiences data
        alt={experience.title}
        className="w-full h-[200px] object-contain rounded-2xl"
      />
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`styles.sectionSubText text-white`}>
          What have i made so far
        </p>
        <h2 className={styles.sectionHeadText}>My Projects..</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
