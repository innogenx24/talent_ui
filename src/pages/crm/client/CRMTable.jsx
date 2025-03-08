import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const CRMTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/client-details`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const formattedClients = response.data.map((client, index) => ({
          serial: index + 1,
          id: client.id,
          company_name: client.company_name,
          contact_name: `${client.first_name} ${client.last_name}`,
          email: client.email,
          phone_number: client.phone_number,
          industry: client.industry,
          location: `${client.city}`,
          status: client.active_status ? "Active" : "Inactive",
        }));

        setClients(formattedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "company_name", label: "Company Name" },
    { id: "contact_name", label: "Contact Person" },
    { id: "email", label: "Email" },
    { id: "phone_number", label: "Phone Number" },
    { id: "industry", label: "Industry" },
    { id: "location", label: "Location" },
    { id: "status", label: "Status" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Client Details List
      </Typography>

      <DynamicTable columns={columns} data={clients} />
    </>
  );
};

export default CRMTable;
