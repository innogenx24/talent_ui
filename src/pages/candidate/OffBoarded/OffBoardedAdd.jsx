import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Typography,
  Avatar,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const OffBoardedAdd = () => {
  const [formData, setFormData] = useState({
    candidateId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    joinDate: "",
    selectionDate: "",
    onboardingDate: "",
    companyName: "",
    onboardingLocation: "",
    passThrough: "",
    subconDirect: "",
    subconName: "",
    department: "",
    verticalHead: "",
    accountManager: "",
    revenueType: "",
    currency: "",
    rateAtOnboarding: "",
    rateType: "",
    contactPerson: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ p: 4, background: "#f5f5fa", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Edit Placement
      </Typography>

      <Grid container spacing={3}>
        {/* Candidate Information */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 3,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Candidate Information:
            </Typography>
            <Box display="flex" justifyContent="center" my={2}>
              <Avatar sx={{ width: 80, height: 80 }} />
              <PhotoCamera sx={{ ml: 1, cursor: "pointer" }} />
            </Box>

            <TextField
              fullWidth
              label="Candidate ID"
              name="candidateId"
              value={formData.candidateId}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ my: 2 }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Total Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Join Date"
                  type="date"
                  name="joinDate"
                  InputLabelProps={{ shrink: true }}
                  value={formData.joinDate}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Onboarding Information */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 3,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Onboarding Information:
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Selection Date"
                  type="date"
                  name="selectionDate"
                  InputLabelProps={{ shrink: true }}
                  value={formData.selectionDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Onboarding Date"
                  type="date"
                  name="onboardingDate"
                  InputLabelProps={{ shrink: true }}
                  value={formData.onboardingDate}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Client/Company Name</InputLabel>
              <Select name="companyName" value={formData.companyName} onChange={handleChange}>
                <MenuItem value="company1">Company 1</MenuItem>
                <MenuItem value="company2">Company 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Onboarding Location</InputLabel>
              <Select name="onboardingLocation" value={formData.onboardingLocation} onChange={handleChange}>
                <MenuItem value="location1">Location 1</MenuItem>
                <MenuItem value="location2">Location 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Other Details */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 3,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Other Details:
            </Typography>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Revenue Type</InputLabel>
              <Select name="revenueType" value={formData.revenueType} onChange={handleChange}>
                <MenuItem value="fixed">Fixed</MenuItem>
                <MenuItem value="variable">Variable</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Currency</InputLabel>
              <Select name="currency" value={formData.currency} onChange={handleChange}>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Rate at Onboarding"
              name="rateAtOnboarding"
              value={formData.rateAtOnboarding}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Rate Type</InputLabel>
              <Select name="rateType" value={formData.rateType} onChange={handleChange}>
                <MenuItem value="hourly">Hourly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" size="large">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default OffBoardedAdd;
