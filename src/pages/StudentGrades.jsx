import {navProps} from "../../public/constants/navProps.js";
import {Template} from "../templates/Template.jsx";
import FilterForm from "../components/FilterForm.jsx";
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from "../components/Button.jsx";

export function StudentGrades() {
    const path = useLocation().pathname;
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
                        <div className={"column-flex"}
                             style={{
                                 width: "70%",
                             }}
                             key={2}>
                            <FilterForm
                                text={"filter"}
                                icon={"/Tune.png"}
                                style={{
                                    marginBottom: "3px",
                                }}
                                button={"filter-btn-horizontal"}
                                to={"/student-grades/grades"}
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
                            <Outlet/>
                            {
                                path === "/student-grades/grades" ?
                                    <Link to={"/student-grades"}>
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
                                                <img src="/Submit.png" alt={"Save icon"}/>
                                            </div>
                                        </Button>
                                    </Link> : null
                            }
                        </div>,
                    ],
                }}
            />
        </>
    )
}