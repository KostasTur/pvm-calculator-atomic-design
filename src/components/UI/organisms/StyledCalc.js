import styled from 'styled-components';
export const StyledCalcFormWrapper = styled.div`
  background-color: lightblue;
  width: 100%;
  padding: 25px;
  form {
    width: 400px;
    margin: 0 auto;
  }
  select {
    width: 50px;
    border: 0.5px solid grey;
    border-radius: 5px;
  }
  input {
    width: 200px;
    padding: 5px;
    border: 0.5px solid grey;
    border-radius: 5px;
  }
  label {
    margin-right: 15px;
    padding: 5px;
  }
  .formControl {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
  .select {
    margin-right: 150px;
  }
  #PVM:hover {
    cursor: not-allowed;
  }
`;
