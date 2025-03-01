import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const SettingsTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "setting_name", label: "Setting Name" },
    { id: "value", label: "Value" },
    { id: "updated_at", label: "Last Updated" },
  ];

  const data = [
    { id: 1, setting_name: "Site Title", value: "Talent Management System", updated_at: "2024-03-01" },
    { id: 2, setting_name: "Default Role", value: "Recruiter", updated_at: "2024-02-25" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        System Settings
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default SettingsTable;
