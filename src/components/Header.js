import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <article>
        <span>My balance</span>
        <h1>$921.48</h1>
      </article>
      <img src="/images/logo.svg" alt="Logo" />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  padding: 20px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ec775f;
  color: white;
  h1 {
    margin-top: 5px;
  }

  @media only screen and (min-width: 500px) {
    padding: 30px 30px;
    margin-bottom: 5px;
    span {
      font-size: 17px;
    }

    h1 {
      font-size: 34px;
    }
  }
`;
