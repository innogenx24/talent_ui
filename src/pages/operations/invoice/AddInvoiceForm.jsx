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

const AddInvoiceForm = () => {
  const [formData, setFormData] = useState({
    invoiceId: "",
    invoiceDate: "",
    orderId: "",
    jdId: "",
    startDate: "",
    endDate: "",
    companyName: "",
    contactPerson: "",
    mailId: "",
    number: "",
    paymentType: "Monthly Payment",
    tax: "",
    totalAmount: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    landmark: "",
    street: "",
    jobTitle1: "",
    jdId1: "",
    candidateQty1: "",
    experience1: "",
    jobTitle2: "",
    jdId2: "",
    candidateQty2: "",
    experience2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add Invoice Details
      </Typography>{" "}
      <Grid container spacing={2}>
        {/* Invoice Details */}
        <Grid item xs={12} md={4}>
          <Grid item xs={12}>
            <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
              <Typography variant="h6" gutterBottom>
                Invoice Details{" "}
              </Typography>
              <Grid container spacing={2}>
                {/* Left Side Fields */}
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

                {/* Right Side Fields */}
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
          </Grid>

          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Other Details{" "}
            </Typography>
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
          <Grid item xs={12}>
            <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
              <Typography variant="h6" gutterBottom>
                Client Details{" "}
              </Typography>
              <Grid container spacing={2}>
                {/* Left Side Fields */}
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
                    label="Contact Person Name"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>

                {/* Right Side Fields */}
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
          </Grid>

          <Grid item xs={12}>
            <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
              <Typography variant="h6" gutterBottom>
                Address Information{" "}
              </Typography>
              <Grid container spacing={2}>
                {/* Left Side Fields */}
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
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="India">India</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>State</InputLabel>
                    <Select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <MenuItem value="California">California</MenuItem>
                      <MenuItem value="Karnataka">Karnataka</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Right Side Fields */}
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
        </Grid>

        {/* Job Description */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
        >
          {" "}
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddInvoiceForm;
