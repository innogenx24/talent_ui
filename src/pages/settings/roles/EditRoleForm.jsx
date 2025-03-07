import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import API_URL from "../../../api/Api_url";

const EditRoleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roleData, setRoleData] = useState({
    name: "",
    department: "",
    description: "",
    active_status: false,
  });

  const [departments, setDepartments] = useState([]); // State for department list
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await axios.get(`${API_URL}/roles/${id}`);
        const data = response.data;
        setRoleData({
          name: data.name || "",
          department: data.department || "",
          description: data.description || "",
          active_status: data.active_status || false,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`${API_URL}/department`);
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchRole();
    fetchDepartments();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoleData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitchChange = () => {
    setRoleData((prevData) => ({ ...prevData, active_status: !prevData.active_status }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`${API_URL}/roles/${id}`, roleData);
      if (response.status === 200) {
        navigate(`/dashboard/settings/roles`);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      alert("Failed to update role.");
    }
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", width: { xs: "100%", md: "80%" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, justifyContent: "center" }}>
        {/* Left Section - Edit Role */}
        <Card elevation={0} sx={{ flex: 1, minWidth: { xs: "100%", md: "50%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              Edit Role:
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                label="Role Name*"
                placeholder="Enter Role"
                name="name"
                value={roleData.name}
                onChange={handleChange}
              />

              <FormControl fullWidth>
                <InputLabel>Department*</InputLabel>
                <Select name="department" value={roleData.department} onChange={handleChange}>
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
              name="description"
              value={roleData.description}
              onChange={handleChange}
            />
          </CardContent>
        </Card>

        {/* Right Section - Control */}
        <Card elevation={0} sx={{ minWidth: { xs: "100%", md: "30%" }, p: 2 }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">Control:</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch checked={roleData.active_status} onChange={handleSwitchChange} color="success" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Update Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" size="large" sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }} onClick={handleSave}>
          Update Role
        </Button>
      </Box>
    </Box>
  );
};

export default EditRoleForm;
