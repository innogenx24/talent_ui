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
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ContactForms = () => {
  const [addresses, setAddresses] = useState([{}]);

  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Grid container spacing={3}>
        {/* Client Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }} elevation={0}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Client Details:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Client ID*" placeholder="Enter User ID" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date*"
                    defaultValue={dayjs()}
                    format="DD-MM-YYYY"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Industry</InputLabel>
                  <Select label="Industry" defaultValue="">
                    <MenuItem value="" disabled>Select Industry</MenuItem>
                    <MenuItem value="tech">Tech</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Company / Institute Name" placeholder="Enter Company Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name*" placeholder="Enter First Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name*" placeholder="Enter Last Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email ID*" placeholder="Enter Email ID" type="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number*" placeholder="Enter Phone Number" type="tel" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }} elevation={0}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Address:
            </Typography>
            {addresses.map((_, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Pincode" placeholder="Enter Pincode" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select label="Country" defaultValue="">
                      <MenuItem value="">Select Country</MenuItem>
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select label="State" defaultValue="">
                      <MenuItem value="">Select State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>City</InputLabel>
                    <Select label="City" defaultValue="">
                      <MenuItem value="">Select City</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Street" placeholder="Enter Address" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Landmark" placeholder="Enter Landmark" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Add Address" placeholder="Enter Additional Address" multiline rows={3} />
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Grid>

        {/* Other Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }} elevation={0}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Other Information:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select label="Source" defaultValue="">
                    <MenuItem value="">Select Source</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Parent Client</InputLabel>
                  <Select label="Parent Client" defaultValue="">
                    <MenuItem value="">Select Parent Client</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fax" placeholder="Enter Fax" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Website" placeholder="Enter Website Link" />
              </Grid>
            </Grid>
          </Paper>

          {/* Active Status */}
          <Paper sx={{ mt: 2, p: 2, display: "flex", alignItems: "center", gap: 1, borderRadius: 2 }} elevation={0}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Active Status*</Typography>
            <Switch defaultChecked />
          </Paper>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Grid container justifyContent="center" sx={{ mt: 20 }}>
  <Button variant="contained" size="large" sx={{ px: 30 }}>
    Save
  </Button>
</Grid>

    </Box>
  );
};

export default ContactForms;
