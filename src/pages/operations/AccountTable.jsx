import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const AccountTable = () => {
  const columns = [
    { id: "account_id", label: "Account ID" },
    { id: "account_name", label: "Account Name" },
    { id: "account_type", label: "Account Type" },
    { id: "balance", label: "Balance" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { account_id: "ACC001", account_name: "Main Account", account_type: "Savings", balance: "$5000", status: "Active" },
    { account_id: "ACC002", account_name: "Business Account", account_type: "Checking", balance: "$12000", status: "Inactive" },
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
