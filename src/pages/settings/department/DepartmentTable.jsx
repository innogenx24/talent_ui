import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/department`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const formattedData = response.data.map((item, index) => ({
          serial: index + 1,
          id: item.id,
          department_name: item.department_name,
          description: item.description || "N/A",
          status: item.active_status ? "Active" : "Inactive",
        }));

        setDepartments(formattedData);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "department_name", label: "Department Name" },
    { id: "description", label: "Description" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Department List
      </Typography>

      <DynamicTable columns={columns} data={departments} />
    </>
  );
};

export default DepartmentTable;
