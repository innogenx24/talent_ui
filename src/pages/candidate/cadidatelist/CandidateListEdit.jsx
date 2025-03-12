import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

export const CandidateListEdit = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {/* First Column - Upload Resume, Personal Info, Other Info */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent sx={{ textAlign: "center", border: "2px dashed #ccc", padding: 2 }}>
            <CloudUpload fontSize="large" color="primary" />
            <Button variant="contained" component="label" fullWidth sx={{ my: 1 }}>
              Choose File
              <input type="file" hidden />
            </Button>
            <Typography variant="caption">Supported Formats: PDF, Word</Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Personal Information</Typography>
            <TextField label="Candidate ID" fullWidth margin="normal" disabled value="CandC-25" />
            <Grid container spacing={2}>
              <Grid item xs={6}><TextField label="First Name" fullWidth value="John" /></Grid>
              <Grid item xs={6}><TextField label="Last Name" fullWidth value="Doe" /></Grid>
            </Grid>
            <TextField label="Email" fullWidth margin="normal" value="john.doe@example.com" />
            <TextField label="Phone Number" fullWidth margin="normal" value="+1234567890" />
            
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Address:</Typography>
            <Grid container spacing={2} rowGap={1}>
              <Grid item xs={6}><TextField label="Pincode" fullWidth value="123456" /></Grid>
              <Grid item xs={6}><TextField label="Country" fullWidth value="USA" /></Grid>
              <Grid item xs={6}><TextField label="State" fullWidth value="California" /></Grid>
              <Grid item xs={6}><TextField label="City" fullWidth value="Los Angeles" /></Grid>
              <Grid item xs={12}><TextField label="Street" fullWidth value="123 Main St" /></Grid>
              <Grid item xs={12}><TextField label="Landmark" fullWidth value="Near Central Park" /></Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Other Information</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Source</InputLabel>
              <Select value="Referral">
                <MenuItem value="Referral">Referral</MenuItem>
                <MenuItem value="Job Portal">Job Portal</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select value="Active">
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Work Experience</Typography>
            <FormControlLabel control={<Checkbox checked />} label="Currently Works Here" />
            <TextField label="Job Title" fullWidth margin="normal" value="Software Engineer" />
            <TextField label="Company Name" fullWidth margin="normal" value="TechCorp Inc." />
            <TextField label="Address" fullWidth margin="normal" value="456 Tech St, Silicon Valley" />
            <Grid container spacing={2} rowGap={2}>
              <Grid item xs={6}><TextField label="State" fullWidth value="California" /></Grid>
              <Grid item xs={6}><TextField label="City" fullWidth value="San Francisco" /></Grid>
              <Grid item xs={6}><TextField label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value="2020-06-01" /></Grid>
              <Grid item xs={6}><TextField label="End Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value="" /></Grid>
            </Grid>
            <TextField label="Skills Used" fullWidth margin="normal" value="React.js, JavaScript, Tailwind CSS" />
            <FormControl fullWidth margin="normal">
              <InputLabel>Employment Type</InputLabel>
              <Select value="Full Time">
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Notes</Typography>
            <TextField label="Notes" multiline rows={4} fullWidth margin="normal" value="Candidate has excellent frontend development skills." />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Skills</Typography>
            <TextField label="Technical Skills" fullWidth margin="normal" value="React, JavaScript, HTML, CSS" />
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Professional Information</Typography>
            <TextField label="Total Years of Experience" fullWidth margin="normal" value="5" />
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Portfolio and Social Links</Typography>
            <TextField label="Portfolio" fullWidth margin="normal" value="https://johnsportfolio.com" />
            <TextField label="LinkedIn" fullWidth margin="normal" value="https://linkedin.com/in/johndoe" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ mt: 2, py: 1.5 }}>
          Save Changes
        </Button>
      </Grid>
    </Grid>
  );
};
