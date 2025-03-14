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
  Avatar,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const BenchEdit = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/80");

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5fa", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          {/* Candidate Information */}
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Candidate Information:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", position: "relative", mb: 2 }}>
                <Avatar sx={{ width: 80, height: 80 }} src={profilePic} alt="Profile" />
                <IconButton component="label" sx={{ position: "absolute", bottom: 0, right: "40%" }}>
                  <EditIcon />
                  <input type="file" hidden accept="image/*" onChange={handleProfileChange} />
                </IconButton>
              </Box>
              <Typography align="center">Profile Picture</Typography>
              <TextField label="Candidate ID" fullWidth margin="normal" value="SSB01450" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="First Name" fullWidth margin="normal" defaultValue="John" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Last Name" fullWidth margin="normal" defaultValue="Doe" />
                </Grid>
              </Grid>
              <TextField label="Email" fullWidth margin="normal" defaultValue="johndoe@example.com" />
              <TextField label="Phone Number" fullWidth margin="normal" defaultValue="1234567890" />
            </CardContent>
          </Card>

          {/* Experience and Bench Date */}
          <Card sx={{ mt: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Experience and Bench Date:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Total Experience</InputLabel>
                    <Select defaultValue="5+ Years">
                      <MenuItem value="0-1 Year">0-1 Year</MenuItem>
                      <MenuItem value="1-2 Years">1-2 Years</MenuItem>
                      <MenuItem value="2-3 Years">2-3 Years</MenuItem>
                      <MenuItem value="3-4 Years">3-4 Years</MenuItem>
                      <MenuItem value="4-5 Years">4-5 Years</MenuItem>
                      <MenuItem value="5+ Years">5+ Years</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Select defaultValue="Software Engineer">
                      <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                      <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                      <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Join Date" fullWidth margin="normal" type="date" defaultValue="2022-01-01" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Bench Date" fullWidth margin="normal" type="date" defaultValue="2022-01-15" InputLabelProps={{ shrink: true }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Status */}
          <Card sx={{ mt: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Status:
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select defaultValue="Available">
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Not Available">Not Available</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

              {/* Center Column */}
              <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Other Information:
              </Typography>
              {/* Period (Days) and Work Location in One Row */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Period (Days)" fullWidth margin="normal" type="number" defaultValue={30} />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Work Location</InputLabel>
                    <Select defaultValue="Bangalore">
                      <MenuItem value="Bangalore">Bangalore</MenuItem>
                      <MenuItem value="Chennai">Chennai</MenuItem>
                      <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField label="Skill Set" fullWidth margin="normal" defaultValue="Java, Python, AWS" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Department</InputLabel>
                    <Select defaultValue="IT">
                      <MenuItem value="IT">IT</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="HR">HR</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Vertical Head</InputLabel>
                    <Select defaultValue="John Doe">
                      <MenuItem value="John Doe">John Doe</MenuItem>
                      <MenuItem value="Jane Doe">Jane Doe</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl fullWidth margin="normal">
                <InputLabel>Work Layout</InputLabel>
                <Select defaultValue="WFO">
                  <MenuItem value="WFO">WFO</MenuItem>
                  <MenuItem value="WFH">WFH</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Closure Remarks" fullWidth margin="normal" defaultValue="N/A" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status</InputLabel>
                    <Select defaultValue="On Bench">
                      <MenuItem value="On Bench">On Bench</MenuItem>
                      <MenuItem value="Off Bench">Off Bench</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status Bench</InputLabel>
                    <Select defaultValue="Training">
                      <MenuItem value="Training">Training</MenuItem>
                      <MenuItem value="Available">Available</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <TextField label="Client Interviews" fullWidth margin="normal" defaultValue="N/A" />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Salary and Compensation Details:
              </Typography>
              <TextField label="Base Salary" fullWidth margin="normal" type="number" defaultValue={50000} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ px: 40 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};