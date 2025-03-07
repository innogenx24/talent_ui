import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

const ContactTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "contact_name", label: "Contact Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
  ];

  const data = [
    { id: 1, contact_name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    { id: 2, contact_name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
    { id: 3, contact_name: "Michael Brown", email: "michael.brown@example.com", phone: "555-678-1234" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Contact List
      </Typography>
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default ContactTable;
