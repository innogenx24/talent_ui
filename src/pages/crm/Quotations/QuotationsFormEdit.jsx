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

export const QuotationsFormEdit = () => {
  const [positions, setPositions] = useState([
    { jobTitle: "Software Engineer", experience: "0-3", skillSet: "React, Node.js", cost: 5000, quantity: 1 },
  ]);
  const [totalCost, setTotalCost] = useState(5000);
  const [totalPositions, setTotalPositions] = useState(1);

  const handleCostChange = (index, field, value) => {
    const updatedPositions = [...positions];
    updatedPositions[index][field] = value;
    setPositions(updatedPositions);
    calculateTotals(updatedPositions);
  };

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

  const addPosition = () => {
    setPositions([...positions, { jobTitle: "Frontend Developer", experience: "3-5", skillSet: "Vue.js, Tailwind CSS", cost: 6000, quantity: 1 }]);
  };

  const removePosition = (index) => {
    const updatedPositions = positions.filter((_, i) => i !== index);
    setPositions(updatedPositions);
    calculateTotals(updatedPositions);
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} md={5}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Quotation Details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Quotation ID*" variant="outlined" defaultValue="QT-001" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth type="date" label="Quotation Date*" variant="outlined" defaultValue="2025-03-07" InputLabelProps={{ shrink: true }} /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Company Name or ID*" variant="outlined" defaultValue="ABC Corp" /></Grid>
            <Grid item xs={12} sm={6}><FormControl fullWidth variant="outlined"><InputLabel>Project Type*</InputLabel><Select defaultValue="Procurement"><MenuItem value="Procurement">Procurement</MenuItem></Select></FormControl></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth type="date" label="Procurement Start Date*" variant="outlined" defaultValue="2025-03-15" InputLabelProps={{ shrink: true }} /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth type="date" label="Procurement End Date*" variant="outlined" defaultValue="2025-04-30" InputLabelProps={{ shrink: true }} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Description" multiline rows={3} variant="outlined" defaultValue="Procurement of IT services." /></Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={7}>
        <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: "#f9f8fc" }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Project Details:
          </Typography>
          <Grid container spacing={2}>
            {positions.map((position, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}><TextField fullWidth label="Job Title" variant="outlined" defaultValue={position.jobTitle} /></Grid>
                  <Grid item xs={2}><TextField fullWidth label="Experience" variant="outlined" defaultValue={position.experience} /></Grid>
                  <Grid item xs={3}><TextField fullWidth label="Skill Set" variant="outlined" defaultValue={position.skillSet} /></Grid>
                  <Grid item xs={4} display="flex" alignItems="center">
                    <TextField fullWidth label="Cost*" variant="outlined" type="number" defaultValue={position.cost} onChange={(e) => handleCostChange(index, "cost", Number(e.target.value))} />
                    <IconButton onClick={() => handleQuantityChange(index, "decrement")} sx={{ mx: 1 }}><Remove /></IconButton>
                    <Typography sx={{ minWidth: "30px", textAlign: "center" }}>{position.quantity}</Typography>
                    <IconButton onClick={() => handleQuantityChange(index, "increment")} sx={{ mx: 1 }}><Add /></IconButton>
                    <IconButton color="error" onClick={() => removePosition(index)}><Delete /></IconButton>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Button variant="outlined" sx={{ mt: 3 }} onClick={addPosition}><Add sx={{ mr: 1 }} /> Add</Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={5}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Client Details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}><TextField fullWidth label="Company / Institute Name" variant="outlined" defaultValue="XYZ Ltd" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Client Name*" variant="outlined" defaultValue="John Doe" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Phone Number*" variant="outlined" defaultValue="+1234567890" /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Email ID*" variant="outlined" defaultValue="johndoe@example.com" /></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
