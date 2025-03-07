import React, { useState } from "react";
import {
  TextField,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Paper,
  Button,
  Switch,
  Container,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Add, Remove, Delete } from "@mui/icons-material";

export const OrdersFormsEdit = () => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h4" sx={{ mb: 3 }}>Orders Form Edit</Typography>
      <Grid container spacing={3}>
        {/* First Column - Order Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Order Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Order ID" fullWidth margin="normal" placeholder="ORD123" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Order Date" fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} defaultValue={dayjs().format('YYYY-MM-DD')} />
              </Grid>
              <Grid item xs={6}>
                <TextField select label="Quotation ID" fullWidth margin="normal" defaultValue="1">
                  <MenuItem value="1">Quotation 1</MenuItem>
                  <MenuItem value="2">Quotation 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField label="Client ID" fullWidth margin="normal" placeholder="CL123" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Second Column - Client Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">Client Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Company Name" fullWidth margin="normal" placeholder="ABC Corp" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Contact Person Name" fullWidth margin="normal" placeholder="John Doe" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Third Column - Address Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Address Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Address Line 1" fullWidth margin="normal" placeholder="123 Main St" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Pincode" fullWidth margin="normal" placeholder="123456" />
              </Grid>
              <Grid item xs={6}>
                <TextField select label="Country" fullWidth margin="normal" defaultValue="india">
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Save Button Centered */}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" size="large">Save Order</Button>
      </Grid>
    </Container>
  );
};

export const QuotationsFormEdit = () => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h4" sx={{ mb: 3 }}>Quotations Form Edit</Typography>
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Quotation Details:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Quotation ID" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="date" label="Quotation Date" variant="outlined" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Company Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Project Type</InputLabel>
              <Select defaultValue="Procurement" label="Project Type">
                <MenuItem value="Procurement">Procurement</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="date" label="Procurement Start Date" variant="outlined" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="date" label="Procurement End Date" variant="outlined" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" multiline rows={3} variant="outlined" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OrdersFormsEdit;
