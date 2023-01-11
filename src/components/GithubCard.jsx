import styled from "styled-components";
function GithubCard({ imageUrl, title, description, link }) {
  return (
    <Container>
      <div className="module-border-wrap">
        <img className="image" src={imageUrl} alt="github project 1" />
      </div>
      <div className="text-group">
        <h2>{title}</h2>
        <span>{description}</span>
        <button className="btn">
          <section className="centered-container">
            <a
              className="link link--arrowed"
              href="https://github.com/ArjunSanthoshpnr"
            >
              View Project
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g
                  fill="none"
                  stroke="#1a6be6"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                >
                  <circle
                    className="arrow-icon--circle"
                    cx="16"
                    cy="16"
                    r="15.12"
                  ></circle>
                  <path
                    className="arrow-icon--arrow"
                    d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                  ></path>
                </g>
              </svg>
            </a>
          </section>
        </button>
      </div>
    </Container>
  );
}

export default GithubCard;

const Container = styled.div`
  height: 600px;
  width: 300px;
  background: rgba(0, 0, 0, 0.041);
  backdrop-filter: blur(180%) blur(10px);
  border-radius: 2rem;
  transition: transform 0.2s; /* Animation */
  justify-self: center;
  .module-border-wrap {
    width: calc(100% - 8px);
    height: 200px;
    padding: 4px;
    position: relative;
    background: linear-gradient(135deg, blue, darkorchid, midnightblue);
    border-radius: 1.8rem;
  }
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 14px 33px 7px #00000011;
  }
  .image {
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
  }
  .text-group {
    margin: 2rem;
  }
  .btn {
    margin: 1rem 0;
    border: none;
    width: 100%;
    transition: 0.5s;
    border-radius: 0.5rem;
    background-color: transparent;
    .centered-container {
      display: flex;
      justify-content: start;
      padding: 1rem 0;
      border: 1px solid rgba(#000, 0.1);
      box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.04);
    }

    .link {
      color: ${(prop) => prop.theme.text};
      cursor: pointer;
      font-weight: 400;
      text-decoration: none;
      font-size: 1.2rem;
    }

    .link--arrowed {
      display: inline-block;
      height: 2rem;
      line-height: 2rem;

      .arrow-icon {
        position: relative;
        top: -1px;
        -webkit-transition: -webkit-transform 0.3s ease;
        transition: -webkit-transform 0.3s ease;
        transition: transform 0.3s ease;
        transition: transform 0.3s ease, -webkit-transform 0.3s ease;
        vertical-align: middle;
      }

      .arrow-icon--circle {
        transition: stroke-dashoffset 0.3s ease;
        stroke-dasharray: 95;
        stroke-dashoffset: 95;
      }

      :hover {
        .arrow-icon {
          transform: translate3d(5px, 0, 0);
        }

        .arrow-icon--circle {
          stroke-dashoffset: 0;
        }
      }
    }
  }
`;
