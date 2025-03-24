import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const EditJobDescriptionForm = () => {
  // Pre-filled dummy data for editing
  const [formData, setFormData] = useState({
    jobOpeningId: "Job_789",
    jobTitle: "Senior React Developer",
    clientName: "Tech Solutions Inc.",
    contactName: "John Smith",
    assignedRecruiter: "Sarah Johnson",
    targetDate: "2023-12-15",
    jobOpeningStatus: "Open",
    industry: "IT",
    salary: "$120,000",
    accountManager: "Michael Brown",
    dateOpened: "2023-10-01",
    jobType: "Full-time",
    workExperience: "5-7 years",
    technicalSkills: ["React", "TypeScript", "Redux", "Node.js", "MongoDB"],
    addressType: "Remote Job",
    address: "",
    country: "USA",
    state: "California",
    city: "San Francisco",
    pinCode: "94105",
    revenuePerPosition: "$15,000",
    numberOfPositions: "3",
    totalRevenue: "$45,000",
  });

  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        technicalSkills: [...prevState.technicalSkills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setFormData((prevState) => ({
      ...prevState,
      technicalSkills: prevState.technicalSkills.filter(
        (skill) => skill !== skillToDelete
      ),
    }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {/* First Column: Job Opening Form */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "white", padding: "20px", borderRadius: "4px" }}>
            <Typography variant="h6" mb={2}>
              Job Opening Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Job Opening ID" value={formData.jobOpeningId} disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Job Title" 
                  name="jobTitle" 
                  value={formData.jobTitle}
                  onChange={handleChange} 
                />
              </Grid>

              {/* Client Name & Contact Name in One Row */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Client Name" 
                  name="clientName" 
                  value={formData.clientName}
                  onChange={handleChange}
                >
                  <MenuItem value="Tech Solutions Inc.">Tech Solutions Inc.</MenuItem>
                  <MenuItem value="Client 1">Client 1</MenuItem>
                  <MenuItem value="Client 2">Client 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  label="Contact Name" 
                  name="contactName" 
                  value={formData.contactName}
                  onChange={handleChange} 
                />
              </Grid>

              {/* Assigned Recruiter & Target Date */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Assigned Recruiter" 
                  name="assignedRecruiter" 
                  value={formData.assignedRecruiter}
                  onChange={handleChange}
                >
                  <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                  <MenuItem value="Recruiter 1">Recruiter 1</MenuItem>
                  <MenuItem value="Recruiter 2">Recruiter 2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  type="date" 
                  label="Target Date" 
                  name="targetDate" 
                  value={formData.targetDate}
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
              </Grid>

              {/* Job Opening Status (now full width) */}
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  select 
                  label="Job Opening Status" 
                  name="jobOpeningStatus" 
                  value={formData.jobOpeningStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="Open">Open</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                  <MenuItem value="On Hold">On Hold</MenuItem>
                </TextField>
              </Grid>

              {/* Industry */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Industry" 
                  name="industry" 
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                </TextField>
              </Grid>

              {/* Salary & Account Manager */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  label="Salary" 
                  name="salary" 
                  value={formData.salary}
                  onChange={handleChange} 
                />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Account Manager" 
                  name="accountManager" 
                  value={formData.accountManager}
                  onChange={handleChange}
                >
                  <MenuItem value="Michael Brown">Michael Brown</MenuItem>
                  <MenuItem value="Manager 1">Manager 1</MenuItem>
                  <MenuItem value="Manager 2">Manager 2</MenuItem>
                </TextField>
              </Grid>

              {/* Date Opened & Job Type */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  type="date" 
                  label="Date Opened" 
                  name="dateOpened" 
                  value={formData.dateOpened}
                  onChange={handleChange} 
                  InputLabelProps={{ shrink: true }} 
                />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Job Type" 
                  name="jobType" 
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </TextField>
              </Grid>

              {/* Work Experience */}
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Work Experience" 
                  name="workExperience" 
                  value={formData.workExperience}
                  onChange={handleChange}
                >
                  <MenuItem value="1-3 years">1-3 years</MenuItem>
                  <MenuItem value="3-5 years">3-5 years</MenuItem>
                  <MenuItem value="5-7 years">5-7 years</MenuItem>
                  <MenuItem value="7+ years">7+ years</MenuItem>
                </TextField>
              </Grid>

              {/* Technical Skills */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">Technical Skills:</Typography>
                    <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
                      <TextField
                        label="Enter Technical Skill"
                        fullWidth
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                      />
                      <IconButton color="primary" onClick={handleAddSkill}>
                        <AddCircleIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      {formData.technicalSkills.map((skill, index) => (
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
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Second Column: Address Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "white", padding: "20px", borderRadius: "4px" }}>
            <Typography variant="h6" mb={2}>
              Address Information
            </Typography>
            <RadioGroup row value={formData.addressType} name="addressType" onChange={handleChange}>
              <FormControlLabel value="Use Client Address" control={<Radio />} label="Use Client Address" />
              <FormControlLabel value="Remote Job" control={<Radio />} label="Remote Job" />
              <FormControlLabel value="Enter Address" control={<Radio />} label="Enter Address" />
            </RadioGroup>

            <TextField 
              fullWidth 
              label="Address Line 1" 
              name="address" 
              value={formData.address}
              sx={{ mt: 2 }} 
              onChange={handleChange} 
            />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="Country" 
                  name="country" 
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="State" 
                  name="state" 
                  value={formData.state}
                  onChange={handleChange}
                >
                  <MenuItem value="California">California</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Texas">Texas</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  select 
                  label="City" 
                  name="city" 
                  value={formData.city}
                  onChange={handleChange}
                >
                  <MenuItem value="San Francisco">San Francisco</MenuItem>
                  <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  fullWidth 
                  label="Pin Code" 
                  name="pinCode" 
                  value={formData.pinCode}
                  onChange={handleChange} 
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Third Column: Revenue Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "white", padding: "20px", borderRadius: "4px" }}>
            <Typography variant="h6" mb={2}>
              Revenue
            </Typography>
            <TextField 
              fullWidth 
              label="Revenue Per Position" 
              name="revenuePerPosition" 
              value={formData.revenuePerPosition}
              onChange={handleChange} 
            />
            <TextField 
              fullWidth 
              label="Number of Positions" 
              name="numberOfPositions" 
              value={formData.numberOfPositions}
              sx={{ mt: 2 }} 
              onChange={handleChange} 
            />
            <TextField 
              fullWidth 
              label="Total Revenue" 
              name="totalRevenue" 
              value={formData.totalRevenue}
              sx={{ mt: 2 }} 
              onChange={handleChange} 
            />
          </Box>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" size="large" sx={{ px: 40 }}>
          Update
        </Button>
      </Box>
    </Box>
  );
};