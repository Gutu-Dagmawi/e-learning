import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/btn.css";
import Nav from "./components/Nav.jsx";
import Button from "./components/Button.jsx";
import Board from "./components/Board.jsx";
import "./board.css";
import { Selector } from "./components/Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav at_text={"@registrar"}>
      <div id={"group-1"} className={"group"}>
        <span className={"btn-label"}>Calender Management</span>
        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Academic Time Line</span>
            <img src="../public/Calendar%201.png" alt={"Logo"} />
          </div>
        </Button>
      </div>

      <div id={"group-2"} className={"group"}>
        <span className={"btn-label"}>Student Records</span>
        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Student Grades</span>
            <img src="../public/Grades.png" alt={"Logo"} />
          </div>
        </Button>
        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Course Eligibility</span>
            <img src="../public/Course%20Assign.png" alt={"Logo"} />
          </div>
        </Button>
        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Student Promotion</span>
            <img src="../public/Commercial.png" alt={"Logo"} />
          </div>
        </Button>
      </div>

      <div id={"group-3"} className={"group"}>
        <span className={"btn-label"}>Student Financial Record</span>
        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Credit Hour Rate</span>
            <img src="../public/Dollar%20Coin.png" alt={"Logo"} />
          </div>
        </Button>

        <Button className={"nav-button"}>
          <div className={"btn-content"}>
            <span>Payment Information</span>
            <img src="../public/Online%20Payment.png" alt={"Logo"} />
          </div>
        </Button>
      </div>

      <Button className={"nav-button"} id={"logout-btn"}>
        <div className={"btn-content"}>
          <span>Logout</span>
          <img src="../public/Logout.png" alt={"Logo"} />
        </div>
      </Button>
    </Nav>
    <Board
      pageTag={"registrar office"}
      pageTitle={"Registrar Dashboard"}
      profile={{
        src: "../public/Logou.png",
        alt: "student picture",
        name: "Dagmawi Gutu",
      }}
    >
      <div className={"board-body"}>
        <div className={"selector-form"}>
          <h1>Course Eligibility</h1>
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <Selector
            selected={"Select"}
            options={["Option 1", "Option 2", "Option 3"]}
            name={"selector"}
            value={"Select"}
          />
          <div className={"make-flex"} id={"form-buttons"}>
            <Button className={"success-button form-btn"} id={"filter-btn"}>
              <div className={"btn-content"}>
                <span>filter</span>
                <img src="../public/Tune.png" alt={"Logo"} />
              </div>
            </Button>
            <Button className={"error-button form-btn"} id={"clear-btn"}>
              <div className={"btn-content"}>
                <span>Clear</span>
                <img src="../public/Multiply.png" alt={"Logo"} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Board>
  </StrictMode>,
);

{
  /*-------------------Button Component Trial------------------------------*/
}
{
  /*<Button*/
}
{
  /*  className={"error-button"}*/
}
{
  /*  style={{*/
}
{
  /*    width: "150px",*/
}
{
  /*    height: "50px",*/
}
{
  /*  }}*/
}
{
  /*  onClick={() => alert("Clicked!")}*/
}
{
  /*>*/
}
{
  /*  <div className={"btn-content"}>*/
}
{
  /*    <span>click me</span>*/
}
{
  /*    <img src="../public/Tune.png" alt={"Logo"} />*/
}
{
  /*  </div>*/
}
{
  /*</Button>*/
}
