import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Divider
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const OnBoardingAdd = () => {
  const [candidate, setCandidate] = useState({
    id: "SSB01450",
    firstName: "John",
    lastName: "Jacob",
    email: "johnjacob@gmail.com",
    phone: "9123456789",
    experience: "3.8",
    joinDate: "12-08-2024",
    selectionDate: "",
    onboardingDate: "",
    clientCompany: "",
    onboardingLocation: "",
    passThrough: "",
    subconDirect: "",
    subconName: "",
    department: "",
    verticalHead: "",
    accountManager: "",
    revenueType: "",
    currency: "",
    rate: "",
    rateType: "",
    contactPerson: ""
  });

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Candidate Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Candidate Information:
              </Typography>

              {/* Profile Picture */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                />
                <IconButton sx={{ mt: -2, backgroundColor: 'rgba(0,0,0,0.1)' }}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption">Profile Picture</Typography>
              </Box>

              <TextField
                label="Candidate ID"
                fullWidth
                margin="normal"
                value={candidate.id}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    name="firstName"
                    value={candidate.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    name="lastName"
                    value={candidate.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                name="email"
                value={candidate.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                name="phone"
                value={candidate.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Total Experience"
                    fullWidth
                    margin="normal"
                    name="experience"
                    value={candidate.experience}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WorkIcon color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: <InputAdornment position="end">years</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Join Date"
                    fullWidth
                    margin="normal"
                    name="joinDate"
                    value={candidate.joinDate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Onboarding Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Onboarding Information:
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField 
                    label="Selection Date" 
                    fullWidth 
                    margin="normal" 
                    name="selectionDate"
                    value={candidate.selectionDate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    label="Onboarding Date" 
                    fullWidth 
                    margin="normal" 
                    name="onboardingDate"
                    value={candidate.onboardingDate}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <FormControl fullWidth margin="normal">
                <InputLabel>Client/Company Name</InputLabel>
                <Select
                  name="clientCompany"
                  value={candidate.clientCompany}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <BusinessIcon color="action" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value=""><em>Select Company</em></MenuItem>
                  <MenuItem value="Company A">Company A</MenuItem>
                  <MenuItem value="Company B">Company B</MenuItem>
                  <MenuItem value="Company C">Company C</MenuItem>
                </Select>
              </FormControl>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Onboarding Location</InputLabel>
                    <Select
                      name="onboardingLocation"
                      value={candidate.onboardingLocation}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Location</em></MenuItem>
                      <MenuItem value="NY">New York</MenuItem>
                      <MenuItem value="SF">San Francisco</MenuItem>
                      <MenuItem value="TX">Texas</MenuItem>
                      <MenuItem value="Remote">Remote</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Pass Through</InputLabel>
                    <Select
                      name="passThrough"
                      value={candidate.passThrough}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Option</em></MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Subcon/Direct</InputLabel>
                    <Select
                      name="subconDirect"
                      value={candidate.subconDirect}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Type</em></MenuItem>
                      <MenuItem value="Subcon">Subcon</MenuItem>
                      <MenuItem value="Direct">Direct</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Subcon Name</InputLabel>
                    <Select
                      name="subconName"
                      value={candidate.subconName}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Subcon</em></MenuItem>
                      <MenuItem value="Subcon A">Subcon A</MenuItem>
                      <MenuItem value="Subcon B">Subcon B</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Department</InputLabel>
                    <Select
                      name="department"
                      value={candidate.department}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Department</em></MenuItem>
                      <MenuItem value="IT">IT</MenuItem>
                      <MenuItem value="HR">HR</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Operations">Operations</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Vertical Head</InputLabel>
                    <Select
                      name="verticalHead"
                      value={candidate.verticalHead}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>Select Vertical Head</em></MenuItem>
                      <MenuItem value="John Doe">John Doe</MenuItem>
                      <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <FormControl fullWidth margin="normal">
                <InputLabel>Account Manager</InputLabel>
                <Select
                  name="accountManager"
                  value={candidate.accountManager}
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>Select Account Manager</em></MenuItem>
                  <MenuItem value="Manager A">Manager A</MenuItem>
                  <MenuItem value="Manager B">Manager B</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Other Details */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Other Details:
              </Typography>

              <FormControl fullWidth margin="normal">
                <InputLabel>Revenue Type</InputLabel>
                <Select
                  name="revenueType"
                  value={candidate.revenueType}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachMoneyIcon color="action" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value=""><em>Select Revenue Type</em></MenuItem>
                  <MenuItem value="Fixed">Fixed</MenuItem>
                  <MenuItem value="Variable">Variable</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Currency</InputLabel>
                <Select
                  name="currency"
                  value={candidate.currency}
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>Select Currency</em></MenuItem>
                  <MenuItem value="USD">USD ($)</MenuItem>
                  <MenuItem value="EUR">EUR (€)</MenuItem>
                  <MenuItem value="GBP">GBP (£)</MenuItem>
                  <MenuItem value="INR">INR (₹)</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Rate at Onboarding"
                fullWidth
                margin="normal"
                name="rate"
                value={candidate.rate}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Rate Type</InputLabel>
                <Select
                  name="rateType"
                  value={candidate.rateType}
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>Select Rate Type</em></MenuItem>
                  <MenuItem value="Hourly">Hourly</MenuItem>
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Weekly">Weekly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Annual">Annual</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Contact Person</InputLabel>
                <Select
                  name="contactPerson"
                  value={candidate.contactPerson}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircleIcon color="action" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value=""><em>Select Contact</em></MenuItem>
                  <MenuItem value="Person A">Person A</MenuItem>
                  <MenuItem value="Person B">Person B</MenuItem>
                  <MenuItem value="Person C">Person C</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button - Centered at Bottom */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ 
            px: 8,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '8px'
          }}
        >
          Save Onboarding Details
        </Button>
      </Box>
    </Box>
  );
};