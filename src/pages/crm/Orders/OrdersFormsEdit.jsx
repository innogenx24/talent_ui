import React from "react";
import { Container, Grid, Paper, TextField, Button, Typography, MenuItem } from "@mui/material";

export const OrdersFormsEdit = () => {
  const orderData = {
    orderId: "ORD-1234",
    orderDate: "2022-01-01",
    quotationId: "1",
    clientId: "CLI-1234",
    selectJd: "jd1",
    startDate: "2022-01-15",
    endDate: "2022-01-31",
  };

  const clientData = {
    companyName: "ABC Corporation",
    contactPersonName: "John Doe",
    mailId: "john.doe@example.com",
    number: "1234567890",
  };

  const addressData = {
    addressLine1: "123, Main Street",
    landmark: "Near City Mall",
    pincode: "123456",
    country: "india",
    state: "state1",
    city: "city1",
  };

  const jobDescriptionData = {
    jobTitle: "Software Engineer",
    jdId: "JD-1234",
    candidateQty: "5",
    experience: "2-3 years",
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        {/* First Column - Order Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }} elevation={0}>
            <Typography variant="h6">Order Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Order ID"
                  fullWidth
                  margin="normal"
                  value={orderData.orderId}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Order Date"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={orderData.orderDate}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Quotation ID"
                  fullWidth
                  margin="normal"
                  value={orderData.quotationId}
                >
                  <MenuItem value="1">Quotation 1</MenuItem>
                  <MenuItem value="2">Quotation 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Client ID"
                  fullWidth
                  margin="normal"
                  value={orderData.clientId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Select JD"
                  fullWidth
                  margin="normal"
                  value={orderData.selectJd}
                >
                  <MenuItem value="jd1">JD 1</MenuItem>
                  <MenuItem value="jd2">JD 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Start Date"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={orderData.startDate}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End Date"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={orderData.endDate}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Second Column - Client Details & Other Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, marginBottom: 2 }} elevation={0}>
            <Typography variant="h6">Client Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Company Name"
                  fullWidth
                  margin="normal"
                  value={clientData.companyName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Contact Person Name"
                  fullWidth
                  margin="normal"
                  value={clientData.contactPersonName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Mail ID"
                  fullWidth
                  margin="normal"
                  value={clientData.mailId}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Number"
                  fullWidth
                  margin="normal"
                  value={clientData.number}
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ padding: 2 }} elevation={0}>
            <Typography variant="h6">Other Details</Typography>
            <TextField
              select
              label="Executive"
              fullWidth
              margin="normal"
            >
                        <MenuItem value="exec1">Executive 1</MenuItem>
          <MenuItem value="exec2">Executive 2</MenuItem>
        </TextField>
        <TextField
          label="Total"
          fullWidth
          margin="normal"
        />
      </Paper>
    </Grid>

    {/* Third Column - Address Information */}
    <Grid item xs={12} md={4}>
      <Paper sx={{ padding: 2 }} elevation={0}>
        <Typography variant="h6">Address Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              fullWidth
              margin="normal"
              value={addressData.addressLine1}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Landmark"
              fullWidth
              margin="normal"
              value={addressData.landmark}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Pincode"
              fullWidth
              margin="normal"
              value={addressData.pincode}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Country"
              fullWidth
              margin="normal"
              value={addressData.country}
            >
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="usa">USA</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="State"
              fullWidth
              margin="normal"
              value={addressData.state}
            >
              <MenuItem value="state1">State 1</MenuItem>
              <MenuItem value="state2">State 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="City"
              fullWidth
              margin="normal"
              value={addressData.city}
            >
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

    {/* Full-Width Row - Job Description */}
    <Grid item xs={12}>
      <Paper sx={{ padding: 2 }} elevation={0}>
        <Typography variant="h6">Job Description</Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Job Title"
              fullWidth
              margin="normal"
              value={jobDescriptionData.jobTitle}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="JD ID"
              fullWidth
              margin="normal"
              value={jobDescriptionData.jdId}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Candidate Qty"
              fullWidth
              margin="normal"
              value={jobDescriptionData.candidateQty}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Experience"
              fullWidth
              margin="normal"
              value={jobDescriptionData.experience}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>

    {/* Save Button Centered */}
    <Grid item xs={12} display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ px: 40 }}
      >
        Save
      </Button>
    </Grid>
  </Grid>
</Container>
);
};
export default OrdersFormsEdit;
