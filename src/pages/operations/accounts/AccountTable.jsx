import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

const AccountTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "account_name", label: "Account Name" },
    { id: "account_type", label: "Account Type" },
    { id: "balance", label: "Balance" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, account_name: "Main Account", account_type: "Savings", balance: "$5000", status: "Active" },
    { id: 2, account_name: "Business Account", account_type: "Checking", balance: "$12000", status: "Inactive" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Account List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default AccountTable;
