import { useState } from "react";
import styled from "styled-components";
import FormComponent from "./components/Form";
import CalculateComponent from "./components/Calculate";
import NoResultComponent from "./components/NoResult";

type FormEvent = React.FormEvent<HTMLFormElement>;

function App() {
  const [mortgageAmount, setMortgageAmount] = useState<number>();
  const [mortgageTerm, setMortgageTerm] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [mortgageType, setMortgageType] = useState<string>(" ");
  const [monthPayment, setMonthPayment] = useState<string>();
  const [totalPayment, setTotalPayment] = useState<string>();
  const [paymed, setPaymed] = useState<boolean>(false);

  console.log(mortgageType);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();

    if (
      mortgageAmount === undefined ||
      mortgageTerm === undefined ||
      interestRate === undefined ||
      mortgageType === " "
    ) {
      console.error("Please fill in all fields.");
      return;
    }

    const interestMoth = interestRate / 100 / 12;
    const months = mortgageTerm * 12;

    const payMonth =
      (mortgageAmount * interestMoth * Math.pow(1 + interestMoth, months)) /
      (Math.pow(1 + interestMoth, months) - 1);

    const payTotal = payMonth * months;

    setMonthPayment(payMonth.toFixed(2));
    setTotalPayment(payTotal.toFixed(2));

    setPaymed(true);
  };

  return (
    <Container>
      <Calculator>
        <FormContainer>
          <FormComponent
            morgageAmount={mortgageAmount}
            setMorgageAmount={setMortgageAmount}
            mortgageTerm={mortgageTerm}
            setMortgageTerm={setMortgageTerm}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            mortgageType={mortgageType}
            setMortgageType={setMortgageType}
            submitForm={submitForm}
          />
        </FormContainer>
        <ResultContainer>
          {paymed ? (
            <CalculateComponent
              monthPayment={monthPayment}
              totalPayment={totalPayment}
            />
          ) : (
            <NoResultComponent />
          )}
        </ResultContainer>
      </Calculator>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: hsl(202, 86%, 94%);
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: row;
  background-color: hsl(0, 0%, 100%);
  width: 90vw;
  height: 90vh;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(202, 55%, 16%);
  width: 50%;
  height: 100%;
  border-radius: 0px 10px 10px 200px;
`;
