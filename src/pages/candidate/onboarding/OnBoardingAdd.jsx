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
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";

export const OnBoardingAdd = () => {
  const [candidate, setCandidate] = useState({
    id: "SSB01450",
    firstName: "John",
    lastName: "Jacob",
    email: "johnjacob@gmail.com",
    phone: "9123456789",
    experience: "3.8",
    joinDate: "12-08-2024",
  });

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Candidate Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Candidate Information:
              </Typography>

              {/* Profile Picture */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                />
                <IconButton sx={{ mt: -2 }}>
                  <EditIcon />
                </IconButton>
                <Typography variant="body2">Profile Picture</Typography>
              </Box>

              <TextField
                label="Candidate ID"
                fullWidth
                margin="normal"
                value={candidate.id}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    value={candidate.firstName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    value={candidate.lastName}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={candidate.email}
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                value={candidate.phone}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Total Experience"
                    fullWidth
                    margin="normal"
                    value={candidate.experience}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Join Date"
                    fullWidth
                    margin="normal"
                    value={candidate.joinDate}
                    InputProps={{
                      endAdornment: <CalendarTodayIcon />,
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
              <Typography variant="h6" fontWeight="bold">
                Onboarding Information:
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Selection Date" fullWidth margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Onboarding Date" fullWidth margin="normal" />
                </Grid>
              </Grid>

              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Client/Company Name</em>
                </MenuItem>
                <MenuItem value="Company A">Company A</MenuItem>
                <MenuItem value="Company B">Company B</MenuItem>
              </Select>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Onboarding Location</em>
                    </MenuItem>
                    <MenuItem value="NY">New York</MenuItem>
                    <MenuItem value="SF">San Francisco</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Pass Through</em>
                    </MenuItem>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Subcon/Direct</em>
                    </MenuItem>
                    <MenuItem value="Subcon">Subcon</MenuItem>
                    <MenuItem value="Direct">Direct</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Subcon Name</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Department</em>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Subcon Name</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Vertical Head</em>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Account Manager</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Other Details */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Other Details:
              </Typography>

              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Revenue Type*</em>
                </MenuItem>
              </Select>

              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Currency*</em>
                </MenuItem>
              </Select>

              <TextField
                label="Rate at Onboarding*"
                fullWidth
                margin="normal"
              />

              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Rate Type*</em>
                </MenuItem>
              </Select>

              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Contact Person</em>
                </MenuItem>
              </Select>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button - Centered at Bottom */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ px: 40 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
