import React from "react";
import styled from "styled-components";

const Title = styled.section`
  width: 22%;
  border: 4px solid #073487;
  margin: 0 auto;
  margin-top: 3%;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: black;
  text-align: center;

  @media (min-width: 767px) {
    width: 52%;
    font-size: 35px;
    font-weigth: bold;
   
  }
`;

const Header = () => (
  <div>
    <Title>
      <h1>CORONAVÍRUS</h1>
      <h3>Boletim diário</h3>
    </Title>
  </div>
);

export default Header;