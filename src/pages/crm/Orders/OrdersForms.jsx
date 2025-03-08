import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";

export const OrdersForms = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        {/* First Column - Order Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }} elevation={0}>
            <Typography variant="h6">Order Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Order ID" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Order Date"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Quotation ID"
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="1">Quotation 1</MenuItem>
                  <MenuItem value="2">Quotation 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField label="Client ID" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={12}>
                <TextField select label="Select JD" fullWidth margin="normal">
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End Date"
                  fullWidth
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
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
                <TextField label="Company Name" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Contact Person Name"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Mail ID" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Number" fullWidth margin="normal" />
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ padding: 2 }} elevation={0}>
            <Typography variant="h6">Other Details</Typography>
            <TextField select label="Executive" fullWidth margin="normal">
              <MenuItem value="exec1">Executive 1</MenuItem>
              <MenuItem value="exec2">Executive 2</MenuItem>
            </TextField>
            <TextField label="Total" fullWidth margin="normal" />
          </Paper>
        </Grid>

        {/* Third Column - Address Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }} elevation={0}>
            <Typography variant="h6">Address Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Address Line 1" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Landmark" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Pincode" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={6}>
                <TextField select label="Country" fullWidth margin="normal">
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField select label="State" fullWidth margin="normal">
                  <MenuItem value="state1">State 1</MenuItem>
                  <MenuItem value="state2">State 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField select label="City" fullWidth margin="normal">
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
                <TextField label="Job Title" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="JD ID" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Candidate Qty" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Experience" fullWidth margin="normal" />
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
            sx={{ px: 40 }} // Adds padding to the left and right
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
