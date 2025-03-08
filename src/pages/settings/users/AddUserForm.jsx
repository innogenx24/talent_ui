import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

const AddUserForm = () => {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branches, setBranches] = useState([]);
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${API_URL}/roles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`${API_URL}/department`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${API_URL}/branch`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchRoles();
    fetchDepartments();
    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchLocationData = async () => {
      if (pincode.length === 6) {
        try {
          const response = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`
          );
          const data = await response.json();

          if (data && data[0]?.Status === "Success") {
            const postOffice = data[0].PostOffice[0];

            setCountry("India"); // The API only provides data for India
            setState(postOffice.State);
            setCity(postOffice.District);
          } else {
            alert("Invalid Pincode. Please enter a valid one.");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          alert("Error fetching location. Try again.");
        }
      }
    };

    fetchLocationData();
  }, [pincode]);

  const handleSave = async () => {
    const userData = {
      role,
      department,
      branch,
      country,
      state,
      city,
      active_status: activeStatus,
      first_name: firstName,
      last_name: lastName,
      login_id: loginId,
      phone_number: phoneNumber,
      password,
      email,
      pincode,
      street,
      landmark,
      joining_date: joiningDate,
    };

    try {
      const response = await axios.post(`${API_URL}/users/create`, userData);
      if (response.status === 201) {
        navigate(`/dashboard/settings`);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
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
        <Card
          sx={{ flex: 1, minWidth: { xs: "100%", md: "30%" } }}
          elevation={0}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Personal Details:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: "100%", md: "48%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  type="date"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="First Name*"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Last Name*"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Login ID*"
                  placeholder="Enter Login ID"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minWidth: { xs: "100%", md: "48%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Password*"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl fullWidth>
                  <InputLabel>Select User Role</InputLabel>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {roles.map((r) => (
                      <MenuItem key={r.id} value={r.name}>
                        {r.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Select Department</InputLabel>
                  <Select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    {departments.map((d) => (
                      <MenuItem key={d.id} value={d.department_name}>
                        {d.department_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Select Branch</InputLabel>
                  <Select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    {branches.map((b) => (
                      <MenuItem key={b.id} value={b.branch_name}>
                        {b.branch_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <TextField
              fullWidth
              label="Phone Number*"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              fullWidth
              label="Email ID*"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Address:
            </Typography>
            <TextField
              fullWidth
              label="Pincode*"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country" value={country} disabled />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="State" value={state} disabled />
              </Grid>
            </Grid>

            <TextField fullWidth label="District" value={city} disabled />

            <TextField
              fullWidth
              label="Landmark"
              placeholder="Enter Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            <TextField
              fullWidth
              label="Street*"
              placeholder="Enter Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
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
                checked={activeStatus}
                onChange={() => setActiveStatus(!activeStatus)}
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

export default AddUserForm;
