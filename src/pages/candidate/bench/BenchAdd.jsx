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

export const BenchAdd = () => {
  const [profilePic, setProfilePic] = useState("");

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
                  <TextField label="First Name" fullWidth margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Last Name" fullWidth margin="normal" />
                </Grid>
              </Grid>
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Phone Number" fullWidth margin="normal" />
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
                    <Select>
                      <MenuItem value="">Select</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Select>
                      <MenuItem value="">Select</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Join Date" fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Bench Date" fullWidth margin="normal" type="date" InputLabelProps={{ shrink: true }} />
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
                <Select>
                  <MenuItem value="">Select</MenuItem>
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
                  <TextField label="Period (Days)" fullWidth margin="normal" type="number" />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Work Location</InputLabel>
                    <Select>
                      <MenuItem value="">Select Location</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField label="Skill Set" fullWidth margin="normal" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Department</InputLabel>
                    <Select>
                      <MenuItem value="">Select Department</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Vertical Head</InputLabel>
                    <Select>
                      <MenuItem value="">Select Vertical Head</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl fullWidth margin="normal">
                <InputLabel>Work Layout</InputLabel>
                <Select defaultValue="WFO">
                  <MenuItem value="WFO">WFO</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Closure Remarks" fullWidth margin="normal" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status</InputLabel>
                    <Select>
                      <MenuItem value="On Bench">On Bench</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Status Bench</InputLabel>
                    <Select>
                      <MenuItem value="Training">Training</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <TextField label="Client Interviews" fullWidth margin="normal" />
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
              <TextField label="Base Salary" fullWidth margin="normal" type="number" />
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
