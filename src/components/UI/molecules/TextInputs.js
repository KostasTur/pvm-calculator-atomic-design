import React from 'react';
import TextInput from '../atoms/TextInput';

const TextInputs = ({ data }) => {
  return data.map((item) => (
    <TextInput
      label={item.label}
      id={item.id}
      key={item.id}
      value={item.value}
      onChange={item.onChange}
      disabled={item.disabled}
    />
  ));
};

export default TextInputs;
