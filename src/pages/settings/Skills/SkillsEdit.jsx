import React, { useState } from "react";
import { 
  Card, CardContent, TextField, Typography, 
  Button, MenuItem, Select, Grid, Box, FormControlLabel, Switch 
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const SkillsEdit = () => {
  const [skills, setSkills] = useState(["React", "JavaScript"]); // Dummy Data
  const [jobTitle, setJobTitle] = useState("Developer"); // Dummy Data
  const [jobDescription, setJobDescription] = useState("Experienced in frontend development with React."); // Dummy Data
  const [isActive, setIsActive] = useState(true);

  const handleAddSkill = () => {
    setSkills([...skills, ""]); // Adds an empty skill input
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        {/* Left Form - Skills Form */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Skill:
              </Typography>

              {skills.map((skill, index) => (
                <TextField
                  key={index}
                  label={`Skill ${index + 1}*`}
                  placeholder="Enter Skill"
                  fullWidth
                  margin="normal"
                  value={skill}
                />
              ))}

              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddSkill}
                sx={{ mt: 1, mb: 2 }}
              >
                Add Skill
              </Button>

              <Typography variant="body1" fontWeight="bold">
                Job Title*
              </Typography>
              <Select 
                fullWidth 
                displayEmpty 
                sx={{ my: 2 }} 
                value={jobTitle}
              >
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
              </Select>

              <Typography variant="body1" fontWeight="bold">
                Job Description*
              </Typography>
              <TextField
                placeholder="Enter Job Description"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={jobDescription}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Form - Control */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Control:
              </Typography>
              <FormControlLabel
                control={
                  <Switch 
                    checked={isActive} 
                    onChange={(e) => setIsActive(e.target.checked)} 
                  />
                }
                label="Active Status*"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Save Button - Centered */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ px: 40 }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
