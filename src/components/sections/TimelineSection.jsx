import styled from "styled-components";
import { Timeline, Event } from "../";

export const TimelineSection = () => {
  return (
    <TimelineWrapper>
      <span className="title">Professional Carrier Timeline</span>
      <Timeline>
        <Event
          interval={"2021 - Present"}
          title={"Software Engineer"}
          subtitle={"Ecs Fin Inc."}
        >
          A fried Jamaica Red Ale trades baseball cards with a coors light.
          Furthermore, a Busch returns home, and the Jamaica Red Ale steals
          women from the radioactive Guiness. The slow tornado brew wastedly
          assimilates a Guiness around an Octoberfest. Now and then, a miserly
          Wolverine Beer caricatures a crazy Stella Artois. A change near a Sam
          Adams gives lectures on morality to a satellite brewery defined by
          some bottle.
        </Event>
        <Event
          interval={"2016 - 2020"}
          title={"Bachelors Degree in Computer Science"}
          subtitle={"Kerala Technical University"}
        >
          A fried Jamaica Red Ale trades baseball cards with a coors light.
          Furthermore, a Busch returns home, and the Jamaica Red Ale steals
          women from the radioactive Guiness. The slow tornado brew wastedly
          assimilates a Guiness around an Octoberfest. Now and then, a miserly
          Wolverine Beer caricatures a crazy Stella Artois. A change near a Sam
          Adams gives lectures on morality to a satellite brewery defined by
          some bottle.
        </Event>
        <Event
          interval={"2014 - 2016"}
          title={"11th/12th Grade - Senior Secondary School"}
          subtitle={"Kerala Department of Higher Secondary Education"}
        >
          A fried Jamaica Red Ale trades baseball cards with a coors light.
          Furthermore, a Busch returns home, and the Jamaica Red Ale steals
          women from the radioactive Guiness. The slow tornado brew wastedly
          assimilates a Guiness around an Octoberfest. Now and then, a miserly
          Wolverine Beer caricatures a crazy Stella Artois. A change near a Sam
          Adams gives lectures on morality to a satellite brewery defined by
          some bottle.
        </Event>
      </Timeline>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  margin: 0 0.4rem;
  max-width: 800px;
  .title {
    max-width: 800px;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${(props) => props.theme.text};
    font-size: 2rem;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    .title {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 576px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default TimelineSection;
