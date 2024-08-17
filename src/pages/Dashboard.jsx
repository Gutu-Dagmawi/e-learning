import { Template } from "../templates/Template.jsx";
import Card from "../components/Card.jsx";
import React from "react";

export function Dashboard() {
  return (
    <>
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
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "#4d4c51",
                }}
              >
                Financial Report for 2023
              </h1>
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
                height: "fit-content",
                position: "absolute",
                bottom: "0",
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
          ],
        }}
      ></Template>
    </>
  );
}
