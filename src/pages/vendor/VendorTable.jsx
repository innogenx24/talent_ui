import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import API_URL from "../../api/Api_url";
import DynamicTable from "../../components/table-format/DynamicTable";

const VendorTable = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_URL}/vendors`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const formattedVendors = response.data.map((vendor, index) => ({
          serial: index + 1,
          id: vendor.id,
          vendor_name: vendor.vendor_name,
          vendor_owner: vendor.vendor_owner,
          phone_number: vendor.phone_number,
          email: vendor.email,
          address_details: `${vendor.city}, ${vendor.state}, ${vendor.country} - ${vendor.pin_code}`,
          status: vendor.active_status ? "Active" : "Inactive",
        }));


        setVendors(formattedVendors);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const columns = [
    { id: "serial", label: "No." },
    { id: "vendor_name", label: "Vendor Name" },
    { id: "vendor_owner", label: "Vendor Owner" },
    { id: "phone_number", label: "Phone Number" },
    { id: "email", label: "Email" },
    { id: "address_details", label: "Address" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Vendors List
      </Typography>

      <DynamicTable columns={columns} data={vendors} />
    </>
  );
};

export default VendorTable;
