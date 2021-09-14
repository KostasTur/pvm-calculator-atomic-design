import React, { useReducer } from 'react';
import Options from '../molecules/Options';
import TextInputs from '../molecules/TextInputs';
const initialState = {
  pvmSelect: 0.21,
  sum: 0,
  pvm: 0,
  sumWithPvm: 0,
};

const reducer = (state, action) => {
  if (isNaN(action.payload)) return state;
  action.payload = +action.payload;
  switch (action.type) {
    case 'SUM CHANGE':
      return {
        ...state,
        sum: action.payload,
        pvm: (action.payload * state.pvmSelect).toFixed(2),
        sumWithPvm: (action.payload * (1 + state.pvmSelect)).toFixed(2),
        editedField: 'sum',
      };
    case 'SUM WITH PVM CHANGE':
      return {
        ...state,
        sum: (action.payload / (1 + state.pvmSelect)).toFixed(2),
        pvm: (
          (action.payload / (1 + state.pvmSelect)) *
          state.pvmSelect
        ).toFixed(2),
        sumWithPvm: action.payload,
        editedField: 'sumWithPvm',
      };
    case 'PVM SELECT CHANGE':
      if (state.editedField === 'sum')
        return {
          ...state,
          pvmSelect: action.payload,
          pvm: (state.sum * action.payload).toFixed(2),
          sumWithPvm: (state.sum * (1 + action.payload)).toFixed(2),
        };
      else if (state.editedField === 'sumWithPvm')
        return {
          ...state,
          pvmSelect: action.payload,
          pvm: (
            (state.sumWithPvm / (1 + action.payload)) *
            action.payload
          ).toFixed(2),
          sum: (state.sumWithPvm / (1 + action.payload)).toFixed(2),
        };
      else return state;

    default:
      return state;
  }
};
const CalcForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form>
      <div className='formControl select'>
        <label htmlFor='pvm-select'>PVM Tarifas</label>
        <select
          name='pvm'
          id='pvm-select'
          onChange={(e) =>
            dispatch({ type: 'PVM SELECT CHANGE', payload: e.target.value })
          }
        >
          <Options
            data={[
              { value: 0.21, text: '21%' },
              { value: 0.09, text: '9%' },
              { value: 0.05, text: '5%' },
            ]}
          />
        </select>
      </div>
      <TextInputs
        data={[
          {
            label: 'Suma (be PVM)',
            id: 'sum',
            value: state.sum,
            onChange: (e) =>
              dispatch({ type: 'SUM CHANGE', payload: e.target.value }),
          },
          {
            label: 'PVM suma',
            id: 'PVM',
            value: state.pvm,
            // onChange: (e) => console.log('not allowed'),
            disabled: true,
          },
          {
            label: 'Bendra suma (su PVM)',
            id: 'sum-with-PVM',
            value: state.sumWithPvm,
            onChange: (e) =>
              dispatch({
                type: 'SUM WITH PVM CHANGE',
                payload: e.target.value,
              }),
          },
        ]}
      />
    </form>
  );
};

export default CalcForm;
