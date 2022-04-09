export const TextInputComponent = ({
  //   label,
  name,
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <div className='input-group m-1'>
      {/* <span className='input-group-text' id='basic-addon1'>
        {label}
      </span> */}
      <input
        type={type}
        className='form-control'
        placeholder={placeholder}
        aria-describedby='basic-addon1'
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};
