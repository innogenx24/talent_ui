import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        console.log("API Response:", response.data); // Check if API data is coming
  
        const formattedUsers = response.data.map((user, index) => ({
          serial: index + 1,
          id: user.id, 
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          role: user.role,
          status: user.active_status ? "Active" : "Inactive",
        }));
  
        console.log("Formatted Users:", formattedUsers); // Check if data is formatted correctly
  
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchUsers();
  }, []);
  

  const columns = [
    { id: "serial", label: "No." },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "role", label: "Role" },
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
