import "../styles/btn.css";

const Button = ({
                    type = "button", // Default to 'button'
                    children,
                    disabled = false, // Button is enabled by default//
                    // Custom class name(s) to apply
                    ...props // Spread the remaining props for flexibility
                }) => {
    // Merge default styles with custom styles

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${props.className ? props.className : "gray-button"}`}
            {...props} // Spread any additional props (e.g., name, value, etc.)
        >
            {children}
        </button>
    );
};

export const LogoButton = () => {
    return (
        <>
            <div
                style={{
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    margin: "16px",
                    width: "60px",
                    height: "60px",
                    background: "#7ec143",
                }}
            >
        <span>
          <img
              style={{
                  margin: "5px",
                  padding: "7px",
                  background: "#fff",
                  borderColor: "white",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
              }}
              src="/logo.png"
              alt={"logo"}
          />
        </span>
            </div>
        </>
    );
};

export default Button;
