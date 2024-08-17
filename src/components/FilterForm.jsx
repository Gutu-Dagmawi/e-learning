import { Selector } from "./Form.jsx";
import Button from "./Button.jsx"; // import "./FilterForm.css";

export default function FilterForm({
  formHeader,
  selectors,
  orientation,
  ...props
}) {
  const isVertical = orientation === "vertical";
  return (
    <>
      <div
        style={{
          display: "flex",
          width: isVertical ? "fit-content" : "95%",
          justifyContent: "space-between",
          margin: isVertical ? "35px 42px" : "55px 10px",
          height: isVertical ? "500px" : "70px",
          alignItems: "center",
          flexDirection: isVertical ? "column" : "row",
          ...props.style,
        }}
      >
        <h2
          style={{
            margin: "0",
            color: "#4d4c51",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          {formHeader && null}
        </h2>
        {selectors.map((selector, i) => {
          return <Selector key={i} {...selector} />;
        })}

        <div
          id={"form-buttons"}
          style={{
            display: isVertical ? "flex" : "block",
            justifyContent: isVertical && "space-between",
            width: isVertical ? "100%" : "fit-content",
          }}
        >
          <Button className={"green-button default-btn"} id={"filter-btn"}>
            <div className={"btn-content"}>
              <span>{isVertical ? "filter" : "Promote"}</span>
              <img
                src={isVertical ? "/Tune.png" : "/Go Back.png"}
                alt={"Logo"}
              />
            </div>
          </Button>

          {!isVertical ? null : (
            <Button className={"red-button default-btn"} id={"clear-btn"}>
              <div className={"btn-content"}>
                <span>Clear</span>
                <img src="/Multiply.png" alt={"Logo"} />
              </div>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

{
  /*      <Selector*/
}
{
  /*        selected={"Select"}*/
}
{
  /*        options={["Option 1", "Option 2", "Option 3"]}*/
}
{
  /*        name={"selector"}*/
}
{
  /*        value={"Select"}*/
}
{
  /*      />*/
}
