import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const QuotationTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "customer_name", label: "Customer Name" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, customer_name: "ABC Corp", amount: "$5,000", status: "Pending" },
    { id: 2, customer_name: "XYZ Ltd.", amount: "$12,000", status: "Approved" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Quotation List
      </Typography>
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default QuotationTable;
