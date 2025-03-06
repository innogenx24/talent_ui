import React, { useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

export const QuotationsForm = () => {
  const [positions, setPositions] = useState([
    { jobTitle: "", experience: "0-3", skillSet: "", cost: 0, quantity: 0 },
  ]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalPositions, setTotalPositions] = useState(0);

  // Handle change in cost & quantity
  const handleCostChange = (index, field, value) => {
    const updatedPositions = [...positions];
    updatedPositions[index][field] = value;
    setPositions(updatedPositions);
    calculateTotals(updatedPositions);
  };

  // Increment & Decrement Quantity
  const handleQuantityChange = (index, type) => {
    const updatedPositions = [...positions];
    if (type === "increment") {
      updatedPositions[index].quantity += 1;
    } else if (type === "decrement" && updatedPositions[index].quantity > 0) {
      updatedPositions[index].quantity -= 1;
    }
    setPositions(updatedPositions);
    calculateTotals(updatedPositions);
  };

  // Calculate Total Cost & Positions
  const calculateTotals = (updatedPositions) => {
    const totalCost = updatedPositions.reduce(
      (sum, item) => sum + item.cost * item.quantity,
      0
    );
    const totalPositions = updatedPositions.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setTotalCost(totalCost);
    setTotalPositions(totalPositions);
  };

  // Add New Position
  const addPosition = () => {
    setPositions([...positions, { jobTitle: "", experience: "0-3", skillSet: "", cost: 0, quantity: 0 }]);
  };

  // Remove Position
  const removePosition = (index) => {
    const updatedPositions = positions.filter((_, i) => i !== index);
    setPositions(updatedPositions);
    calculateTotals(updatedPositions);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {/* Top Buttons */}
      <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="text">Preview</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Send Quotation
          </Button>
        </Grid>
      </Grid>

      {/* Left Section - Quotation Details */}
      <Grid item xs={12} md={5}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Quotation Details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Quotation ID*" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="date" label="Quotation Date*" variant="outlined" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company Name or ID*" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Project Type*</InputLabel>
                <Select defaultValue="Procurement" label="Project Type*">
                  <MenuItem value="Procurement">Procurement</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="date" label="Procurement Start Date*" variant="outlined" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="date" label="Procurement End Date*" variant="outlined" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" multiline rows={3} variant="outlined" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Right Section - Project Details (Wider) */}
      <Grid item xs={12} md={7}>
        <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: "#f9f8fc" }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Project Details:
          </Typography>
          <Grid container spacing={2}>
            {positions.map((position, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Select Job Title</InputLabel>
                      <Select defaultValue="" label="Job Title*">
                        <MenuItem value="">Select Job Title</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Ex*</InputLabel>
                      <Select defaultValue="0-3" label="Experience*">
                        <MenuItem value="0-3">0-3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField fullWidth label="Skill Set" placeholder="Enter Skill Set" variant="outlined" />
                  </Grid>
                  <Grid item xs={4} display="flex" alignItems="center">
                    <TextField
                      fullWidth
                      label="Cost of Candidate*"
                      placeholder="Enter Amount"
                      variant="outlined"
                      type="number"
                      onChange={(e) => handleCostChange(index, "cost", Number(e.target.value))}
                    />
                    <IconButton onClick={() => handleQuantityChange(index, "decrement")} sx={{ mx: 1 }}>
                      <Remove />
                    </IconButton>
                    <Typography sx={{ minWidth: "30px", textAlign: "center" }}>
                      {position.quantity}
                    </Typography>
                    <IconButton onClick={() => handleQuantityChange(index, "increment")} sx={{ mx: 1 }}>
                      <Add />
                    </IconButton>
                    <IconButton color="error" onClick={() => removePosition(index)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Button variant="outlined" sx={{ mt: 3 }} onClick={addPosition}>
            <Add sx={{ mr: 1 }} /> Add
          </Button>

          <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: "#000", color: "#fff", mx: 1 }}>
              Total Position: {totalPositions}
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#000", color: "#fff" }}>
              Total Cost: {totalCost}
            </Button>
          </Grid>
        </Paper>
      </Grid>

      {/* Client Details */}
      <Grid item xs={12} md={5}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Client Details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}><TextField fullWidth label="Company / Institute Name" variant="outlined" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Client Name*" variant="outlined" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Phone Number*" variant="outlined" /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Email ID*" variant="outlined" /></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
