import { GithubCard, Button } from "../components";
import styled, { useTheme } from "styled-components";
import magicHat from "../assets/images/magic-hat.png";
import { GithubIcon } from "../assets";
const projects = [
  {
    key: "1",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/7143049/screenshots/17298683/media/52e56b0152f89e1867c2e793ac839582.jpg?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    key: "2",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/userupload/4152659/file/original-8aadbedba1a6507dd992f905893f3f0c.jpg?compress=1&resize=752x",
    link: "#",
  },
  {
    key: "3",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/959482/screenshots/15739271/media/6982f08cf948677ab746cd0df50efb30.png",
    link: "#",
  },
  {
    key: "4",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/1904192/screenshots/17820238/media/1cb7c41d3160a12f7bc09ee4a3762048.png?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    key: "5",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/7143049/screenshots/17298683/media/52e56b0152f89e1867c2e793ac839582.jpg?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    key: "6",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/userupload/4152659/file/original-8aadbedba1a6507dd992f905893f3f0c.jpg?compress=1&resize=752x",
    link: "#",
  },
  {
    key: "7",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/959482/screenshots/15739271/media/6982f08cf948677ab746cd0df50efb30.png",
    link: "#",
  },
  {
    key: "8",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/1904192/screenshots/17820238/media/1cb7c41d3160a12f7bc09ee4a3762048.png?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
];
function Github({ children }) {
  const theme = useTheme();
  return (
    <>
      <Introduction>
        <img className="image" src={magicHat} alt="magic hat"></img>
        <div className="title-group">
          <h1 className="title">Personal Projects on Github</h1>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis
            praesentium pariatur nemo magni aut cumque illo! Odio optio cumque
            sint odit tempora debitis ullam adipisci. Ducimus eaque qui error?
          </span>
          <Button className="btn-link" variant="primary">
            <GithubIcon color={theme.btnText} />
            View my Github
          </Button>
        </div>
      </Introduction>
      <Container>
        {projects.map((project) => (
          <GithubCard
            key={project.key}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 2000px;
  /* height: 800px; */
  margin: 6rem 2rem;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
`;

const Introduction = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  .title-group {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .description {
      display: inline-block;
      width: 80%;
    }
    .btn-link {
      width: fit-content;
      margin-top: 1rem;
    }
    /* .btn-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 1px solid;
      border-color: ${(props) => props.theme.btnBorderColor};
      border-radius: 5rem;
      width: fit-content;
      padding: 0.25rem 2rem;
      margin-top: 2rem;
      color: ${(props) => props.theme.btnText};
      background-color: ${(props) => props.theme.btnBg};
      :hover {
      }
    } */
  }
  .image {
    width: 600px;
    height: 600px;
  }
`;

export default Github;
