import { LogoButton } from "./Button.jsx";
import "./nav.css";

export default function Nav({ at_text, children, ...props }) {
  return (
    <>
      <nav
        {...props}
        className={`main-nav ${props.className ? props.className : ""}`}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            height: "84px",
            borderBottom: "2px solid white",
            color: "white",
            padding: "10px",
          }}
        >
          <span>
            <LogoButton />
          </span>
          <span>
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                letterSpacing: "2px", // Added letterSpacing
                margin: "0px",
                color: "white",
              }}
            >
              BITS-SIS
            </h1>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "290",
                margin: "0px",
                fontStyle: "italic", // Added fontStyle
                color: "white",
              }}
            >
              {at_text}
            </p>
          </span>
        </header>

        {children}
      </nav>
    </>
  );
}
