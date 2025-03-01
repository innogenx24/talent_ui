import React from "react";
import { Card, CardContent, Avatar, Typography, Grid, Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { CiLogout } from "react-icons/ci";

const ProfilePage = () => {
  const user = {
    name: "Ajay Kumar",
    role: "Manager (Admin)",
    address: "4/1, Bannerghatta Rd, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029.",
    phone: "+91 9858655855",
    email: "ajaykumar@gmail.com",
    password: "Password12",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  };

//   const permissions = [
//     "Add & Edit Users",
//     "Delete User",
//     "Add & Edit Users",
//     "Add & Edit Users",
//     "Add & Edit Users",
//     "Add & Edit Users",
//     "Add & Edit Users",
//     "Add & Edit Users",
//   ];

  return (
    <Grid container spacing={3} sx={{ padding: 3, background: "#F8F8FC" }}>
      {/* Profile Section */}
      <Grid item xs={12} md={5}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={user.image} sx={{ width: 80, height: 80 }} />
              </Grid>
              <Grid item>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary">{user.role}</Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              📍 {user.address}
            </Typography>
            <Typography variant="body2">📞 {user.phone}</Typography>
            <Typography variant="body2">✉️ {user.email}</Typography>
            <Typography variant="body2">🔑 {user.password}</Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <Button variant="contained" color="error" startIcon={<CiLogout />}>Logout</Button>
              <Button variant="contained" color="primary" startIcon={<EditIcon />}>Edit</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Permissions Section */}
      {/* <Grid item xs={12} md={7}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h6">Access:</Typography>
            <Grid container spacing={2}>
              {permissions.map((perm, index) => (
                <Grid item xs={6} key={index}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label={perm} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default ProfilePage;
