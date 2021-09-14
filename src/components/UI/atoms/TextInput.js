const TextInput = ({ label, id, value, onChange, disabled }) => {
  return label ? (
    <div className='formControl'>
      <label>{label}</label>
      <input
        type='text'
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <br />
    </div>
  ) : (
    <input type='text' id={id} value={value} onChange={onChange} />
  );
};

export default TextInput;
