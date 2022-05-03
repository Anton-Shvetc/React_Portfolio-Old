import { MdDesktopMac } from "react-icons/md";
import PText from "../PText/PText";
import styled from "styled-components";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5 rem;
  }
  .para {
    margin-top: 2rem;
  }
`;

function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = "Web Design",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}
        <div className="setvicesItem__title"> {title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStyles>
  );
}

export default ServiceSectionItem;
