import React from 'react';
import { StyledCalcFormWrapper } from '../components/UI/organisms/StyledCalc';
import CalcForm from '../components/UI/organisms/CalcForm';

const PvmCalcPage = () => {
  return (
    <main>
      <h1>PVM Skaičiuoklė</h1>
      <StyledCalcFormWrapper>
        <CalcForm />
      </StyledCalcFormWrapper>
    </main>
  );
};

export default PvmCalcPage;
