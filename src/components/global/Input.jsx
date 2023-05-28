function Input({ type, value, setValue, placeholder }) {
  return (
    <input
      type={type || "text"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={`${placeholder || ""}`}
    />
  );
}

export default Input;
