import styled from "styled-components";
import PText from "../PText/PText";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitile/SectionTitile";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
  }
  h2 {
    font-size: 6rem;
    matgin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

function AboutSection() {
  return (
    <SectionTitleStyle>
      <div className="container">
        <div className="aboutSection-left">
          <SectionTitle subtitle="This is subtitle" title="About me" />

          <PText>I am a freelance Frontend developer and more...</PText>
          <div className="aboutSection-button">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read more" outline />
          </div>
        </div>
        <div className="aboutSection-right"></div>
      </div>
    </SectionTitleStyle>
  );
}

export default AboutSection;
