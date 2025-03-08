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
        const token = localStorage.getItem("token"); 

        const response = await axios.get(`${API_URL}/roles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const formattedRoles = response.data.map((role, index) => ({
          serial: index + 1,
          id: role.id,
          role_name: role.name,
          department: role.department,
          description: role.description || "N/A",
          status: role.active_status ? "Active" : "Inactive",
        }));

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
    { id: "department", label: "Department" },
    { id: "description", label: "Description" },
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
