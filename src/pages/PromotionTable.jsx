import Table from "../components/Table.jsx";

export function PromotionTable() {
    return (
        <>
            <Table
                style={{
                    width: "88%",
                }}
                columnHeaders={[
                    "First Name",
                    "Last Name",
                    "Student ID",
                    "Level",
                    "Semester",
                ]}
                data={[
                    ["Nigus", "Solomon", "BITS/UGR/002/20", "1", "Semester 1"],
                    ["Ayalew", "Hidet", "BITS/UGR/002/20", "1", "Semester 1"],
                    ["Abebe", "Tadesse", "BITS/UGR/002/20", "1", "Semester 1"],
                ]}
            ></Table>

        </>
    )
}
