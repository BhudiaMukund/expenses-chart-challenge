import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data.json";

function Chart() {
  const [expenses, setExpenses] = useState(data);

  let amount = expenses.map((expense) => expense.amount);

  let maxAmount = Math.max(...amount);
  let num = 90 / maxAmount;

  let rawChartData = [
    amount.map((expense) => {
      return {
        id: expense,
        height: Math.floor(num * expense),
      };
    }),
  ];

  let chartData = rawChartData[0];

  useEffect(() => {
    chartData.forEach((item) => {
      document.getElementById(item.id).style.height = `${item.height}%`;
    });
    document.getElementById(maxAmount).style.backgroundColor = "#76b5bc";
  });

  return (
    <Container>
      {expenses.map((expense, index) => {
        return (
          <article key={index}>
            <Bar
              className="bar"
              id={expense.amount}
              amount={String(expense.amount)}
            />
            <span>{expense.day}</span>
          </article>
        );
      })}
    </Container>
  );
}

export default Chart;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 0;
  min-height: 175px;
  padding: 15px 15px;
  border-bottom: 2px solid #f8e9dd;

  article {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30px;
    text-align: center;
  }

  @media only screen and (min-width: 500px) {
    border-bottom: 3px solid #f8e9dd;
    padding: 20px 20px;
    height: 200px;
    article {
      width: 45px;
    }
  }
`;

const Bar = styled.div`
  border-radius: 4px;
  width: 100%;
  background-color: #ec775f;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 90%;
    ::after {
      animation-name: opacity-before;
      animation-duration: 500ms;
      content: "$${(props) => props.amount}";
      position: relative;
      inset: 0;
      top: -35px;
      z-index: 5;
      background: #381417;
      color: white;
      border-radius: 4px;
      padding: 5px 5px;
    }
  }
`;
