import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const BranchesTable = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${API_URL}/branch`);
        console.log("API Response:", response.data); // Debugging API response

        const formattedBranches = response.data.map((branch, index) => ({
          serial: index + 1,
          id: branch.id,
          branch_name: branch.branch_name,
          address_details: `${branch.address}, ${branch.city}, ${branch.state}, ${branch.country} - ${branch.pincode}`,
          status: branch.active_status ? "Active" : "Inactive",
        }));

        console.log("Formatted Branches:", formattedBranches); // Debugging formatted data

        setBranches(formattedBranches);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "branch_name", label: "Branch Name" },
    { id: "address_details", label: "Address" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Branches List
      </Typography>

      <DynamicTable columns={columns} data={branches} />
    </>
  );
};

export default BranchesTable;
