import styled from "styled-components";

function PText({ children }) {
  const PStyle = styled.div`
    // max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  `;

  return <PStyle>{children}</PStyle>;
}

export default PText;
