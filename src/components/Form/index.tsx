import React from "react";
import CalculatorIllustration from "../../assets/images/icon-calculator.svg";
import styled from "styled-components";
interface FormComponentProps {
  morgageAmount: number | undefined;
  setMorgageAmount: (value: number) => void;
  mortgageTerm: number | undefined;
  setMortgageTerm: (value: number) => void;
  interestRate: number | undefined;
  setInterestRate: (value: number) => void;
  mortgageType: string;
  setMortgageType: (value: string) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  morgageAmount,
  setMorgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  submitForm,
}) => {
  return (
    <Container>
      <h1 className="Title">Mortgage Calculator</h1>
      <FormContainer onSubmit={submitForm}>
        <AmountContainer>
          <h2>Mortgage Amount</h2>
          <label>
            $
            <input
              placeholder="Only Numbers"
              value={morgageAmount}
              onChange={(e) => setMorgageAmount(Number(e.target.value))}
              maxLength={6}
            />
          </label>
        </AmountContainer>
        <MortgageContainer>
          <div>
            <h2>Mortgage Term</h2>
            <label>
              Years
              <input
                placeholder="Only Numbers"
                value={mortgageTerm}
                onChange={(e) => setMortgageTerm(Number(e.target.value))}
                maxLength={2}
              />
            </label>
          </div>
          <div>
            <h2>Interest Rain</h2>
            <label>
              %
              <input
                placeholder="Only Numbers"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                maxLength={4}
              />
            </label>
          </div>
        </MortgageContainer>
        <TypeContainer>
          <h2>Mortgage Type: {mortgageType}</h2>
          <label className="Select">
            <input
              className="radio-input"
              type="radio"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Repayment
          </label>
          <label className="Select">
            <input
              className="radio-input"
              type="radio"
              value="interest-only"
              checked={mortgageType === "interest-only"}
              onChange={(e) => setMortgageType(e.target.value)}
            />
            Interest Only
          </label>
        </TypeContainer>
        <button className="Calculate">
          <img src={CalculatorIllustration} alt={"Ilustration"}></img>
          Calculate Repayments
        </button>
      </FormContainer>
    </Container>
  );
};

export default FormComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px 40px;

  .Title {
    color: hsl(202, 55%, 16%);
  }

  .Calculate {
    background-color: yellowgreen;
    color: hsl(202, 55%, 16%);
    border-radius: 50px;
    height: 80px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    width: 40%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  h2 {
    color: gray;
  }

  label {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 0px 0px 0px 10px;
    font-size: 20px;
    color: hsl(202, 55%, 16%);
    font-weight: bold;
    border-radius: 3px;
    border: 2px solid gray;
    background-color: hsl(202, 86%, 94%);

    &:hover {
      border: 2px solid yellowgreen;
      outline: none;
    }
  }

  input {
    background-color: white;
    width: 100%;
    height: 30px;
    padding: 10px;
    color: black;
    border: none;

    &:focus {
      border-color: yellowgreen;
      outline: none;
    }
  }
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MortgageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  div {
    display: flex;
    width: 50%;
    justify-content: center;
    flex-direction: column;
  }
`;

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
  gap: 10px;

  .Select {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    height: 30px;
    padding: 10px;
    color: gray;
    border: 2px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: bold;

    .radio-input {
      width: 20px;
      height: 20px;
      background-color: green;
      opacity: 20%;
      padding: 10px;
      border-radius: 50%;
      background-size: contain;
      border: 2px solid gray;
      border-width: 20px;
    }

    &:hover {
      border: 2px solid yellowgreen;
    }
  }
`;
