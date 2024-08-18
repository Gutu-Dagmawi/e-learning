import "../styles/authentication.css";

export function Selector({ selected, options, name, value, ...props }) {
  return (
    <>
      <select
        className={`${props.className || "selector"}`}
        name={name}
        value={value}
      >
        <option value={selected}>{selected}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
