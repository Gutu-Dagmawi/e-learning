export default function Board({ pageTitle, pageTag, profile, children }) {
  return (
    <>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          width: "84%",
          height: "1000px",
          background: "#f0f0f0",
        }}
      >
        <header
          style={{
            marginTop: "0",
            display: "flex",
            borderBottom: "3px solid black",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "105px",
          }}
        >
          <span
            style={{
              margin: "15px auto 15px 45px",
              width: "fit-content",
              height: "55px",
              color: "#4d4c51",
              fontSize: "40px",
              fontWeight: "400",
            }}
          >
            {pageTitle}
          </span>
          <span
            className={"profile"}
            style={{
              width: "200px",
              height: "55px",
              margin: "15px 45px 15px 0",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: "50px",
                height: "50px",
                fontSize: "22px",
                display: "flex",
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                background: "#FF8B37",
                borderRadius: "50%",
              }}
            >
              DG
            </span>
            <span
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                fontSize: "15px",
                color: "#4d4c51",
              }}
            >
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {profile.name}
              </span>
              <span
                style={{
                  fontSize: "10px",
                }}
              >
                {pageTag}
              </span>
            </span>
          </span>
        </header>
        <hr
          style={{
            margin: "0px",
            width: "100%",
            height: "2px",
            color: "#4d4c51",
          }}
        />

        {children}
      </div>
    </>
  );
}
