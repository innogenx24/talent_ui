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
  Grid,
} from "@mui/material";
import axios from "axios";
import API_URL from "../../../api/Api_url";

const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    joiningDate: "",
    first_name: "",
    last_name: "",
    loginId: "",
    phone_number: "",
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

  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [branches, setBranches] = useState([]);

  // Fetch user data, roles, and departments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, rolesRes, departmentsRes, branchesRes] = await Promise.all([
          axios.get(`${API_URL}/users/${id}`),
          axios.get(`${API_URL}/roles`),
          axios.get(`${API_URL}/department`),
          axios.get(`${API_URL}/branch`),
        ]);

        const userData = userRes.data;
        setUserData({
          joiningDate: userData.joining_date || "",
          first_name: userData.first_name || "",
          last_name: userData.last_name || "",
          loginId: userData.login_id || "",
          password: "",
          role: userData.role || "",
          department: userData.department || "",
          phone_number: userData.phone_number || "",
          branch: userData.branch || "",
          email: userData.email || "",
          pincode: userData.pincode || "",
          country: userData.country || "",
          state: userData.state || "",
          city: userData.city || "",
          landmark: userData.landmark || "",
          street: userData.street || "",
          active_status: userData.active_status || false,
        });

        setRoles(rolesRes.data || []);
        setDepartments(departmentsRes.data || []);
        setBranches(branchesRes.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const fetchLocationDetails = async (pincode) => {
    if (pincode.length !== 6) return; // Ensure it's a valid pincode length

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      if (response.data && response.data[0].Status === "Success") {
        const postOffice = response.data[0].PostOffice[0];

        setUserData((prevData) => ({
          ...prevData,
          country: "India", // Assuming India for this API
          state: postOffice.State,
          city: postOffice.District,
        }));
      } else {
        alert("Invalid Pincode!");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "pincode") {
      fetchLocationDetails(value);
    }
  };

  const handleSwitchChange = () => {
    setUserData((prevData) => ({
      ...prevData,
      active_status: !prevData.active_status,
    }));
  };

  const handleSave = async () => {
    try {
      const updatedUser = { ...userData };
      const response = await axios.put(`${API_URL}/users/${id}`, updatedUser);

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

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Card sx={{ flex: 1 }} elevation={0}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Personal Details:
            </Typography>

            <Grid container spacing={2}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="User ID*" value={id} disabled />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Leave blank to keep current password"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Joining Date*"
                  type="date"
                  name="joiningDate"
                  value={userData.joiningDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>User Role</InputLabel>
                  <Select
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role.id} value={role.name}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name*"
                  name="first_name"
                  value={userData.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Department</InputLabel>
                  <Select
                    name="department"
                    value={userData.department}
                    onChange={handleChange}
                  >
                    {departments.map((dept) => (
                      <MenuItem key={dept.id} value={dept.department_name}>
                        {dept.department_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Branch</InputLabel>
                  <Select
                    name="branch"
                    value={userData.branch}
                    onChange={handleChange}
                  >
                    {branches.map((branch) => (
                      <MenuItem key={branch.id} value={branch.branch_name}>
                        {branch.branch_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last Name*"
                  name="last_name"
                  value={userData.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Login ID*"
                  name="loginId"
                  value={userData.loginId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number*"
                  name="phone_number"
                  value={userData.phone_number || ""}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email ID*"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card
          sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }}
          elevation={0}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Address:
            </Typography>
            <TextField
              fullWidth
              label="Pincode*"
              name="pincode"
              value={userData.pincode}
              onChange={handleChange}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  value={userData.country}
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="State"
                  value={userData.state}
                  disabled
                />
              </Grid>
            </Grid>

            <TextField fullWidth label="District" value={userData.city} disabled />

            <TextField
              fullWidth
              label="Landmark"
              name="landmark"
              value={userData.landmark}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Street*"
              name="street"
              value={userData.street}
              onChange={handleChange}
            />
          </CardContent>
        </Card>

        <Card
          sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }}
          elevation={0}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Control:
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Active Status*</Typography>
              <Switch
                checked={userData.active_status}
                onChange={handleSwitchChange}
                color="success"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ width: { xs: "100%", sm: "60%", md: "30%" } }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditUserForm;
