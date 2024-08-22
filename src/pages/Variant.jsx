import Table from "../components/Table.jsx";

export default function TimelineTable() {
    return (
        <>
            <Table
                style={{
                    margin: "10px auto",
                    width: "80%",
                }}
                columnHeaders={[
                    "Registration Start",
                    "Mid-Exam Start",
                    "Final Exam Start",
                    "Semester End",
                ]}
                data={[
                    ["2023-01-01", "2023-01-01", "2023-01-01", "2023-01-01"],
                    ["2023-01-01", "2023-01-01", "2023-01-01", "2023-01-01"],
                ]}
            ></Table>
        </>
    )
}
