import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

const EditInvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceId: "INV-1001",
    invoiceDate: "2024-09-12",
    orderId: "ORD-5678",
    jdId: "JD-1257 | JD-1258",
    startDate: "2024-08-14",
    endDate: "2025-08-14",
    companyName: "ABC Pvt Ltd",
    contactPerson: "John Doe",
    mailId: "johndoe@example.com",
    number: "+91 9876543210",
    paymentType: "Monthly Payment",
    tax: "18%",
    totalAmount: "5000",
    pincode: "560001",
    country: "India",
    state: "Karnataka",
    city: "Bangalore",
    landmark: "Near MG Road",
    street: "Church Street",
    jobTitle1: "Software Engineer",
    jdId1: "JD-5001",
    candidateQty1: "2",
    experience1: "3 Years",
    jobTitle2: "UI/UX Designer",
    jdId2: "JD-5002",
    candidateQty2: "1",
    experience2: "2 Years",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "100%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Edit Invoice Details
      </Typography>

      <Grid container spacing={2}>
        {/* Invoice Details */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6">Invoice Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Invoice ID"
                  name="invoiceId"
                  value={formData.invoiceId}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Order ID"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Invoice Date"
                  name="invoiceDate"
                  type="date"
                  value={formData.invoiceDate}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="JD ID"
                  name="jdId"
                  value={formData.jdId}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          {/* Payment Details */}
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2} mt={2}>
            <Typography variant="h6">Other Details</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Payment Type</InputLabel>
              <Select
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
              >
                <MenuItem value="Monthly Payment">Monthly Payment</MenuItem>
                <MenuItem value="One-Time Payment">One-Time Payment</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Tax</InputLabel>
              <Select name="tax" value={formData.tax} onChange={handleChange}>
                <MenuItem value="9%">9%</MenuItem>
                <MenuItem value="18%">18%</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Total Amount"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Grid>

        {/* Client Details */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6">Client Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Contact Person"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Mail ID"
                  name="mailId"
                  value={formData.mailId}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Box>

          {/* Address Information */}
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2} mt={2}>
            <Typography variant="h6">Address Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  margin="normal"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="California">California</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Job Description */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2} sx={{ width: { xs: "100%", md: "180%" } }}>
            <Typography variant="h6" gutterBottom>
              Job Description{" "}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="jobTitle1"
                  value={formData.jobTitle1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="JD ID"
                  name="jdId1"
                  value={formData.jdId1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Candidate Qty"
                  name="candidateQty1"
                  value={formData.candidateQty1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="experience1"
                  value={formData.experience1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="jobTitle2"
                  value={formData.jobTitle2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="JD ID"
                  name="jdId2"
                  value={formData.jdId2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Candidate Qty"
                  name="candidateQty2"
                  value={formData.candidateQty2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Experience"
                  name="experience2"
                  value={formData.experience2}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box textAlign="center" mt={3}>
        <Button variant="contained" color="primary" size="large">
          Update Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default EditInvoiceForm;
