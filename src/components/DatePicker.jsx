export function DatePicker({...props}) {
    return (
        <>
            <input
                type={"date"}
                style={{
                    width: "70%",
                    fontFamily: "Poppins",
                    color: "#605f5f",
                    fontSize: "1.1em",
                    border: "1px solid #605f5f",
                    borderRadius: "10px",
                    height: "50px",
                    margin: "14px auto",
                    ...props.style
                }}
                {...props}
            />

        </>
    )
}
