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
import { useNavigate } from "react-router-dom";

const AddBranchForm = () => {
  const [branchId, setBranchId] = useState("");
  const [branchName, setBranchName] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [errors, setErrors] = useState({}); // Store errors for each field
  const navigate = useNavigate();

  // Fetch location based on Pincode
  useEffect(() => {
    const fetchLocationData = async () => {
      if (pincode.length === 6) {
        try {
          const response = await axios.get(
            `https://api.postalpincode.in/pincode/${pincode}`
          );
          const data = response.data;

          if (data && data[0]?.Status === "Success") {
            const postOffice = data[0].PostOffice[0];
            setCountry("India");
            setState(postOffice.State);
            setCity(postOffice.District);
            setErrors((prev) => ({ ...prev, pincode: "" })); // Clear error if valid
          } else {
            setErrors((prev) => ({ ...prev, pincode: "Invalid Pincode." }));
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          setErrors((prev) => ({ ...prev, pincode: "Error fetching location." }));
        }
      }
    };

    fetchLocationData();
  }, [pincode]);

  // Handle branch creation
  const handleSaveBranch = async () => {
    let newErrors = {};

    if (!branchName) newErrors.branchName = "Branch Name is required!";
    if (!pincode) newErrors.pincode = "Pincode is required!";
    if (!address) newErrors.address = "Address is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const branchData = {
      branch_id: branchId,
      branch_name: branchName,
      pincode,
      country,
      state,
      city,
      address,
      active_status: activeStatus,
    };

    try {
      setErrors({}); // Clear previous errors
      const response = await axios.post(`${API_URL}/branch/create`, branchData);
      if (response.status === 201) {
        navigate(`/dashboard/settings/branch`);
      }
    } catch (error) {
      if (error.response && error.response.data?.message) {
        const errorMessage = error.response.data.message;

        if (errorMessage.includes("Branch name already exists")) {
          setErrors({ branchName: "Branch name already exists. Please choose a different name." });
        } else {
          setErrors({ form: errorMessage });
        }
      } else {
        setErrors({ form: "Error occurred while creating the branch." });
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
              label="Branch ID*"
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
            />

            <TextField
              fullWidth
              label="Branch Name*"
              placeholder="Enter Branch Name"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              error={Boolean(errors.branchName)}
              helperText={errors.branchName && <span style={{ color: "red" }}>{errors.branchName}</span>}
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
                  error={Boolean(errors.pincode)}
                  helperText={errors.pincode && <span style={{ color: "red" }}>{errors.pincode}</span>}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country" value={country} disabled />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="State" value={state} disabled />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="District" value={city} disabled />
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
                  error={Boolean(errors.address)}
                  helperText={errors.address && <span style={{ color: "red" }}>{errors.address}</span>}
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

      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleSaveBranch}
        >
          Save Branch
        </Button>
      </Box>
    </Box>
  );
};

export default AddBranchForm;
