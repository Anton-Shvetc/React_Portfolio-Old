import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) => (props.outline ? "transparent" : "gray")};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid ${(props) => (props.outline ? "#fff" : "#000")};
    color: ${(props) => (props.outline ? "#fff" : "#000")};
  }
`;

function Button({ btnLink, btnText, outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

export default Button;
