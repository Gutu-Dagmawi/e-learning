import "/src/styles/card.css";

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
                margin: `${props.className.includes("unit-card") ? "0px" : "0"}`,
                width: `${props.className.includes("unit-card") ? "100%" : "187px"}`,
              }}
              key={index}
            >
              <div
                style={{
                  textWrap: "wrap",
                  fontSize: "13px",
                  margin: "15px",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                <span>{content.title}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
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
                    fontSize: "13px",
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
