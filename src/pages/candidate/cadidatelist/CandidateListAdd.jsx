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
  Avatar,
  IconButton,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { CloudUpload, Edit } from "@mui/icons-material";

export const CandidateListAdd = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {/* First Column - Upload Resume, Personal Info, Other Info */}
      <Grid item xs={12} md={4}>
        {/* Upload Resume */}
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

        {/* Personal Information */}
        <Card sx={{ mt: 3 }}>
  <CardContent>
    <Typography variant="h6">Personal Information</Typography>
    <TextField label="Candidate ID" fullWidth margin="normal" disabled value="CandC-25" />
    <Grid container spacing={2}>
      <Grid item xs={6}><TextField label="First Name" fullWidth /></Grid>
      <Grid item xs={6}><TextField label="Last Name" fullWidth /></Grid>
    </Grid>
    <TextField label="Email" fullWidth margin="normal" />
    <TextField label="Phone Number" fullWidth margin="normal" />
    
    <Typography variant="subtitle1" sx={{ mt: 2 }}>Address:</Typography>
    
    <Grid container spacing={2} rowGap={1}>
      <Grid item xs={6}><TextField label="Pincode" fullWidth /></Grid>
      <Grid item xs={6}><TextField label="Country" fullWidth /></Grid>
      
      <Grid item xs={6}><TextField label="State" fullWidth /></Grid>
      <Grid item xs={6}><TextField label="City" fullWidth /></Grid>
      
      <Grid item xs={12}><TextField label="Street" fullWidth /></Grid>
      <Grid item xs={12}><TextField label="Landmark" fullWidth /></Grid>
    </Grid>
  </CardContent>
</Card>


        {/* Other Information */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Other Information</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Source</InputLabel>
              <Select>
                <MenuItem value="Referral">Referral</MenuItem>
                <MenuItem value="Job Portal">Job Portal</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      {/* Second Column - Work Experience & Notes */}
      <Grid item xs={12} md={4}>
      <Card>
  <CardContent>
    <Typography variant="h6">Work Experience</Typography>
    <FormControlLabel control={<Checkbox />} label="Currently Works Here" />
    
    <TextField label="Job Title" fullWidth margin="normal" />
    <TextField label="Company Name" fullWidth margin="normal" />
    <TextField label="Address" fullWidth margin="normal" />

    <Grid container spacing={2} rowGap={2}>
      <Grid item xs={6}><TextField label="State" fullWidth /></Grid>
      <Grid item xs={6}><TextField label="City" fullWidth /></Grid>

      <Grid item xs={6}>
        <TextField label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="End Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
      </Grid>
    </Grid>

    <TextField label="Skills Used" fullWidth margin="normal" />

    <FormControl fullWidth margin="normal">
      <InputLabel>Employment Type</InputLabel>
      <Select>
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
      </Select>
    </FormControl>
  </CardContent>
</Card>
        {/* Notes */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Notes</Typography>
            <TextField label="Notes" multiline rows={4} fullWidth margin="normal" />
          </CardContent>
        </Card>
      </Grid>

      {/* Third Column - Skills, Professional Info, Portfolio */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Skills</Typography>
            <TextField label="Technical Skills" fullWidth margin="normal" />
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Professional Information</Typography>
            <TextField label="Total Years of Experience" fullWidth margin="normal" />
          </CardContent>
        </Card>

        {/* Portfolio & Social Links */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Portfolio and Social Links</Typography>
            <TextField label="Portfolio" fullWidth margin="normal" />
            <TextField label="LinkedIn" fullWidth margin="normal" />
          </CardContent>
        </Card>
      </Grid>

      {/* Save Button */}
      <Grid item xs={12}>
        <Button variant="contained" fullWidth sx={{ mt: 2, py: 1.5 }}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
