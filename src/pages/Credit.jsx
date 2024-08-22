import {navProps} from "../../public/constants/navProps.js";
import {Template} from "../templates/Template.jsx";
import FilterForm from "../components/FilterForm.jsx";
import {Outlet} from "react-router-dom";

export function Credit() {
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
                            style={{
                                height: "45%",
                                marginTop: "4%",

                            }}
                            key="1"
                            to={"/credit-rates/set-rate"}
                            icon={"../public/go%20back.png"}
                            text={"Set Rate"}
                            formHeader={"Credit Hour Rate"}
                            orientation={"vertical"}
                            selectors={[
                                {
                                    selected: "undergraduate",
                                    options: ["Graduate"],
                                    name: "program",
                                    value: "Select Program",
                                },
                                {
                                    selected: "1230",
                                    options: ["2678"],
                                    name: "per credit hour",
                                    value: "amount",
                                },
                                {
                                    selected: "ETB",
                                    options: ["USD", "EUR"],
                                    name: "currency",
                                    value: "select currency",
                                },
                            ]}
                        ></FilterForm>,
                        <div
                            key={"2"}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                            }}
                        >
                            <Outlet/>
                        </div>,
                    ],
                }}

            />
        </>
    )
}
