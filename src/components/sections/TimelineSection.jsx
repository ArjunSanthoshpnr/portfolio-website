import { Timeline, Event } from "../";

export const TimelineSection = ({ darkTheme }) => {
  return (
    <Timeline>
      <Event
        interval={"2021 – Present"}
        title={"Software Engineer"}
        subtitle={"Ecs Fin Inc."}
      >
        A fried Jamaica Red Ale trades baseball cards with a coors light.
        Furthermore, a Busch returns home, and the Jamaica Red Ale steals women
        from the radioactive Guiness. The slow tornado brew wastedly assimilates
        a Guiness around an Octoberfest. Now and then, a miserly Wolverine Beer
        caricatures a crazy Stella Artois. A change near a Sam Adams gives
        lectures on morality to a satellite brewery defined by some bottle.
      </Event>
      <Event
        interval={"2016 – 2020"}
        title={"Bachelors Degree in Computer Science"}
        subtitle={"Kerala Technical University"}
      >
        A fried Jamaica Red Ale trades baseball cards with a coors light.
        Furthermore, a Busch returns home, and the Jamaica Red Ale steals women
        from the radioactive Guiness. The slow tornado brew wastedly assimilates
        a Guiness around an Octoberfest. Now and then, a miserly Wolverine Beer
        caricatures a crazy Stella Artois. A change near a Sam Adams gives
        lectures on morality to a satellite brewery defined by some bottle.
      </Event>
    </Timeline>
  );
};

export default TimelineSection;
