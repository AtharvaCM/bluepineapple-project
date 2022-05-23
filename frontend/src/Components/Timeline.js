import { React, useEffect, useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function Timeline({ events }) {
  //   const [events, setEvents] = useState(null);

  useEffect(() => {});

  const timelineCard = () => {
    return (
      <VerticalTimeline layout="1-column-left">
        {events.map((event, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={`${event.date} minutes`}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            key={index}
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
      <h4>Start</h4>
      {events === null ? null : timelineCard()}
      <h4>End</h4>
    </>
  );
}
