import "../pages/authentication.css";

export function Selector({ selected, options, name, value }) {
  return (
    <>
      <select className={"selector"} name={name} value={value}>
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
