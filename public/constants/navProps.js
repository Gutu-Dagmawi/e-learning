export const navProps = {
    at_text: "@registrar",
    className: "main-nav",
    props: {
        groups: [
            {
                label: "Calender Management",
                buttons: [
                    {
                        text: "Academic Time Line",
                        img: "/Commercial.png",
                        props: {
                            to: "/academic-timeline"
                        },
                    },
                ],
            },
            {
                label: "Student Records",
                buttons: [
                    {
                        text: "Student Grades",
                        img: "/Grades.png",
                        props: {
                            to: "/student-grades"
                        },
                    },
                    {
                        text: "Course Eligibility",
                        img: "/Course%20Assign.png",
                        props: {
                            to: '/course-eligibility'
                        },
                    },
                    {
                        text: "Student Promotion",
                        img: "/Commercial.png",
                        props: {
                            to: '/student-promotion'
                        },
                    },
                ],
            },
            {
                label: "Student Financial Record",
                buttons: [
                    {
                        text: "Credit Hour Rate",
                        img: "/Dollar%20Coin.png",
                        props: {
                            to: "/credit-rates"
                        },
                    },
                    {
                        text: "Payment Information",
                        img: "/Online%20Payment.png",
                        props: {
                            to: "#"
                        },
                    },
                    {
                        text: "Logout",
                        img: "/Logout.png",
                        props: {
                            id: "logout-btn"
                            , to: "/"
                        },
                    },
                ],
            },
        ],
    },
};
