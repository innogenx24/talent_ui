import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const EditAccountForm = () => {
  const [formData, setFormData] = useState({
    candidateId: "1",
    candidateName: "John Doe",
    candidateType: "Type1",
    doj: "2024-01-15",
    title: "Software Engineer",
    company: "Company A",
    department: "Dept1",
    category: "Cat1",
    verticalHead: "VH1",
    client: "Qualcomm",
    projectStartDate: "2024-02-01",
    location: "Loc1",
    totalCTC: "100000",
    salary: "60000",
    professionalCharges: "20000",
    totalCost: "80000",
    billingAmount: "120000",
    margin: "40000",
    gmPercent: "10",
    remarks: "Existing account details",
    subDepartment: "VLSI",
    revenueMode: "T&M",
    billableStatus: "Billable",
    reportingManager: "Manager1",
    poEnd: "2025-12-31",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "150%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Edit Account Details
      </Typography>{" "}
      <Grid container spacing={3}>
        {/* Basic Details (Left Side) */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Basic Details:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Candidate ID</InputLabel>
                  <Select
                    name="candidateId"
                    value={formData.candidateId}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">Candidate 1</MenuItem>
                    <MenuItem value="2">Candidate 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Candidate Name"
                  name="candidateName"
                  margin="normal"
                  value={formData.candidateName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Candidate Type</InputLabel>
                  <Select
                    name="candidateType"
                    value={formData.candidateType}
                    onChange={handleChange}
                  >
                    <MenuItem value="Type1">Type 1</MenuItem>
                    <MenuItem value="Type2">Type 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="DOJ"
                  type="date"
                  name="doj"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={formData.doj}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Title/Designation"
              name="title"
              margin="normal"
              value={formData.title}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Company</InputLabel>
              <Select
                name="company"
                value={formData.company}
                onChange={handleChange}
              >
                <MenuItem value="Company A">Company A</MenuItem>
                <MenuItem value="Company B">Company B</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              {/* Company */}

              {/* Department */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Department</InputLabel>
                  <Select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <MenuItem value="Dept1">Dept 1</MenuItem>
                    <MenuItem value="Dept2">Dept 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Category */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <MenuItem value="Cat1">Cat1</MenuItem>
                    <MenuItem value="Cat2">Cat2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Vertical Head */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Vertical Head</InputLabel>
                  <Select
                    name="verticalHead"
                    value={formData.verticalHead}
                    onChange={handleChange}
                  >
                    <MenuItem value="VH1">VH1</MenuItem>
                    <MenuItem value="VH2">VH2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Client */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Client</InputLabel>
                  <Select
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                  >
                    <MenuItem value="Qualcomm">Qualcomm</MenuItem>
                    <MenuItem value="Intel">Intel</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Project Start Date */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Project Start Date"
                  type="date"
                  name="projectStartDate"
                  value={formData.projectStartDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              {/* Location */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Location</InputLabel>
                  <Select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <MenuItem value="Loc1">Loc1</MenuItem>
                    <MenuItem value="Loc2">Loc2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Account Information (Middle) */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Accounts Information:
            </Typography>
            <TextField
              fullWidth
              label="Total CTC"
              name="totalCTC"
              margin="normal"
              value={formData.totalCTC}
              onChange={handleChange}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Salary"
                  name="salary"
                  margin="normal"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Professional Charges"
                  name="professionalCharges"
                  margin="normal"
                  value={formData.professionalCharges}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Total Cost"
                  name="totalCost"
                  margin="normal"
                  disabled
                  value={formData.totalCost}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Billing Amount"
                  name="billingAmount"
                  margin="normal"
                  value={formData.billingAmount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Margin"
              name="margin"
              margin="normal"
              disabled
              value={formData.margin}
            />
            <TextField
              fullWidth
              label="GM%"
              name="gmPercent"
              margin="normal"
              value={formData.gmPercent}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Remarks"
              name="remarks"
              margin="normal"
              multiline
              rows={2}
              value={formData.remarks}
              onChange={handleChange}
            />
          </Box>
        </Grid>

        {/* Other Details (Right Side) */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Other Details:{" "}
            </Typography>{" "}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Sub Department</InputLabel>
                  <Select
                    name="subDepartment"
                    value={formData.subDepartment}
                    onChange={handleChange}
                  >
                    <MenuItem value="VLSI">VLSI</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Revenue Mode</InputLabel>
                  <Select
                    name="revenueMode"
                    value={formData.revenueMode}
                    onChange={handleChange}
                  >
                    <MenuItem value="T&M">T&M</MenuItem>
                    <MenuItem value="Fixed">Fixed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Billable Status</InputLabel>
                  <Select
                    name="billableStatus"
                    value={formData.billableStatus}
                    onChange={handleChange}
                  >
                    <MenuItem value="Billable">Billable</MenuItem>
                    <MenuItem value="Non-Billable">Non-Billable</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Reporting Manager</InputLabel>
                  <Select
                    name="reportingManager"
                    value={formData.reportingManager}
                    onChange={handleChange}
                  >
                    <MenuItem value="Manager1">Manager1</MenuItem>
                    <MenuItem value="Manager2">Manager2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="PO End"
                  type="date"
                  name="poEnd"
                  margin="normal"
                  value={formData.poEnd}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default EditAccountForm;
