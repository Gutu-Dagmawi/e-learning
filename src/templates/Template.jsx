import Nav from "../components/Nav.jsx";
import Board from "../components/Board.jsx";
import Button from "../components/Button.jsx";
import "../styles/template.css";
import "../styles/btn.css";

export function Template({ navProps, boardProps, ...props }) {
  return (
    <>
      <div className={props.className ? props.className : "desktop-01"}>
        <Nav
          at_text={navProps.at_text}
          className={`main-nav ${navProps.className ? navProps.className : ""}`}
          {...navProps.props}
        >
          {navProps.props.groups.map((group, index) => {
            return (
              <div id={`group-${index + 1}`} className={"group"} key={index}>
                <span className={"btn-label"}>{group.label}</span>
                {group.buttons.map((button, index) => {
                  return (
                    <Button
                      className={"nav-button green-button default-btn"}
                      key={index}
                      {...button.props}
                    >
                      <div className={"btn-content"}>
                        <span>{button.text}</span>
                        <img src={button.img} alt={"Logo"} />
                      </div>
                    </Button>
                  );
                })}
              </div>
            );
          })}
        </Nav>
        <Board
          pageTag={boardProps.profile.pageTag}
          pageTitle={boardProps.profile.pageTitle}
          profile={boardProps.profile}
          {...boardProps.props}
        >
          {boardProps.children}
        </Board>
      </div>
    </>
  );
}
