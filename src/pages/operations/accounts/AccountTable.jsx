import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const AccountTable = () => {
  const [accountDetails, setAccountDetails] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {

        const response = await axios.get(`${API_URL}/account-details`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const formattedData = response.data.map((account, index) => ({
          serial: index + 1,
          id: account.id,
          candidate_name: account.candidate_name,
          candidate_type: account.candidate_type,
          doj: account.doj,
          title_designation: account.title_designation,
          company: account.company,
          department: account.department,
          category: account.category,
          vertical_head: account.vertical_head,
          client: account.client,
          project_client_start_date: account.project_client_start_date,
          location: account.location,
          total_ctc: account.total_ctc,
          salary: account.salary,
          professional_charges: account.professional_charges,
          billing_amount: account.billing_amount,
          gm_percentage: `${account.gm_percentage}%`,
          remarks: account.remarks,
          po_end: account.po_end,
        }));

        setAccountDetails(formattedData);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);
  
  const columns = [
    { id: "serial", label: "No." },
    { id: "candidate_name", label: "Candidate Name" },
    { id: "candidate_type", label: "Candidate Type" },
    { id: "doj", label: "Date of Joining" },
    { id: "title_designation", label: "Designation" },
    { id: "company", label: "Company" },
    { id: "department", label: "Department" },
    { id: "category", label: "Category" },
    { id: "client", label: "Client" },
    { id: "project_client_start_date", label: "Project Start Date" },
    { id: "location", label: "Location" },
    { id: "total_ctc", label: "Total CTC" },
    { id: "salary", label: "Salary" },
    { id: "professional_charges", label: "Professional Charges" },
    { id: "billing_amount", label: "Billing Amount" },
    { id: "gm_percentage", label: "GM%" },
    { id: "remarks", label: "Remarks" },
    { id: "po_end", label: "PO End Date" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Account Details List
      </Typography>

      <DynamicTable columns={columns} data={accountDetails} />
    </>
  );
};

export default AccountTable;
