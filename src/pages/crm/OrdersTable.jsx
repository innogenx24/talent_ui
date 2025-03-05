import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const OrdersTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "customer_name", label: "Customer Name" },
    { id: "order_date", label: "Order Date" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, customer_name: "ABC Corp", order_date: "2025-03-01", status: "Shipped" },
    { id: 2, customer_name: "XYZ Ltd.", order_date: "2025-03-02", status: "Processing" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Orders List
      </Typography>
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default OrdersTable;
