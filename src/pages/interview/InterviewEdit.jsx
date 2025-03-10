import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const InterviewEdit = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Top-right button */}
      <Grid container justifyContent="flex-end">
        <Button variant="contained" sx={{ mb: 2 }}>
          Update Interview
        </Button>
      </Grid>

      <Grid container spacing={3}>
        {/* Left Column: Interview Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Interview Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Interview ID*" value="INT-12345" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date*"
                    value={dayjs("2025-03-10")}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Interview Person*</InputLabel>
                  <Select value="Person1">
                    <MenuItem value="Person1">Person 1</MenuItem>
                    <MenuItem value="Person2">Person 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Interview Company Name"
                  value="Tech Solutions Inc."
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Candidate ID*" value="CAND-56789" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Interview Type*</InputLabel>
                  <Select value="Online">
                    <MenuItem value="Online">Online</MenuItem>
                    <MenuItem value="Offline">Offline</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Meeting Link - Full Width */}
              <Grid item xs={12}>
                <TextField
                  label="Meeting Link*"
                  value="https://meet.google.com/xyz"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Interview Start Date & Time*"
                    value={dayjs("2025-03-15T10:00")}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Interview End Date & Time*"
                    value={dayjs("2025-03-15T11:00")}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Middle Column: Candidate Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Candidate Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Candidate Name"
                  value="John Doe"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number*"
                  value="+1 123-456-7890"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email ID"
                  value="johndoe@example.com"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right Column: Interview Status & Control */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Interview Status
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select value="Scheduled">
                <MenuItem value="Scheduled">Scheduled</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Control
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Active Status*
                </Typography>
              </Grid>
              <Grid item>
                <Switch defaultChecked />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom Update Button - Centered & Padded */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" size="large" sx={{ px: 40, }}>
          Save The Changes
        </Button>
      </Box>
    </Box>
  );
};
