import React from "react";
import Button from "../components/Button/Button";
import PText from "../components/PText/PText";
import AboutInfoItem from "../components/AboutInfoItem/AboutInfoItem";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";

const AboutPagesStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
export default function About() {
  return (
    <AboutPagesStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, i am <span>Anton</span>
            </p>
            <h2 className="about__heading">i am Frontend Developer</h2>
            <div className="about__info">
              <PText>
                Some text about me... Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Rem doloremque commodi consequatur soluta.
                Corrupti rem aliquid laudantium suscipit cumque iste possimus
                facere at! Eos consectetur, quam quo molestiae iusto saepe!
              </PText>
            </div>
            <Button btnText={"Download CV"} btnLink="#"></Button>
          </div>
          <div className="right">
            <img src={AboutImg} alt="About Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading"> Education</h1>
            <AboutInfoItem
              title="Varsity"
              items={["Moscow Polytechnic University"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem title="BackEnd" items={["PHP", "Firebase"]} />
            <AboutInfoItem title="Design" items={["Photoshop", "Figma"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2021-2022"
              items={["Freelance web Developer"]}
            />
            <AboutInfoItem title="02/2022 -" items={["FullStack Developer"]} />
            <AboutInfoItem title="04/2022 -" items={["React Developer"]} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPagesStyle>
  );
}
