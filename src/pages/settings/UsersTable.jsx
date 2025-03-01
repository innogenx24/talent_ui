import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const UsersTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "role", label: "Role" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, name: "Ajay Kumar", email: "ajay@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Sonia Sharma", email: "sonia@example.com", role: "Recruiter", status: "Inactive" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Users List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default UsersTable;
