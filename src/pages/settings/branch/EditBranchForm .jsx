import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
  Grid,
} from "@mui/material";
import axios from "axios";
import API_URL from "../../../api/Api_url";
import { useNavigate, useParams } from "react-router-dom";

const EditBranchForm = () => {
  const { id } = useParams();
  const [branchName, setBranchName] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // Store the error message
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBranchDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/branch/${id}`);
        const data = response.data;
        setBranchName(data.branch_name);
        setPincode(data.pincode);
        setCountry(data.country);
        setState(data.state);
        setCity(data.city);
        setAddress(data.address);
        setActiveStatus(data.active_status);
      } catch (error) {
        console.error("Error fetching branch details:", error);
      }
    };

    fetchBranchDetails();
  }, [id]);

  const handleUpdateBranch = async () => {
    if (!branchName || !pincode || !country || !state || !city || !address) {
      setErrorMessage("Please fill all required fields!");
      return;
    }

    const branchData = {
      branch_name: branchName,
      pincode,
      country,
      state,
      city,
      address,
      active_status: activeStatus,
    };

    try {
      setErrorMessage(""); // Clear any previous errors

      const response = await axios.put(`${API_URL}/branch/${id}`, branchData);
      if (response.status === 200) {
        navigate(`/dashboard/settings/branch`);
      }
    } catch (error) {
      console.error("Error updating branch:", error);

      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message); // Set error message under input
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
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

            <TextField
              fullWidth
              label="Branch Name*"
              placeholder="Enter Branch Name"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              error={Boolean(errorMessage)} // Apply red border if error exists
              helperText={errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>} // Show error in red
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
                <TextField fullWidth label="Pincode*" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country*" value={country} disabled />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="State*" value={state} disabled />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="District*" value={city} disabled />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth multiline rows={2} label="Address*" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
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
              <Switch checked={activeStatus} onChange={(e) => setActiveStatus(e.target.checked)} color="success" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Update Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" size="large" sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }} onClick={handleUpdateBranch}>
          Update Branch
        </Button>
      </Box>
    </Box>
  );
};

export default EditBranchForm;
