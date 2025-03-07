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
import { useParams } from "react-router-dom";

const vendorNames = ["Vendor A", "Vendor B", "Vendor C"];
const vendorOwners = ["Owner X", "Owner Y", "Owner Z"];
const countries = ["USA", "Canada", "UK"];
const states = ["California", "Texas", "New York"];
const cities = ["Los Angeles", "Houston", "New York City"];

const EditVendorForm = () => {
  const { id } = useParams();
  const [vendorName, setVendorName] = useState("Vendor A");
  const [vendorOwner, setVendorOwner] = useState("Owner X");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("California");
  const [city, setCity] = useState("Los Angeles");

  return (
    <Box
      sx={{
        padding: "20px",
        width: { xs: "160%", md: "100%" },
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Vendor Information */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" gutterBottom>
                Edit Vendor Information
              </Typography>
              <TextField
                fullWidth
                label="Vendor Id"
                defaultValue="Ven_123"
                margin="normal"
                disabled
              />

              <Grid container spacing={2}>
                {/* Left Side Fields (3 Fields) */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Vendor Name</InputLabel>
                    <Select
                      value={vendorName}
                      onChange={(e) => setVendorName(e.target.value)}
                    >
                      {vendorNames.map((name, index) => (
                        <MenuItem key={index} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Vendor Owner</InputLabel>
                    <Select
                      value={vendorOwner}
                      onChange={(e) => setVendorOwner(e.target.value)}
                    >
                      {vendorOwners.map((owner, index) => (
                        <MenuItem key={index} value={owner}>
                          {owner}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Contact Name"
                    defaultValue="John Doe"
                  />
                </Grid>

                {/* Right Side Fields (3 Fields) */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Website"
                    defaultValue="www.vendorwebsite.com"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue="+1 234 567 890"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue="vendor@email.com"
                  />
                </Grid>
              </Grid>
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
                Edit Address Information
              </Typography>
              <TextField
                fullWidth
                label="Address Line 1"
                defaultValue="123 Vendor St."
              />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Pin Code" defaultValue="123456" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Country</InputLabel>
                    <Select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      {countries.map((c, index) => (
                        <MenuItem key={index} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select State</InputLabel>
                    <Select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      {states.map((s, index) => (
                        <MenuItem key={index} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Right Side Fields (2 Fields) */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select City</InputLabel>
                    <Select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      {cities.map((c, index) => (
                        <MenuItem key={index} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
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
              <TextField
                fullWidth
                label="Comments"
                multiline
                rows={4}
                defaultValue="No special terms."
              />
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
          Update Vendor
        </Button>
      </Box>
    </Box>
  );
};

export default EditVendorForm;
