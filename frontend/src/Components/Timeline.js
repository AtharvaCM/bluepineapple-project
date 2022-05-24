import { React } from "react";
import { Card } from "react-bootstrap";
import { RiFootballLine } from "react-icons/ri";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { THEME } from "../Constants/colors";

export function Timeline({ events }) {
  const timelineCard = () => {
    return (
      <VerticalTimeline layout="1-column-left" lineColor={THEME.colorDark}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={`${event.date} minutes`}
            icon={<RiFootballLine />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            key={index}
            contentStyle={{ background: THEME.colorLight }}
            contentArrowStyle={{ borderRight: `7px solid ${THEME.colorLight}` }}
          >
            <h5
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
            <h6
              className="vertical-timeline-element-subtitle"
              dangerouslySetInnerHTML={{ __html: `Team: ${event.team}` }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  };

  return (
    <>
      <Card>
        <Card.Header>Goal Timeline</Card.Header>
        <Card.Body style={{ background: "transparent" }}>
          <h4 style={{ color: THEME.colorDark }}>Start</h4>
          {events === null ? null : timelineCard()}
          <h4 style={{ color: THEME.colorDark }}>End</h4>
        </Card.Body>
      </Card>
    </>
  );
}
