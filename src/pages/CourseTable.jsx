import Table from "../components/Table.jsx";
import {Selector} from "../components/Form.jsx";
import {useLocation} from "react-router-dom";

export function CourseTable() {
    const path = useLocation().pathname;
    let selector;
    let columnHeaders;
    let data;

    if (path === "/course-eligibility/status") {
        selector =
            <Selector
                className={"eligibility-selector"}
                selected={"-"}
                options={["Eligible", "Not Eligible"]}/>
        columnHeaders = [
            "First Name",
            "Last Name",
            "Student Id",
            "Eligibility",
        ]
        data = [
            [
                "John",
                "Doe",
                "BITS/UGR/0115/21",
                selector,
            ],
            [
                "Nathnael",
                "Alemu",
                "BITS/UGR/0115/21",
                selector,
            ],
            [
                "Yohannes",
                "Alemu",
                "BITS/UGR/0115/21",
                selector,
            ],
            [
                "Mekdes",
                "Alemu",
                "BITS/UGR/0115/21",
                selector,
            ],
            [
                "Yohannes",
                "Alemu",
                "BITS/UGR/0115/21",
                selector,
            ],

        ]
    } else if (path === "/student-grades/grades") {
        selector = <Selector
            className={"grade-selector"}
            selected={"-"}
            options={["A", "B", "C", "D", "E", "F"]}
        ></Selector>
        columnHeaders = [
            "First Name",
            "Last Name",
            "Course Code",
            "Course Title",
            "Credit Hours",
            "Grade",
            "Status",
            "Action",
        ]
        data = [
            [
                "John",
                "Doe",
                "MATH 101",
                "Mathematics",
                "3",
                "A",
                "Complete",
                selector,
            ],
            [
                "Jane",
                "Doe",
                "PHYS 101",
                "Physics",
                "3",
                "B",
                "Complete",
                selector
            ],
            [
                "kaldane",
                "Yimut",
                "Philosophy 101",
                "Logic",
                "3",
                "A",
                "Complete",
                selector
            ],
            [
                "Jemberu",
                "Demeke",
                "Math 501",
                "Linear Algebra",
                "3",
                "B",
                "Complete",
                selector
            ],
            [
                "Shibeshi",
                "Chegerew",
                "CS 101",
                "Intro To Computer Systems",
                "3",
                "A",
                "Complete",
                selector
            ],
        ]
    } else if (path === "/credit-rates/set-rate") {
        columnHeaders = [
            "Program",
            "Amount",
            "Currency",
        ]
        data = [
            [
                "Undergraduate",
                "1230",
                "ETB",
            ],
            [
                "Graduate",
                "2678",
                "ETB",
            ]
        ]
    }

    return (
        <>
            <Table
                style={{
                    width: `${path === "/credit-rates/set-rate" ? "60%" : "88%"}`,
                    margin: `${path === "/credit-rates/set-rate" ? "110px 0 0 0" : "0 0 20px 62px"}`,
                }}
                columnHeaders={columnHeaders}
                data={data}
                key={2}
            ></Table>
        </>
    )
}
