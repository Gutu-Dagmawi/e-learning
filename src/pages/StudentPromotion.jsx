import { Template } from "../templates/Template.jsx";
import FilterForm from "../components/FilterForm.jsx";
import Table from "../components/Table.jsx";

export default function StudentPromotion() {
  return (
    <Template
      navProps={{
        at_text: "@registrar",
        className: "main-nav",
        props: {
          groups: [
            {
              label: "Calender Management",
              buttons: [
                {
                  text: "Academic Time Line",
                  img: "../public/Calendar%201.png",
                  props: {},
                },
              ],
            },
            {
              label: "Student Records",
              buttons: [
                {
                  text: "Student Grades",
                  img: "../public/Grades.png",
                  props: {},
                },
                {
                  text: "Course Eligibility",
                  img: "../public/Course%20Assign.png",
                  props: {},
                },
                {
                  text: "Student Promotion",
                  img: "../public/Commercial.png",
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
      }}
      boardProps={{
        profile: {
          src: "../public/Logou.png",
          alt: "student picture",
          name: "Dagmawi Gutu",
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
                width: "92%",
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
      }}
    ></Template>
  );
}
