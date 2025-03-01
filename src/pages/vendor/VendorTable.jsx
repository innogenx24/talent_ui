import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const VendorTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "vendor_name", label: "Vendor Name" },
    { id: "contact_person", label: "Contact Person" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
  ];

  const data = [
    { id: 1, vendor_name: "ABC Staffing", contact_person: "Michael Johnson", email: "michael@abcstaffing.com", phone: "123-456-7890" },
    { id: 2, vendor_name: "XYZ Recruitment", contact_person: "Sara Williams", email: "sara@xyzrecruitment.com", phone: "987-654-3210" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Vendor List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default VendorTable;
