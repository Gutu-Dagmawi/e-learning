import "../src/styles/app.css";
import { Template } from "./templates/Template.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import ActivityBar from "./components/ActivityBar.jsx";
import "../src/styles/card.css";
import "../src/styles/btn.css";
import "../src/styles/nav.css";
import "../src/styles/template.css";
import "../src/styles/table.css";
import "../src/styles/board.css";
import "../src/styles/authentication.css";
import Authentication from "./pages/Authentication.jsx";
import FilterForm from "./components/FilterForm.jsx";
import Table from "./components/Table.jsx";
import { Selector } from "./components/Form.jsx";

function App({ page }) {
  const navProps = {
    at_text: "@registrar",
    className: "main-nav",
    props: {
      groups: [
        {
          label: "Calender Management",
          buttons: [
            {
              text: "Academic Time Line",
              img: "/Calendar%201.png",
              props: {},
            },
          ],
        },
        {
          label: "Student Records",
          buttons: [
            {
              text: "Student Grades",
              img: "/Grades.png",
              props: {},
            },
            {
              text: "Course Eligibility",
              img: "/Course%20Assign.png",
              props: {},
            },
            {
              text: "Student Promotion",
              img: "/Commercial.png",
              props: {},
            },
          ],
        },
        {
          label: "Student Financial Record",
          buttons: [
            {
              text: "Credit Hour Rate",
              img: "/Dollar%20Coin.png",
              props: {},
            },
            {
              text: "Payment Information",
              img: "/Online%20Payment.png",
              props: {},
            },
            {
              text: "Logout",
              img: "/Logout.png",
              props: { id: "logout-btn" },
            },
          ],
        },
      ],
    },
  };
  let boardProps;

  switch (page) {
    case "Dashboard":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        props: {
          display: "flex",
          flexDirection: "column",
        },
        children: [
          <div
            style={{
              margin: "10px 0",
            }}
            key={1}
          >
            <h1 className={"label"}>Financial Report for 2023</h1>
          </div>,
          <Card
            key={2}
            className="success-card"
            cardContents={[
              { title: "Total Users", count: "100" },
              { title: "Total Users", count: "100" },
              { title: "Total Users", count: "100" },
            ]}
          ></Card>,
          <div
            style={{
              display: "flex",
              marginLeft: "0px",
              justifyContent: "space-between",
              width: "63.5%",
            }}
            key={3}
          >
            <Card
              className="unit-card success-card"
              cardContents={[
                {
                  title: "First Installments Completed",
                  count: "100",
                },
              ]}
            />
            <Card
              className="unit-card success-card"
              cardContents={[
                {
                  title: "First Installments Completed",
                  count: "100",
                },
              ]}
            />
            <Card
              className="unit-card alert-card"
              cardContents={[
                {
                  title: "First Installments Completed",
                  count: "100",
                },
              ]}
            />
          </div>,
          <div
            style={{
              width: "fit-content",
              height: "180px",
              position: "absolute",
              bottom: "60%",
              right: "0",
            }}
            key={4}
          >
            <img
              alt={
                "two students, one male and one female, of the college smiling while holding a book"
              }
              src="/students.png"
            ></img>
          </div>,
          <ActivityBar
            key={5}
            activities={[
              {
                icon: { src: "/Add.png", alt: "add icon" },
                title: "Uploaded student grades for 2023 semester 1",
                date: "Today at 8:00 AM",
              },
              {
                icon: { src: "/Add.png", alt: "add icon" },
                title: "Uploaded student grades for 2022 semester 2",
                date: "Thu, 22, 2023",
              },
              {
                icon: { src: "/Create.png", alt: "edit icon" },
                title: "Edited student grade for UGR/SWE/0001/21",
                date: "Thu, 22, 2023",
              },
              {
                icon: { src: "/Add.png", alt: "add icon" },
                title: "Added student grade for UGR/SWE/0001/21",
                date: "Thu, 22, 2023",
              },
              {
                icon: { src: "/Minus.png", alt: "delete icon" },
                title: "Deleted student grade for UGR/SWE/0001/21",
                date: "Thu, 22, 2023",
              },
            ]}
            label={"Recent Activities"}
          />,
        ],
      };
      return <Template navProps={navProps} boardProps={boardProps} />;
    case "Authentication":
      return <Authentication />;
    case "StudentPromotion":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        display: "flex",
        children: [
          <FilterForm
            key="1"
            formHeader={"Student Promotion"}
            orientation={"vertical"}
            selectors={[
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
            ]}
          ></FilterForm>,
          <div
            style={{
              width: "100%",
            }}
            className={"column-flex"}
            key="2"
          >
            <FilterForm
              orientation={"horizontal"}
              selectors={[
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
              ]}
            ></FilterForm>
            <Table
              style={{
                width: "88%",
              }}
              columnHeaders={[
                "Course Title",
                "Course Code",
                "Credit Hours",
                "Course Type",
                "Course Status",
              ]}
              data={[
                ["Mathematics", "MATH 101", "3", "Core", "Complete"],
                ["Physics", "PHYS 101", "3", "Core", "Incomplete"],
                ["Biology", "BIO 101", "3", "Core", "Complete"],
                ["Chemistry", "CHEM 101", "3", "Core", "Incomplete"],
                ["Computer Science", "CS 101", "3", "Core", "Complete"],
              ]}
            ></Table>
          </div>,
        ],
      };

      return <Template navProps={navProps} boardProps={boardProps} />;
    case "AcademicTimeline":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        display: "flex",
        children: [
          <FilterForm
            key="1"
            formHeader={"Academic Timeline"}
            orientation={"vertical"}
            selectors={[
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
            ]}
          ></FilterForm>,
        ],
      };
      return <Template navProps={navProps} boardProps={boardProps} />;
    case "AcademicTimeline-1":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        display: "flex",
        children: [
          <FilterForm
            key="1"
            formHeader={"Academic Timeline"}
            orientation={"vertical"}
            selectors={[
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
            ]}
          ></FilterForm>,
          <div
            key={2}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              margin: "auto",
              height: "100%",
            }}
          >
            <Button
              className={"green-button default-btn"}
              style={{
                marginLeft: "72%",
                marginTop: "6%",
                width: "198px",
                height: "45px",
              }}
            >
              <div className={"btn-content"}>
                <span>Create Timeline</span>
                <img src="/Add_White.png" alt={"A plus icon"} />
              </div>
            </Button>
            <Table
              style={{
                marginTop: "18px",
                width: "94.5%",
              }}
              columnHeaders={[
                "Registration Start",
                "Mid-Exam Start",
                "Final Exam Start",
                "Semester End",
              ]}
              data={[
                ["2023-01-01", "2023-01-01", "2023-01-01", "2023-01-01"],
                ["2023-01-01", "2023-01-01", "2023-01-01", "2023-01-01"],
              ]}
            ></Table>
          </div>,
        ],
      };
      return <Template navProps={navProps} boardProps={boardProps} />;
    case "StudentGrades":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        display: "flex",
        children: [
          <FilterForm
            key="1"
            formHeader={"Student Grades"}
            orientation={"vertical"}
            selectors={[
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
            ]}
          ></FilterForm>,
          <div className={"column-flex"} key={2}>
            <FilterForm
              text={"filter"}
              icon={"/Tune.png"}
              button={"filter-btn-horizontal"}
              orientation={"horizontal"}
              selectors={[
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
              ]}
            ></FilterForm>
            <Table
              style={{
                width: "85%",
                margin: "0 0 20px 62px",
              }}
              columnHeaders={[
                "First Name",
                "Last Name",
                "Course Code",
                "Course Title",
                "Credit Hours",
                "Grade",
                "Status",
                "Action",
              ]}
              data={[
                [
                  "John",
                  "Doe",
                  "MATH 101",
                  "Mathematics",
                  "3",
                  "A",
                  "Complete",
                  <Selector
                    className={"grade-selector"}
                    selected={"-"}
                    options={["A", "B", "C", "D", "E", "F"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "Jane",
                  "Doe",
                  "PHYS 101",
                  "Physics",
                  "3",
                  "B",
                  "Complete",
                  <Selector
                    className={"grade-selector"}
                    selected={"-"}
                    options={["A", "B", "C", "D", "E", "F"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "kaldane",
                  "Yimut",
                  "Philosophy 101",
                  "Logic",
                  "3",
                  "A",
                  "Complete",
                  <Selector
                    className={"grade-selector"}
                    selected={"-"}
                    options={["A", "B", "C", "D", "E", "F"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "Jemberu",
                  "Demeke",
                  "Math 501",
                  "Linear Algebra",
                  "3",
                  "B",
                  "Complete",
                  <Selector
                    className={"grade-selector"}
                    selected={"-"}
                    options={["A", "B", "C", "D", "E", "F"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "Shibeshi",
                  "Chegerew",
                  "CS 101",
                  "Intro To Computer Systems",
                  "3",
                  "A",
                  "Complete",
                  <Selector
                    className={"grade-selector"}
                    selected={"-"}
                    options={["A", "B", "C", "D", "E", "F"]}
                    key={"input-1"}
                  ></Selector>,
                ],
              ]}
              key={2}
            ></Table>
            <Button
              style={{
                marginLeft: "67%",
                marginBottom: "20px",
                width: "222px",
                height: "45px",
              }}
              key={3}
              className={"green-button default-btn"}
            >
              <div className={"btn-content"}>
                <span>Submit Grade</span>
                <img src="/Submit.png" alt={"Save icon"} />
              </div>
            </Button>
          </div>,
        ],
      };
      return <Template navProps={navProps} boardProps={boardProps} />;
    case "CourseEligibility":
      boardProps = {
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Example Student",
          pageTag: "registrar office",
          pageTitle: "Registrar Dashboard",
        },
        display: "flex",
        children: [
          <FilterForm
            key="1"
            formHeader={"Course Eligibility"}
            orientation={"vertical"}
            selectors={[
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
              {
                selected: "Select",
                options: ["Option 1", "Option 2", "Option 3"],
                name: "selector",
                value: "Select",
              },
            ]}
          ></FilterForm>,
          <div
            style={{
              width: "60%",
            }}
            className={"column-flex"}
            key={2}
          >
            <FilterForm
              style={{
                width: "100%",
                marginBottom: "10px",
                marginLeft: "46px",
              }}
              text={"filter"}
              icon={"/Tune.png"}
              button={"filter-btn-horizontal"}
              orientation={"horizontal"}
              selectors={[
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
                {
                  selected: "Select",
                  options: ["Option 1", "Option 2", "Option 3"],
                  name: "selector",
                  value: "Select",
                },
              ]}
            ></FilterForm>
            <Table
              style={{
                width: "100%",
                margin: "0 25px 20px 45px",
              }}
              columnHeaders={[
                "First Name",
                "Last Name",
                "Student Id",
                "Eligibility",
              ]}
              data={[
                [
                  "John",
                  "Doe",
                  "03",
                  <Selector
                    className={"eligibility-selector"}
                    selected={"-"}
                    options={["Eligible", "Not eligible"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "John",
                  "Doe",
                  "03",
                  <Selector
                    className={"eligibility-selector"}
                    selected={"-"}
                    options={["Eligible", "Not eligible"]}
                    key={"input-1"}
                  ></Selector>,
                ],
                [
                  "John",
                  "Doe",
                  "03",
                  <Selector
                    className={"eligibility-selector"}
                    selected={"-"}
                    options={["Eligible", "Not eligible"]}
                    key={"input-1"}
                  ></Selector>,
                ],
              ]}
              key={2}
            ></Table>
            <Button
              style={{
                marginLeft: "76%",
                marginTop: "6%",
                marginBottom: "20px",
                width: "222px",
                height: "45px",
              }}
              key={3}
              className={"green-button default-btn"}
            >
              <div className={"btn-content"}>
                <span>Submit Review</span>
                <img src="/Submit.png" alt={"Save icon"} />
              </div>
            </Button>
          </div>,
        ],
      };

      return <Template navProps={navProps} boardProps={boardProps} />;
  }
}

export default App;
