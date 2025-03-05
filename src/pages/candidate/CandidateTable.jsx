import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const CandidateTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "name", label: "Candidate Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
    { id: "position", label: "Applied Position" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890", position: "Software Engineer" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "987-654-3210", position: "Data Analyst" },
    { id: 3, name: "Alice Johnson", email: "alicej@example.com", phone: "555-123-4567", position: "Product Manager" },
    { id: 4, name: "Bob Brown", email: "bobbrown@example.com", phone: "444-987-6543", position: "UX Designer" },
    { id: 5, name: "Charlie Davis", email: "charlied@example.com", phone: "222-345-6789", position: "Marketing Specialist" },
    { id: 6, name: "Diana White", email: "dianaw@example.com", phone: "333-789-0123", position: "HR Manager" },
    { id: 7, name: "Ethan Miller", email: "ethanm@example.com", phone: "777-654-9876", position: "DevOps Engineer" },
    { id: 8, name: "Fiona Lee", email: "fionalee@example.com", phone: "666-222-1111", position: "Business Analyst" },
    { id: 9, name: "George Wilson", email: "georgew@example.com", phone: "888-777-6666", position: "Sales Manager" },
    { id: 10, name: "Hannah Scott", email: "hannahs@example.com", phone: "999-888-7777", position: "QA Engineer" },
    { id: 11, name: "Ian Clark", email: "ianclark@example.com", phone: "101-202-3030", position: "Cybersecurity Analyst" },
    { id: 12, name: "Julia Adams", email: "juliaa@example.com", phone: "404-505-6060", position: "Content Writer" },
    { id: 13, name: "Kevin Lewis", email: "kevinl@example.com", phone: "707-808-9090", position: "Software Architect" },
    { id: 14, name: "Laura Martinez", email: "lauram@example.com", phone: "111-222-3333", position: "Recruiter" },
    { id: 15, name: "Michael Taylor", email: "michaelt@example.com", phone: "444-555-6666", position: "Full Stack Developer" },
    { id: 16, name: "Nancy Rodriguez", email: "nancy@example.com", phone: "777-888-9999", position: "Project Manager" },
    { id: 17, name: "Oscar Evans", email: "oscare@example.com", phone: "123-789-4560", position: "AI Engineer" },
    { id: 18, name: "Paula Harris", email: "paulah@example.com", phone: "333-222-1110", position: "Graphic Designer" },
    { id: 19, name: "Quentin Young", email: "quentiny@example.com", phone: "555-666-7770", position: "SEO Specialist" },
    { id: 20, name: "Rachel King", email: "rachelk@example.com", phone: "999-000-1111", position: "Customer Support" }
];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Candidate List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default CandidateTable;
