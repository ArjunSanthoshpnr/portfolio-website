import styled from "styled-components";

function Event({ title, subtitle, interval, children }) {
  return (
    <StyledEvent>
      <label className="icon"></label>
      <div className="timeline-body">
        <p className="date">{interval}</p>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        <div className="description">{children}</div>
      </div>
    </StyledEvent>
  );
}

const StyledEvent = styled.li`
  position: relative;
  .icon {
    transform: rotate(45deg);
    border-radius: 0.2rem;
    background-color: black;
    outline: 10px solid white;
    display: block;
    margin: 0.5em 0.5em 0.5em -0.5em;
    position: absolute;
    top: 0;
    left: 2em;
    width: 1em;
    height: 1em;
  }
  .timeline-body {
    padding: 2em 2em 0 2em;
    position: relative;
    top: -1.875em;
    left: 2em;
    width: 95%;
    h3 {
      font-size: 1.75em;
    }
    h4 {
      font-size: 1.2em;
      margin-bottom: 1.2em;
    }
  }
  .date {
    color: white;
    background-color: black;
    box-shadow: inset 0 0 0 0em #ef795a;
    display: inline-block;
    margin-bottom: 1.2em;
    margin-top: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }
  .description {
    strong {
      font-weight: 700;
    }
    p {
      padding-bottom: 1.2em;
    }
  }
`;
export default Event;
