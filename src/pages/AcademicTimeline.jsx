import {Template} from "../templates/Template.jsx";
import FilterForm from "../components/FilterForm.jsx";
import {navProps} from "../../public/constants/navProps.js";
import Button from "../components/Button.jsx";
import {Link, Outlet, useLocation} from "react-router-dom";


export default function AcademicTimeline() {
    const path = useLocation().pathname;
    return (
        <>
            <Template
                navProps={navProps}
                boardProps={{
                    profile: {
                        src: "../public/student.png",
                        alt: "student picture",
                        name: "Example Student",
                        pageTag: "registrar office",
                        pageTitle: "Registrar Dashboard",
                    },
                    display: "flex",
                    children: [
                        <FilterForm
                            key={"filterForm"}
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
                                },]}
                        />,
                        <div
                            key={"outlet"}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {(path === "/academic-timeline") || (path === "/academic-timeline/timelines") ?
                                <Link to={"create-timeline"}>
                                    <Button
                                        style={{
                                            width: "195px",
                                            margin: "2rem 0 1.5rem 70%",
                                        }}
                                        className={"default-btn green-button"}
                                    >
                                        <div
                                            className={"btn-content"}
                                        >
                                            <span>Create Timeline</span>
                                            <img alt={"create icon"} src="/Add_White.png"/>
                                        </div>
                                    </Button>

                                </Link>
                                : path === "/academic-timeline/update-timeline" ?
                                    <h1
                                        style={{
                                            margin: "2rem 0 1.5rem 80%",
                                            fontFamily: "Poppins",
                                            fontWeight: "400",
                                            color: "#605f5f",
                                            fontSize: "25px",
                                        }}
                                    >Update</h1>
                                    :
                                    <h1
                                        style={{
                                            margin: "2rem 0 1.5rem 80%",
                                            fontFamily: "Poppins",
                                            fontWeight: "400",
                                            color: "#605f5f",
                                            fontSize: "25px",
                                        }}
                                    >New</h1>
                            }

                            <div>
                                <Outlet/>
                            </div>

                        </div>
                    ]
                }}>
            </Template>
        </>
    );
}
