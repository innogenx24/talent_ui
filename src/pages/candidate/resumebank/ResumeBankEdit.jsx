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
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Chip from "@mui/material/Chip";

export const ResumeBankEdit = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          {/* Upload Resume */}
          <Card sx={{ border: "2px dashed #ccc", textAlign: "center", padding: 2 }}>
            <CardContent>
              <UploadFileIcon sx={{ fontSize: 40, color: "#1976D2" }} />
              <Typography variant="h6" fontWeight="bold">Upload Resume</Typography>
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
              <Typography variant="h6" fontWeight="bold">Personal Information:</Typography>
              <TextField label="Candidate ID" fullWidth margin="normal" value="CAND-1001" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="First Name" fullWidth margin="normal" value="John" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Last Name" fullWidth margin="normal" value="Doe" />
                </Grid>
              </Grid>
              <TextField label="Email" fullWidth margin="normal" value="johndoe@gmail.com" />
              <TextField label="Phone Number" fullWidth margin="normal" value="+1234567890" />
            </CardContent>
          </Card>

          {/* Address */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Address:</Typography>
              <TextField label="Pincode" fullWidth margin="normal" value="10001" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Country" fullWidth margin="normal" value="USA" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="State" fullWidth margin="normal" value="New York" />
                </Grid>
              </Grid>
              <TextField label="City" fullWidth margin="normal" value="NYC" />
              <TextField label="Street" fullWidth margin="normal" value="5th Avenue" />
              <TextField label="Landmark" fullWidth margin="normal" value="Empire State" />
            </CardContent>
          </Card>
        </Grid>

        {/* Center Column */}
        <Grid item xs={12} md={4}>
          {/* Work Experience */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Work Experience:</Typography>
              <FormControlLabel control={<Checkbox checked />} label="Currently Works Here" />
              <TextField label="Job Title" fullWidth margin="normal" value="Frontend Developer" />
              <TextField label="Company Name" fullWidth margin="normal" value="TechCorp" />
              <TextField label="Address" fullWidth margin="normal" value="New York, USA" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField label="Start Date" fullWidth margin="normal" value="01-01-2023" />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="End Date" fullWidth margin="normal" value="Present" />
                </Grid>
              </Grid>
              <TextField label="Skills Used" fullWidth margin="normal" value="React, JavaScript" />
              <TextField label="Employment Type" fullWidth margin="normal" value="Full-Time" />
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
              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
                <TextField
                  label="Enter Skill"
                  fullWidth
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                />
                <IconButton color="primary" onClick={handleAddSkill}>
                  <AddCircleIcon />
                </IconButton>
              </Box>
              <Box sx={{ mt: 2 }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={() => handleDeleteSkill(skill)}
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Professional Information:</Typography>
              <TextField label="Total Years of Experience" fullWidth margin="normal" value="3.5" />
              <TextField label="Expected Salary" fullWidth margin="normal" value="$80,000" />
            </CardContent>
          </Card>

          {/* Portfolio & Social Links */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Portfolio & Social Links:</Typography>
              <TextField label="Portfolio Link" fullWidth margin="normal" value="https://portfolio.com/johndoe" />
              <TextField label="LinkedIn Link" fullWidth margin="normal" value="https://linkedin.com/in/johndoe" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ px: 5 }}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};
