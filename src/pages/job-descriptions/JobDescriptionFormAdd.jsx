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

const JobDescriptionFormAdd = () => {
  const [formData, setFormData] = useState({
    jobOpeningId: "Job_123",
    jobTitle: "",
    clientName: "",
    contactName: "",
    assignedRecruiter: "",
    targetDate: "",
    jobOpeningStatus: "",
    industry: "",
    salary: "",
    accountManager: "",
    dateOpened: "",
    jobType: "",
    workExperience: "",
    technicalSkills: [],
    addressType: "Use Client Address",
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    revenuePerPosition: "",
    numberOfPositions: "",
    totalRevenue: "",
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
                <TextField fullWidth label="Job Opening ID" value="Job_123" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Job Title" name="jobTitle" onChange={handleChange} />
              </Grid>

              {/* Client Name & Contact Name in One Row */}
              <Grid item xs={6}>
                <TextField fullWidth select label="Client Name" name="clientName" onChange={handleChange}>
                  <MenuItem value="Client 1">Client 1</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Contact Name" name="contactName" onChange={handleChange} />
              </Grid>

              {/* Assigned Recruiter & Target Date */}
              <Grid item xs={6}>
                <TextField fullWidth select label="Assigned Recruiter" name="assignedRecruiter" onChange={handleChange}>
                  <MenuItem value="Recruiter 1">Recruiter 1</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth type="date" label="Target Date" name="targetDate" onChange={handleChange} InputLabelProps={{ shrink: true }} />
              </Grid>

              {/* Job Opening Status (now full width) */}
              <Grid item xs={12}>
                <TextField fullWidth select label="Job Opening Status" name="jobOpeningStatus" onChange={handleChange}>
                  <MenuItem value="Open">Open</MenuItem>
                </TextField>
              </Grid>

              {/* Industry */}
              <Grid item xs={6}>
                <TextField fullWidth select label="Industry" name="industry" onChange={handleChange}>
                  <MenuItem value="IT">IT</MenuItem>
                </TextField>
              </Grid>

              {/* Salary & Account Manager */}
              <Grid item xs={6}>
                <TextField fullWidth label="Salary" name="salary" onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth select label="Account Manager" name="accountManager" onChange={handleChange}>
                  <MenuItem value="Manager 1">Manager 1</MenuItem>
                </TextField>
              </Grid>

              {/* Date Opened & Job Type */}
              <Grid item xs={6}>
                <TextField fullWidth type="date" label="Date Opened" name="dateOpened" onChange={handleChange} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth select label="Job Type" name="jobType" onChange={handleChange}>
                  <MenuItem value="Full-time">Full-time</MenuItem>
                </TextField>
              </Grid>

              {/* Work Experience */}
              <Grid item xs={6}>
                <TextField fullWidth select label="Work Experience" name="workExperience" onChange={handleChange}>
                  <MenuItem value="3-5 years">3-5 years</MenuItem>
                </TextField>
              </Grid>

              {/* Technical Skills - Replaced with Card component */}
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

            <TextField fullWidth label="Address Line 1" name="address" sx={{ mt: 2 }} onChange={handleChange} />
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <TextField fullWidth select label="Country" name="country" onChange={handleChange}>
                  <MenuItem value="USA">USA</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth select label="State" name="state" onChange={handleChange}>
                  <MenuItem value="California">California</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth select label="City" name="city" onChange={handleChange}>
                  <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Pin Code" name="pinCode" onChange={handleChange} />
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
            <TextField fullWidth label="Revenue Per Position" name="revenuePerPosition" onChange={handleChange} />
            <TextField fullWidth label="Number of Positions" name="numberOfPositions" sx={{ mt: 2 }} onChange={handleChange} />
            <TextField fullWidth label="Total Revenue" name="totalRevenue" sx={{ mt: 2 }} onChange={handleChange} />
          </Box>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" size="large"   sx={{ px: 40 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default JobDescriptionFormAdd;