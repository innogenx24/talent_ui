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

const ClientFormEdit = () => {
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
                <TextField fullWidth label="Client ID*" value="123456" disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date*"
                    value={dayjs()}
                    format="DD-MM-YYYY"
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Industry</InputLabel>
                  <Select label="Industry" value="tech">
                    <MenuItem value="tech">Tech</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Company / Institute Name" value="Dummy Corp" />
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
                <TextField fullWidth label="Phone Number*" value="123-456-7890" />
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
                  <TextField fullWidth label="Pincode" value="123456" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select label="Country" value="India">
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  </FormControl>
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
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Follow up Person*</InputLabel>
                  <Select label="Follow up Person" value="">
                    <MenuItem value="">Select</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select label="Source" value="Website">
                    <MenuItem value="Website">Website</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Website" value="https://dummycorp.com" />
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ mt: 2, p: 2, borderRadius: 2 }} elevation={0}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Control:
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Active Status*
                </Typography>
                <Switch defaultChecked />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" size="large" sx={{ px: 10 }}>
          Save Changes
        </Button>
      </Grid>
    </Box>
  );
};

export default ClientFormEdit;
