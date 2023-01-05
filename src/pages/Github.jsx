import { GithubCard } from "../components";
import styled from "styled-components";
import magicHat from "../assets/images/magic-hat.png";
const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/7143049/screenshots/17298683/media/52e56b0152f89e1867c2e793ac839582.jpg?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/userupload/4152659/file/original-8aadbedba1a6507dd992f905893f3f0c.jpg?compress=1&resize=752x",
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/959482/screenshots/15739271/media/6982f08cf948677ab746cd0df50efb30.png",
    link: "#",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/1904192/screenshots/17820238/media/1cb7c41d3160a12f7bc09ee4a3762048.png?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/7143049/screenshots/17298683/media/52e56b0152f89e1867c2e793ac839582.jpg?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/userupload/4152659/file/original-8aadbedba1a6507dd992f905893f3f0c.jpg?compress=1&resize=752x",
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/959482/screenshots/15739271/media/6982f08cf948677ab746cd0df50efb30.png",
    link: "#",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis praesentium pariatur nemo magni aut cumque illo! Odio optio cumquesint odit tempora debitis ullam adipisci. Ducimus eaque qui error?",
    imageUrl:
      "https://cdn.dribbble.com/users/1904192/screenshots/17820238/media/1cb7c41d3160a12f7bc09ee4a3762048.png?compress=1&resize=1600x1200&vertical=top",
    link: "#",
  },
];
function Github({ children }) {
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
        </div>
      </Introduction>
      <Container>
        {projects.map((project) => (
          <GithubCard
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
  /* justify-content: space-evenly; */
  /* flex-wrap: wrap; */
  /* gap: 3rem; */
`;

const Introduction = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  .title-group {
    max-width: 800px;
    .description {
      display: inline-block;
      width: 80%;
    }
  }
  .image {
    width: 600px;
    height: 600px;
  }
`;

export default Github;
