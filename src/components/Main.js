import React from "react";
import styled from "styled-components";
import Chart from "./Chart";

function Main() {
  return (
    <Container>
      <h2>Spending - Last 7 days</h2>
      <Chart />
      <footer>
        <article className="month-total">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </article>
        <article className="comparison-summary">
          <span className="summary">+2.4%</span>
          <p>from last month</p>
        </article>
      </footer>
    </Container>
  );
}

export default Main;

const Container = styled.main`
  background-color: #fff;
  border-radius: 15px;
  margin-top: 18px;
  padding: 15px 15px;
  color: #93867b;

  h2,
  h1,
  span.summary {
    font-weight: 700;
    color: #381417;
  }

  h1 {
    font-size: 35px;
  }

  article.comparison-summary {
    text-align: right;
  }

  footer {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media only screen and (min-width: 500px) {
    padding: 30px 32px;
    margin-top: 21px;
    font-size: 16px;
    h2 {
      font-size: 30px;
    }

    h1 {
      font-size: 38px;
    }

    footer {
      margin-top: 24px;
    }
  }
`;
