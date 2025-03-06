import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const RolesTable = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${API_URL}/roles`);
        console.log("API Response:", response.data); // Debugging API response

        const formattedRoles = response.data.map((role, index) => ({
          serial: index + 1,
          id: role.id,
          role_name: role.name,
          description: role.description || "N/A", // Assuming description exist in API
          status: role.active_status ? "Active" : "Inactive",
        }));

        console.log("Formatted Roles:", formattedRoles); // Debugging formatted data

        setRoles(formattedRoles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "role_name", label: "Role Name" },
    { id: "description", label: "description" },
    { id: "status", label: "Status" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Roles List
      </Typography>

      <DynamicTable columns={columns} data={roles} />
    </>
  );
};

export default RolesTable;
