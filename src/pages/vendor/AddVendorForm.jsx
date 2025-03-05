import React, { useState } from "react";
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
const countries = ["USA", "Canada", "UK"];
const states = ["California", "Texas", "New York"];
const cities = ["Los Angeles", "Houston", "New York City"];

const AddVendorForm = () => {
  const [vendorName, setVendorName] = useState("");
  const [vendorOwner, setVendorOwner] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add Vendor Details
      </Typography>{" "}
      <Grid container spacing={3} justifyContent="center">
        {/* Vendor Information */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" gutterBottom>
                Vendor Information
              </Typography>
              <TextField
                fullWidth
                label="Vendor Id"
                defaultValue="Ven_123"
                margin="normal"
                disabled
              />

              <FormControl fullWidth>
                <InputLabel>Select Vendor Name</InputLabel>
                <Select
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                >
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
                <Select
                  value={vendorOwner}
                  onChange={(e) => setVendorOwner(e.target.value)}
                >
                  <MenuItem value="">Select Vendor Owner</MenuItem>
                  {vendorOwners.map((owner, index) => (
                    <MenuItem key={index} value={owner}>
                      {owner}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField fullWidth label="Contact Name" />
              <TextField fullWidth label="Website" />
              <TextField fullWidth label="Phone Number" />
              <TextField fullWidth label="Email" />
            </CardContent>
          </Card>
        </Grid>

        {/* Address Information */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" gutterBottom>
                Address Information
              </Typography>
              <TextField fullWidth label="Address Line 1" />

              <FormControl fullWidth>
                <InputLabel>Select Country</InputLabel>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="">Select Country</MenuItem>
                  {countries.map((c, index) => (
                    <MenuItem key={index} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Select State</InputLabel>
                <Select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <MenuItem value="">Select State</MenuItem>
                  {states.map((s, index) => (
                    <MenuItem key={index} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Select City</InputLabel>
                <Select value={city} onChange={(e) => setCity(e.target.value)}>
                  <MenuItem value="">Select City</MenuItem>
                  {cities.map((c, index) => (
                    <MenuItem key={index} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField fullWidth label="Pin Code" />
            </CardContent>
          </Card>
        </Grid>

        {/* Terms of Service */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" gutterBottom>
                Terms of Service
              </Typography>
              <TextField fullWidth label="Comments" multiline rows={4} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddVendorForm;
