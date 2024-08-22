import "../src/styles/app.css";
import "../src/styles/card.css";
import "../src/styles/btn.css";
import "../src/styles/nav.css";
import "../src/styles/template.css";
import "../src/styles/table.css";
import "../src/styles/board.css";
import "../src/styles/authentication.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Authentication from "./pages/Authentication.jsx";
import {StudentPromotion} from "./pages/StudentPromotion.jsx";
import {StudentGrades} from "./pages/StudentGrades.jsx";
import {CourseEligibility} from "./pages/CourseEligibility.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";
import AcademicTimeline from "./pages/AcademicTimeline.jsx";
import TimelineTable from "./pages/Variant.jsx";
import {DateForm} from "./pages/DateForm.jsx";
import {CourseTable} from "./pages/CourseTable.jsx";
import {PromotionTable} from "./pages/PromotionTable.jsx";
import {Credit} from "./pages/Credit.jsx";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Authentication/>
        },
        {
            path: "/credit-rates",
            element: <Credit/>,
            children: [
                {
                    path: "set-rate",
                    element: <CourseTable/>
                }
            ]
        }
        ,
        {
            path: "/student-promotion",
            element: <StudentPromotion/>,
            children: [
                {
                    path: "status",
                    element: <PromotionTable/>
                }
            ]
        },
        {
            path: "/course-eligibility",
            element: <CourseEligibility/>,
            children: [
                {
                    path: "status",
                    element: <CourseTable/>
                }
            ]
        },
        {
            path: "/student-grades",
            element: <StudentGrades/>,
            children: [
                {
                    path: "grades",
                    element: <CourseTable/>
                }
            ]
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        },
        {
            path: "/academic-timeline",
            element: <AcademicTimeline/>,
            children: [
                {
                    path: "create-timeline",
                    element: <DateForm/>
                },
                {
                    path: "timelines",
                    element: <TimelineTable/>
                }
            ]

        }

    ]
)

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;
