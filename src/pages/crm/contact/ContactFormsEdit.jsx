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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ContactFormsEdit = () => {
  const [addresses, setAddresses] = useState([{}]);
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <Grid container spacing={3}>
        {/* Client Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Client Details:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Client ID*" value="123456" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date*"
                    defaultValue={dayjs()}
                    format="DD-MM-YYYY"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Industry</InputLabel>
                  <Select defaultValue="tech">
                    <MenuItem value="tech">Tech</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Company Name" value="ABC Corp" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name*" value="John" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name*" value="Doe" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email ID*" value="john.doe@example.com" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number*" value="9876543210" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Address:
            </Typography>
            {addresses.map((_, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Pincode" value="123456" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select defaultValue="India">
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select defaultValue="Maharashtra">
                      <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>City</InputLabel>
                    <Select defaultValue="Mumbai">
                      <MenuItem value="Mumbai">Mumbai</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Street" value="123, Main Street" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Landmark" value="Near Park" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Add Address" value="Apartment 404, Tower B" multiline rows={3} />
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Grid>

        {/* Other Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Other Information:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select defaultValue="Referral">
                    <MenuItem value="Referral">Referral</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Parent Client</InputLabel>
                  <Select defaultValue="Client X">
                    <MenuItem value="Client X">Client X</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Fax" value="123-456-7890" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Website" value="https://www.example.com" />
              </Grid>
            </Grid>
          </Paper>
          {/* Active Status */}
          <Paper sx={{ mt: 2, p: 2, display: "flex", alignItems: "center", gap: 1, borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Active Status*</Typography>
            <Switch defaultChecked />
          </Paper>
        </Grid>
      </Grid>
      {/* Save Button */}
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Button variant="contained" size="large" sx={{ px: 30 }}>
          Save
        </Button>
      </Grid>
    </Box>
  );
};

export default ContactFormsEdit;
