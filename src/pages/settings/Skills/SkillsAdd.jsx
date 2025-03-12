import React, { useState } from "react";
import { 
  Card, CardContent, TextField, Typography, 
  Button, MenuItem, Select, Grid, Box, FormControlLabel, Switch 
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const SkillsAdd = () => {
  const [skills, setSkills] = useState([""]);
  const [isActive, setIsActive] = useState(true);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        {/* Left Form - Skills Form (Fixed Width) */}
        <Grid item xs={12} md={5}>  
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Skill:
              </Typography>

              {skills.map((_, index) => (
                <TextField
                  key={index}
                  label={`Skill ${index + 1}*`}
                  placeholder="Enter Skill"
                  fullWidth
                  margin="normal"
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
              <Select fullWidth displayEmpty sx={{ my: 2 }}>
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
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

      {/* Save Button - Left Aligned */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
  <Button variant="contained" color="primary" sx={{ px: 40 }}>
    Save
  </Button>
</Box>

    </Box>
  );
};
