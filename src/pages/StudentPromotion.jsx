import {Template} from "../templates/Template.jsx";
import {navProps} from "../../public/constants/navProps.js";
import FilterForm from "../components/FilterForm.jsx";
import {Outlet} from "react-router-dom";

export function StudentPromotion() {
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
                                to={"/student-promotion/status"}
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
                        </div>,
                    ],
                }}
            />
        </>
    )
}
