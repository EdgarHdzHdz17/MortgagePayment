import React from "react";
import styled from "styled-components";
import EmptyIllustration from "../../assets/images/illustration-empty.svg";

const NoResultComponent: React.FC = () => {
  return (
    <Container>
      <img src={EmptyIllustration} alt={"Cak"}></img>
      <h1>Results shown here</h1>
      <span>
        Complete the form and click "Calculate repayments to see what your
        monthly repayments would be."
      </span>
    </Container>
  );
};

export default NoResultComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 80px;
  gap: 20px;
  height: 100vh;

  img {
    width: 50%;
  }

  span {
    text-align: center;
    font-size: 20px;
    color: gainsboro;
    width: 80%;
  }
`;
