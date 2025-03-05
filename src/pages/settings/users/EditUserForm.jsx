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
  Switch,
} from "@mui/material";

const EditUserForm = () => {
  // ✅ Setting dummy data
  const [role, setRole] = useState("Admin");
  const [department, setDepartment] = useState("IT");
  const [branch, setBranch] = useState("New York");
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("California");
  const [city, setCity] = useState("Los Angeles");
  const [activeStatus, setActiveStatus] = useState(true);

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Personal Details */}
        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Personal Details:
            </Typography>

            {/* Two-Column Layout */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {/* Left Side Fields */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: "100%", md: "48%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField fullWidth label="User ID*" defaultValue="8745" disabled />
                <TextField fullWidth label="Joining Date*" type="date" defaultValue="2024-04-12" />
                <TextField fullWidth label="First Name*" defaultValue="John" />
                <TextField fullWidth label="Last Name*" defaultValue="Doe" />
                <TextField fullWidth label="Login ID*" defaultValue="johndoe123" />
              </Box>

              {/* Right Side Fields */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: "100%", md: "48%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField fullWidth label="Password*" type="password" defaultValue="password123" />

                <FormControl fullWidth>
                  <InputLabel>Select User Role</InputLabel>
                  <Select value={role} onChange={(e) => setRole(e.target.value)}>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Select Department</InputLabel>
                  <Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Select Branch</InputLabel>
                  <Select value={branch} onChange={(e) => setBranch(e.target.value)}>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="California">California</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <TextField fullWidth label="Email ID*" defaultValue="john.doe@example.com" />
          </CardContent>
        </Card>

        {/* Address Details */}
        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Address:
            </Typography>
            <TextField fullWidth label="Pincode*" defaultValue="90001" />

            <FormControl fullWidth>
              <InputLabel>Select Country</InputLabel>
              <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Select State</InputLabel>
              <Select value={state} onChange={(e) => setState(e.target.value)}>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Select City</InputLabel>
              <Select value={city} onChange={(e) => setCity(e.target.value)}>
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                <MenuItem value="Houston">Houston</MenuItem>
              </Select>
            </FormControl>

            <TextField fullWidth label="Landmark" defaultValue="Near Central Park" />
            <TextField fullWidth label="Street*" defaultValue="123 Main St" />
          </CardContent>
        </Card>

        {/* Control Section */}
        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Control:
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch checked={activeStatus} onChange={() => setActiveStatus(!activeStatus)} color="success" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" size="large" sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default EditUserForm;
