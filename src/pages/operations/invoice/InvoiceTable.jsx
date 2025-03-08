import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from localStorage
  
        const response = await axios.get(`${API_URL}/invoice-details`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token in headers
          },
        });
  
        const formattedInvoices = response.data.map((invoice, index) => {
          // Calculate total candidate_qty and collect jd_ids
          let totalCandidateQty = 0;
          let jdIds = [];
  
          if (invoice.job_description && Array.isArray(invoice.job_description)) {
            invoice.job_description.forEach((job) => {
              totalCandidateQty += job.candidate_qty;
              jdIds.push(job.jd_id);
            });
          }
          
  
          return {
            serial: index + 1,
            invoice_id: invoice.invoice_id,
            company_name: invoice.company_name,
            start_date: invoice.start_date,
            end_date: invoice.end_date,
            contact_person: invoice.contact_person,
            email: invoice.email,
            phone_number: invoice.phone_number,
            total_amount: `Rs.${parseFloat(invoice.total_amount).toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 2,
              }
            )}`,
            payment_type: invoice.payment_type,
  
            // New fields
            total_candidate_qty: totalCandidateQty,
            jd_ids: jdIds.join(", "), // Convert array to string
          };
        });
  
        setInvoices(formattedInvoices);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
  
    fetchInvoices();
  }, []);
  

  const columns = [
    { id: "serial", label: "No." },
    { id: "jd_ids", label: "JD IDs" },
    { id: "company_name", label: "Company Name" },
    { id: "contact_person", label: "Client Name" },
    { id: "email", label: "Email" },
    { id: "phone_number", label: "Phone Number" },
    { id: "start_date", label: "Start Date" },
    { id: "end_date", label: "End Date" },
    { id: "total_candidate_qty", label: "Total Candidates" },
    { id: "payment_type", label: "Payment Type" },
    { id: "total_amount", label: "Total Amount" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Invoice List
      </Typography>

      <DynamicTable columns={columns} data={invoices} />
    </>
  );
};

export default InvoiceTable;
