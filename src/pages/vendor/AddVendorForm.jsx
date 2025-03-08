import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

const vendorNames = ["Vendor A", "Vendor B", "Vendor C"];
const vendorOwners = ["Owner X", "Owner Y", "Owner Z"];

const AddVendorForm = () => {
  const [vendorName, setVendorName] = useState("");
  const [vendorOwner, setVendorOwner] = useState("");
  const [contactName, setContactName] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  // Fetch State and City based on Pincode
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

  // Submit Data to Backend
  const handleSubmit = async () => {
    const vendorData = {
      vendorName,
      vendorOwner,
      contactName,
      website,
      phoneNumber,
      email,
      address,
      pincode,
      country,
      state,
      city,
      comments,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/vendors/create",
        vendorData
      );

      if (response.status === 201) {
        alert("Vendor Created Successfully!");
      }
    } catch (error) {
      console.error("Error creating vendor:", error);
      alert("Error creating vendor. Please try again.");
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "200%", md: "80%" } }}>
      <Typography variant="h6" gutterBottom>
        Add Vendor Details
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Vendor Information */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6">Vendor Information</Typography>

              <TextField fullWidth label="Vendor Id" defaultValue="Ven_123" margin="normal" disabled />

              <FormControl fullWidth>
                <InputLabel>Select Vendor Name</InputLabel>
                <Select value={vendorName} onChange={(e) => setVendorName(e.target.value)}>
                  <MenuItem value="">Select Vendor Name</MenuItem>
                  {vendorNames.map((name, index) => (
                    <MenuItem key={index} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Select Vendor Owner</InputLabel>
                <Select value={vendorOwner} onChange={(e) => setVendorOwner(e.target.value)}>
                  <MenuItem value="">Select Vendor Owner</MenuItem>
                  {vendorOwners.map((owner, index) => (
                    <MenuItem key={index} value={owner}>
                      {owner}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField fullWidth label="Contact Name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
              <TextField fullWidth label="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
              <TextField fullWidth label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </CardContent>
          </Card>
        </Grid>

        {/* Address Information */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6">Address Information</Typography>
              <TextField fullWidth label="Address Line 1" value={address} onChange={(e) => setAddress(e.target.value)} />

              <TextField
                fullWidth
                label="Pin Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                error={!!errors.pincode}
                helperText={errors.pincode}
              />

              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select value={country} disabled>
                  <MenuItem value="India">India</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select value={state} disabled>
                  <MenuItem value={state}>{state}</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select value={city} disabled>
                  <MenuItem value={city}>{city}</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Terms of Service */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6">Terms of Service</Typography>
              <TextField fullWidth label="Comments" multiline rows={4} value={comments} onChange={(e) => setComments(e.target.value)} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" size="large" sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }} onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddVendorForm;
