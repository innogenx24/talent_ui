import React from "react";
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
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export const ResumeBankAdd = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          {/* Upload Resume */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Upload Resume
              </Typography>
              <Button variant="contained" component="label" fullWidth sx={{ mt: 2 }}>
                Choose File
                <input type="file" hidden />
              </Button>
              <Typography variant="caption">Supported Formats: PDF, Word</Typography>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Personal Information:
              </Typography>
              <TextField label="Candidate Id" fullWidth margin="normal" />
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

              {/* Address */}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Address:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Pincode" fullWidth margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Select Country</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Select State</em>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Select City</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <TextField label="Street" fullWidth margin="normal" />
              <TextField label="Landmark" fullWidth margin="normal" />
            </CardContent>
          </Card>

          {/* Other Information */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Other Information:
              </Typography>
              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Select Source</em>
                </MenuItem>
              </Select>
              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
              </Select>
            </CardContent>
          </Card>
        </Grid>

        {/* Center Column */}
        <Grid item xs={12} md={4}>
          {/* Work Experience */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Work Experience:
              </Typography>
              <FormControlLabel control={<Checkbox />} label="Currently Works Here" />
              <TextField label="Job Title" fullWidth margin="normal" />
              <TextField label="Company Name" fullWidth margin="normal" />
              <TextField label="Address" fullWidth margin="normal" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Select State</em>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select fullWidth displayEmpty sx={{ my: 1 }}>
                    <MenuItem value="">
                      <em>Select City</em>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Start Date*" fullWidth margin="normal" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="End Date*" fullWidth margin="normal" />
                </Grid>
              </Grid>
              <TextField label="Skills Used" fullWidth margin="normal" />
              <Select fullWidth displayEmpty sx={{ my: 1 }}>
                <MenuItem value="">
                  <em>Select Employment Type*</em>
                </MenuItem>
              </Select>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                + Add Work Experience
              </Button>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Notes:</Typography>
              <TextField label="Notes" fullWidth multiline rows={4} margin="normal" />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {/* Skills */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Skills:</Typography>
              <TextField label="Technical Skill" fullWidth margin="normal" />
              <Typography variant="body2" sx={{ mt: 1 }}>
                HTML, CSS, JavaScript, Git, APIs, Testing...
              </Typography>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Professional Information:</Typography>
              <TextField label="Total Years of Experience" fullWidth margin="normal" />
              <TextField label="Expected Salary" fullWidth margin="normal" />
            </CardContent>
          </Card>

          {/* Portfolio & Social Links */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Portfolio & Social Links:</Typography>
              <TextField label="Portfolio Link" fullWidth margin="normal" />
              <TextField label="LinkedIn Link" fullWidth margin="normal" />
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
