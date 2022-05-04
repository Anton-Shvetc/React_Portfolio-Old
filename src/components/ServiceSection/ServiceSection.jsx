import React from "react";
import styled from "styled-components";
import PText from "../PText/PText";
import Button from "../Button/Button";
import ServiceSectionItem from "../ServiceSectionItem/ServiceSectionItem";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";
import SectionTitle from "../SectionTitile/SectionTitile";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subtitle="What i will do for you" title="Service" />

        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

export default ServiceSection;
