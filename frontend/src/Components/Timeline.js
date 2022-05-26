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
  console.log(events);
  const timelineCard = () => {
    return (
      <VerticalTimeline layout="1-column-left" lineColor={THEME.colorLight}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={`${event.date}th minute`}
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
        <Card.Body
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h4 style={{ color: "whitesmoke" }}>Start - 00:00</h4>
          {events === null ? null : timelineCard()}
          <h4 style={{ color: "whitesmoke" }}>End - 90:00</h4>
        </Card.Body>
      </Card>
    </>
  );
}
