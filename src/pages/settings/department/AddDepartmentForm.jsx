import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
} from "@mui/material";
import API_URL from "../../../api/Api_url";
import { useNavigate } from "react-router-dom";

const AddDepartmentForm = () => {
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleSaveDepartment = async () => {
    setLoading(true);
    setError(null);

    const departmentData = {
      department_name: department,
      description: description,
      active_status: activeStatus,
    };

    try {
      const response = await fetch(`${API_URL}/department/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departmentData),
      });

      if (!response.ok) {
        throw new Error("Failed to create department");
      }

      const result = await response.json();
      navigate("/dashboard/settings/department");
     

    } catch (err) {
      console.error("Error:", err);
      setError("Failed to create department. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        width: { xs: "200%", md: "80%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Left Section - Create Department */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Create Department:
            </Typography>

            <TextField
              fullWidth
              label="Department*"
              placeholder="Enter Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CardContent>
        </Card>

        {/* Right Section - Control */}
        <Card elevation={0} sx={{ minWidth: { xs: "100%", md: "30%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">Control:</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch
                checked={activeStatus}
                onChange={(e) => setActiveStatus(e.target.checked)}
                color="success"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Save Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleSaveDepartment}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Department"}
        </Button>
      </Box>

      {/* Error Message */}
      {error && (
        <Typography color="error" align="center" mt={2}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default AddDepartmentForm;
