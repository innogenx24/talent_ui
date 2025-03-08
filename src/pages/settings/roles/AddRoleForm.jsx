import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../../api/Api_url";

const AddRoleForm = () => {
  const [roleName, setRoleName] = useState("");
  const [department, setDepartment] = useState("");
  const [departments, setDepartments] = useState([]); // State for departments
  const [description, setDescription] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch department list
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`${API_URL}/department`);
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleSaveRole = async () => {
    if (!roleName || !department) {
      alert("Role Name and Department are required.");
      return;
    }

    setLoading(true);

    const roleData = {
      name: roleName,
      department,
      description,
      active_status: activeStatus,
    };

    try {
      await axios.post(`${API_URL}/roles/create`, roleData);
      setRoleName("");
      setDepartment("");
      setDescription("");
      setActiveStatus(true);
      navigate(`/dashboard/settings/roles`);
    } catch (error) {
      console.error("Error creating role:", error);
      alert("Failed to create role. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "200%", md: "80%" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, justifyContent: "center" }}>
        {/* Left Section - Create Role */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Create Role:
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                label="Role Name*"
                placeholder="Enter Role"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              />

              <FormControl fullWidth>
                <InputLabel>Department*</InputLabel>
                <Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                  {departments.map((dept) => (
                    <MenuItem key={dept.id} value={dept.department_name}>
                      {dept.department_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

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
              <Switch checked={activeStatus} onChange={() => setActiveStatus(!activeStatus)} color="success" />
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
          onClick={handleSaveRole}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Role"}
        </Button>
      </Box>
    </Box>
  );
};

export default AddRoleForm;
