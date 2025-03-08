import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/users`, {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        })
  
        const formattedUsers = response.data.map((user, index) => ({
          serial: index + 1,
          id: user.id, 
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          role: user.role,
          department:user.department,
          joining_date:user.joining_date,
          phone_number:user.phone_number,
          status: user.active_status ? "Active" : "Inactive",
        }));
  
  
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchUsers();
  }, []);
  

  const columns = [
    { id: "serial", label: "No." },
    { id: "name", label: "Full Name" },
    { id: "role", label: "Role" },
    { id: "department", label: "Department" },
    { id: "email", label: "Email" },
    { id: "phone_number", label: "Phone Number" },
    { id: "joining_date", label: "Joining Date" },

  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Users List
      </Typography>

      <DynamicTable columns={columns} data={users} />
    </>
  );
};

export default UsersTable;
