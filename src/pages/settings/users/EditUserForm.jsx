import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
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

const EditUserForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    joiningDate: "",
    first_name: "",
    last_name: "",
    loginId: "",
    password: "",
    role: "",
    department: "",
    branch: "",
    email: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    landmark: "",
    street: "",
    active_status: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        const data = response.data;

        setUserData({
          joiningDate: data.joining_date || "",
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          loginId: data.login_id || "",
          password: "", // Hide hashed password for security
          role: data.role || "",
          department: data.department || "",
          branch: data.branch || "",
          email: data.email || "",
          pincode: data.pincode || "",
          country: data.country || "",
          state: data.state || "",
          city: data.city || "",
          landmark: data.landmark || "",
          street: data.street || "",
          active_status: data.active_status || false,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitchChange = () => {
    setUserData((prevData) => ({ ...prevData, active_status: !prevData.active_status }));
  };

  const handleSave = async () => {
    try {
      const updatedUser = { ...userData };
      

      const response = await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);

      if (response.status === 200) {
        navigate(`/dashboard/settings`);

      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>Personal Details:</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "48%" }, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField fullWidth label="User ID*" value={id} disabled />
                <TextField fullWidth label="Joining Date*" type="date" name="joiningDate" value={userData.joiningDate} onChange={handleChange} />
                <TextField fullWidth label="First Name*" name="first_name" value={userData.first_name} onChange={handleChange} />
<TextField fullWidth label="Last Name*" name="last_name" value={userData.last_name} onChange={handleChange} />


                <TextField fullWidth label="Login ID*" name="loginId" value={userData.loginId} onChange={handleChange} />
              </Box>
              <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "48%" }, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField fullWidth label="New Password" type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Leave blank to keep current password" />
                <FormControl fullWidth>
                  <InputLabel>User Role</InputLabel>
                  <Select name="role" value={userData.role} onChange={handleChange}>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Department</InputLabel>
                  <Select name="department" value={userData.department} onChange={handleChange}>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Branch</InputLabel>
                  <Select name="branch" value={userData.branch} onChange={handleChange}>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="California">California</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <TextField fullWidth label="Email ID*" name="email" value={userData.email} onChange={handleChange} />
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>Address:</Typography>
            <TextField fullWidth label="Pincode*" name="pincode" value={userData.pincode} onChange={handleChange} />
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select name="country" value={userData.country} onChange={handleChange}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select name="state" value={userData.state} onChange={handleChange}>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth label="City" name="city" value={userData.city} onChange={handleChange} />
            <TextField fullWidth label="Landmark" name="landmark" value={userData.landmark} onChange={handleChange} />
            <TextField fullWidth label="Street*" name="street" value={userData.street} onChange={handleChange} />
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }} elevation={0}>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" gutterBottom>Control:</Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch checked={userData.active_status} onChange={handleSwitchChange} color="success" />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" color="primary" size="large" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditUserForm;
