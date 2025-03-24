import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Switch,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../../../api/Api_url";

const EditDepartmentForm = () => {
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch existing department data based on ID
  useEffect(() => {
    const fetchDepartment = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/department/${id}`);
        if (!response.ok) throw new Error("Failed to fetch department details");
        const data = await response.json();

        setDepartment(data.department_name || "");
        setDescription(data.description || "");
        setActiveStatus(data.active_status || false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDepartment();
  }, [id]);

  // Handle updating department details
  const handleSaveDepartment = async () => {

    const updatedDepartment = {
      department_name: department,
      description: description,
      active_status: activeStatus,
    };

    try {
      const response = await fetch(`${API_URL}/department/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDepartment),
      });

      if (!response.ok) {
        throw new Error("Failed to update department");
      }
      navigate("/dashboard/settings/department");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to update department. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "100%", md: "80%" } }}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Edit Department
      </Typography>

      {loading && <Typography align="center">Loading...</Typography>}
      {error && <Typography color="error" align="center">{error}</Typography>}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Left Section - Edit Department */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Department Details:
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
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </Box>
    </Box>
  );
};

export default EditDepartmentForm;
