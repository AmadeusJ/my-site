import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


const CareerTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2021 - Present"
        iconStyle={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
        icon={<div>🚀</div>}
      >
        <h3>Frontend Team Lead</h3>
        <h4>Minds & Company</h4>
        <p>Developed scalable AI-driven frontend platforms.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2019 - 2021"
        iconStyle={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
        }}
        icon={<div>📚</div>}
      >
        <h3>Full-Stack Developer</h3>
        <h4>MailPlug</h4>
        <p>Built collaboration tools with React and Django.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default CareerTimeline;