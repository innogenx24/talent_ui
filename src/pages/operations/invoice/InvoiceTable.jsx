import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

const InvoiceTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "client_name", label: "Client Name" },
    { id: "date", label: "Date" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, client_name: "John Doe", date: "2024-02-10", amount: "$1500", status: "Paid" },
    { id: 2, client_name: "Jane Smith", date: "2024-02-15", amount: "$2200", status: "Pending" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Invoice List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default InvoiceTable;
