import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";

const EditBranchForm = () => {
  // Dummy data for existing branch
  const [branchId, setBranchId] = useState("BR-1023");
  const [branchName, setBranchName] = useState("Main Office");
  const [pincode, setPincode] = useState("560001");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Karnataka");
  const [city, setCity] = useState("Bangalore");
  const [address, setAddress] = useState("123, MG Road, Bangalore");
  const [activeStatus, setActiveStatus] = useState(true);

  const handleUpdateBranch = () => {
    console.log({
      branchId,
      branchName,
      pincode,
      country,
      state,
      city,
      address,
      activeStatus,
    });
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "100%", md: "80%" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, justifyContent: "center" }}>
        
        {/* Branch Details */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "40%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Branch Details:
            </Typography>

            <TextField fullWidth label="Branch ID*" value={branchId} disabled />
            <TextField
              fullWidth
              label="Branch Name*"
              placeholder="Enter Branch Name"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />
          </CardContent>
        </Card>

        {/* Address Section */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "40%" }, p: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Address:
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pincode*"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6}>
                <Select fullWidth value={state} onChange={(e) => setState(e.target.value)}>
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={6}>
                <Select fullWidth value={city} onChange={(e) => setCity(e.target.value)}>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Address*"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Control Section */}
        <Card elevation={0} sx={{ minWidth: { xs: "100%", md: "20%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">Control:</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch
                checked={activeStatus}
                onChange={(e) => setActiveStatus(e.target.checked)}
                color="success"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Update Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleUpdateBranch}
        >
          Update Branch
        </Button>
      </Box>
    </Box>
  );
};

export default EditBranchForm;
