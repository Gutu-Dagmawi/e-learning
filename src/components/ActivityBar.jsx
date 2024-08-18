import "../styles/activityBar.css";

export default function ActivityBar({ activities, label, ...props }) {
  return (
    <>
      <div className={"activity-bar"} {...props}>
        <span className={"label"}>{label}</span>
        {activities.map((activity, index) => {
          return (
            <div className={"row-flex activity-item"} key={index}>
              <span
                style={{
                  margin: "0 10px",
                }}
              >
                <img src={activity.icon.src} alt={activity.icon.alt} />
              </span>
              <div
                style={{
                  display: "flex",
                  textAlign: "left",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <span className={"activity-title"}>{activity.title}</span>
                <span className={"activity-date"}>{activity.date}</span>
              </div>
            </div>
          );
        })}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "50px",
            cursor: "pointer",
            color: "#7ec143",
          }}
        >
          <span>
            <hr />
          </span>
          <span>
            <a
              style={{
                fontSize: "11px",
                width: "fit-content",
              }}
            >
              {"SHOW MORE"}
            </a>
          </span>
          <span>
            <hr />
          </span>
        </div>
      </div>
    </>
  );
}
