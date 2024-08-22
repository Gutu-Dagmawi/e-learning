import {Selector} from "./Form.jsx";
import Button from "./Button.jsx";
import {Link} from "react-router-dom";

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
                    width: isVertical ? "fit-content" : "90%",
                    justifyContent: "space-between",
                    margin: isVertical ? "35px 42px" : "25px 5px",
                    height: isVertical ? "500px" : "70px",
                    flexDirection: isVertical ? "column" : "row",
                    ...props.style,
                }}
            >
                <span className={"label"}>{formHeader}</span>
                {selectors.map((selector, i) => {
                    return <Selector key={i} {...selector} />;
                })}

                <div
                    id={"form-buttons"}
                    style={{
                        display: isVertical ? "flex" : "block",
                        justifyContent: "space-between",
                        width: isVertical ? "100%" : "fit-content",
                    }}
                >
                    <Link to={props.to ? props.to : "#"}>
                        <Button className={`green-button default-btn ${props.button}`}>
                            <div className={"btn-content"}>
              <span>
                {props.text ? props.text : isVertical ? "filter" : "Promote"}
              </span>
                                <img
                                    src={
                                        props.icon
                                            ? props.icon
                                            : isVertical
                                                ? "/Tune.png"
                                                : "/Go Back.png"
                                    }
                                    alt={"Logo"}
                                />
                            </div>
                        </Button>
                    </Link>

                    {!isVertical ? null : (
                        <Button className={"red-button default-btn"} id={"clear-btn"}>
                            <div className={"btn-content"}>
                                <span>Clear</span>
                                <img src="/Multiply.png" alt={"Logo"}/>
                            </div>
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}


