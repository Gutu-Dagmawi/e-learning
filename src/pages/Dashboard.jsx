import {Template} from "../templates/Template.jsx";
import {navProps} from "../../public/constants/navProps.js";
import Card from "../components/Card.jsx";
import ActivityBar from "../components/ActivityBar.jsx";

export function Dashboard() {
    return (
        <>
            <Template
                navProps={navProps}
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
                            <h1 className={"label"}>Financial Report for 2023</h1>
                        </div>,
                        <Card
                            key={2}
                            className="success-card"
                            cardContents={[
                                {title: "Total Users", count: "100"},
                                {title: "Total Users", count: "100"},
                                {title: "Total Users", count: "100"},
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
                                    icon: {src: "/Add.png", alt: "add icon"},
                                    title: "Uploaded student grades for 2023 semester 1",
                                    date: "Today at 8:00 AM",
                                },
                                {
                                    icon: {src: "/Add.png", alt: "add icon"},
                                    title: "Uploaded student grades for 2022 semester 2",
                                    date: "Thu, 22, 2023",
                                },
                                {
                                    icon: {src: "/Create.png", alt: "edit icon"},
                                    title: "Edited student grade for UGR/SWE/0001/21",
                                    date: "Thu, 22, 2023",
                                },
                                {
                                    icon: {src: "/Add.png", alt: "add icon"},
                                    title: "Added student grade for UGR/SWE/0001/21",
                                    date: "Thu, 22, 2023",
                                },
                                {
                                    icon: {src: "/Minus.png", alt: "delete icon"},
                                    title: "Deleted student grade for UGR/SWE/0001/21",
                                    date: "Thu, 22, 2023",
                                },
                            ]}
                            label={"Recent Activities"}>
                        </ActivityBar>
                    ]
                }}

            />


        </>
    );
}