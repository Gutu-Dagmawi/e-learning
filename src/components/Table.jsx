import "./table.css";

export default function Table({ columnHeaders, data, ...props }) {
  return (
    <>
      <table
        style={{
          ...props.style,
        }}
      >
        <thead className={"table-head"}>
          <tr>
            <th>
              <input type={"checkbox"} />
            </th>
            {columnHeaders.map((header, i) => {
              return <th key={i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                <th>
                  <input type={"checkbox"} />
                </th>
                {row.map((cell, i) => {
                  return (
                    <>
                      <td key={i}>{cell}</td>
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
