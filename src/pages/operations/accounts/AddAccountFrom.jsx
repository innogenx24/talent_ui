import React from "react";
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

const AddAccountForm = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add Account Details
      </Typography>{" "}
      <Grid container spacing={3}>
        {/* Basic Details (Left Side) */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Basic Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Candidate ID</InputLabel>
                  <Select>
                    <MenuItem value="1">Candidate 1</MenuItem>
                    <MenuItem value="2">Candidate 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Candidate Name" margin="normal" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Candidate Type</InputLabel>
                  <Select>
                    <MenuItem value="Type1">Type 1</MenuItem>
                    <MenuItem value="Type2">Type 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="DOJ"
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            <TextField fullWidth label="Title/Designation" margin="normal" />
            <FormControl fullWidth margin="normal">
              <InputLabel>Company</InputLabel>
              <Select>
                <MenuItem value="Company A">Company A</MenuItem>
                <MenuItem value="Company B">Company B</MenuItem>
              </Select>
            </FormControl>
            {/* New Grid Section */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Department</InputLabel>
                  <Select>
                    <MenuItem value="Dept1">Dept 1</MenuItem>
                    <MenuItem value="Dept2">Dept 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Category</InputLabel>
                  <Select>
                    <MenuItem value="Cat1">Category 1</MenuItem>
                    <MenuItem value="Cat2">Category 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Vertical Head</InputLabel>
                  <Select>
                    <MenuItem value="VH1">Vertical Head 1</MenuItem>
                    <MenuItem value="VH2">Vertical Head 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Client"
                  margin="normal"
                  defaultValue="Qualcomm"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Project/Client Start Date"
                  margin="normal"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Location</InputLabel>
                  <Select>
                    <MenuItem value="Loc1">Location 1</MenuItem>
                    <MenuItem value="Loc2">Location 2</MenuItem>
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
              Accounts Information:{" "}
            </Typography>
            <TextField fullWidth label="Total CTC" margin="normal" />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Salary" margin="normal" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Professional Charges"
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Total Cost"
                  margin="normal"
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Billing Amount" margin="normal" />
              </Grid>
            </Grid>

            <TextField fullWidth label="Margin" margin="normal" disabled />
            <TextField fullWidth label="GM%" margin="normal" defaultValue={0} />
            <TextField
              fullWidth
              label="Remarks"
              margin="normal"
              multiline
              rows={2}
            />
          </Box>
        </Grid>

        {/* Other Details (Right Side) */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F8F6FC" p={2} borderRadius={2}>
            <Typography variant="h6" gutterBottom>
              Other Details:{" "}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Sub Department</InputLabel>
                  <Select>
                    <MenuItem value="VLSI">VLSI</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Revenue Mode</InputLabel>
                  <Select>
                    <MenuItem value="T&M">T&M</MenuItem>
                    <MenuItem value="Fixed">Fixed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Billable/Non Billable</InputLabel>
                  <Select>
                    <MenuItem value="Billable">Billable</MenuItem>
                    <MenuItem value="Non Billable">Non Billable</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Reporting Manager</InputLabel>
                  <Select>
                    <MenuItem value="Manager1">Manager 1</MenuItem>
                    <MenuItem value="Manager2">Manager 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="PO End" margin="normal" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Save Button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddAccountForm;
