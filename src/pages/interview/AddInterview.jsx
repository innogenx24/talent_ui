import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddInterview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    candidateName: "",
    interviewer: "",
    date: "",
    time: "",
    status: "Scheduled",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Interview Details:", formData);
    // Call API to save interview details
    navigate("/dashboard/interview");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper sx={{ padding: 3, width: "400px" }}>
        <Typography variant="h5" mb={2}>Add Interview</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Candidate Name"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Interviewer"
            name="interviewer"
            value={formData.interviewer}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            type="time"
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => navigate("/dashboard/interview")}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Save</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddInterview;
