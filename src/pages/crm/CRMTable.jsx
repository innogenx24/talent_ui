import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const CRMTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "customer_name", label: "Customer Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, customer_name: "Michael Scott", email: "michael@dundermifflin.com", phone: "123-456-7890", status: "Active" },
    { id: 2, customer_name: "Pam Beesly", email: "pam@dundermifflin.com", phone: "987-654-3210", status: "Pending" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        CRM Customer List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default CRMTable;
