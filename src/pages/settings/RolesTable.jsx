import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const RolesTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "role_name", label: "Role Name" },
    { id: "permissions", label: "Permissions" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, role_name: "Admin", permissions: "Full Access", status: "Active" },
    { id: 2, role_name: "Recruiter", permissions: "Limited Access", status: "Active" },
    { id: 3, role_name: "Manager", permissions: "View & Edit", status: "Inactive" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Roles List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default RolesTable;
