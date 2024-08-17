import "./card.css";

export default function Card({ cardContents, ...props }) {
  return (
    <>
      <div
        style={{
          ...props.style,
        }}
        className={"card" + (props.className ? ` ${props.className}` : "")}
      >
        {cardContents.map((content, index) => {
          return (
            <div
              className={"card-body"}
              style={{
                margin: `${props.className.includes("unit-card") ? "0px" : "100px"}`,
                width: `${props.className.includes("unit-card") ? "100%" : "200px"}`,
              }}
              key={index}
            >
              <div>
                <span
                  style={{
                    textWrap: "wrap",
                    width: "90%",
                    height: "fit-content",
                    padding: "10px",
                    textAlign: "center",
                    marginLeft: "10px",
                  }}
                >
                  {content.title}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "35px",
                    fontWeight: "700",
                    margin: "0 5px",
                  }}
                >
                  {content.count}
                </span>
                <span
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    margin: "0 5px",
                  }}
                >
                  {"Total Users"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
