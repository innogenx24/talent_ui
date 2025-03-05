import React, { useState } from "react";
import {
  Container,
  TextField,
  Box,
  Typography,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const roles = ["Manager", "Admin", "User"];
const branches = ["Bengaluru", "Mumbai", "Delhi"];
const permissions = ["Add & Edit Users", "Delete User"];

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Ajay",
    lastName: "Kumar",
    loginId: "AjayKumar1485",
    password: "Ajay123456",
    role: "Manager",
    branch: "Bengaluru",
    email: "Ajaykumar@gmail.com",
    phone: "9123456789",
    addressLine1: "#12, 9th main road, 4th Cross, JP Nagar",
    street: "JP Nagar",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    pincode: "560075",
    access: ["Add & Edit Users", "Delete User"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (permission) => {
    setFormData((prev) => ({
      ...prev,
      access: prev.access.includes(permission)
        ? prev.access.filter((p) => p !== permission)
        : [...prev.access, permission],
    }));
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Profile / Edit Profile
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ mt: 4, p: 3, background: "#f9f9fc", borderRadius: 3 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 100, height: 100 }} src="/profile-pic.jpg" />
              <IconButton sx={{ mt: -4, ml: 10 }}>
                <EditIcon />
              </IconButton>
              <Typography mt={1}>Profile Picture</Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <TextField
                  label="First Name*"
                  name="firstName"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name*"
                  name="lastName"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Login ID*"
                  name="loginId"
                  fullWidth
                  value={formData.loginId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Password*"
                  name="password"
                  fullWidth
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Role Name*"
                  name="role"
                  fullWidth
                  value={formData.role}
                  onChange={handleChange}
                >
                  {roles.map((r) => (
                    <MenuItem key={r} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Branch*"
                  name="branch"
                  fullWidth
                  value={formData.branch}
                  onChange={handleChange}
                >
                  {branches.map((b) => (
                    <MenuItem key={b} value={b}>
                      {b}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email ID*"
                  name="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone Number*"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Address:</Typography>
            <TextField
              label="Address Line 1"
              name="addressLine1"
              fullWidth
              value={formData.addressLine1}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Street*"
              name="street"
              fullWidth
              value={formData.street}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Country*"
                  name="country"
                  fullWidth
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="State*"
                  name="state"
                  fullWidth
                  value={formData.state}
                  onChange={handleChange}
                >
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="City*"
                  name="city"
                  fullWidth
                  value={formData.city}
                  onChange={handleChange}
                >
                  <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pincode*"
                  name="pincode"
                  fullWidth
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Typography variant="h6">Access:</Typography>
            {permissions.map((perm) => (
              <FormControlLabel
                key={perm}
                control={
                  <Checkbox
                    checked={formData.access.includes(perm)}
                    onChange={() => handleCheckboxChange(perm)}
                  />
                }
                label={perm}
              />
            ))}
          </Grid> */}
        </Grid>
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          >
            Update
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EditProfile;
