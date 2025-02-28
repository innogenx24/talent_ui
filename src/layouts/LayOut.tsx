import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Tabs, Tab } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import NavLogo from "../assets/logos/NavLogo.svg";
import BackwordIcon from "../assets/logos/BackwordIcon.svg";
import ForvordIcon from "../assets/logos/ForvordIcon.svg";
import SettingIcon from "../assets/logos/SettingIcon.svg";
import { Outlet } from "react-router-dom";

const menuItems = [
  { id: 0, text: "User", icon: <PeopleIcon /> },
  { id: 1, text: "Roles", icon: <WorkIcon /> },
  { id: 2, text: "Department", icon: <BusinessIcon /> },
  { id: 3, text: "Exp Range", icon: <AccountTreeIcon /> },
  { id: 4, text: "Branches", icon: <HomeWorkIcon /> },
];

const navItems = ["Dashboard", "Job Description", "Interview", "Candidate", "CRM", "Operations", "Vendor"];

const LayOut = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0); // ✅ Define state for Tabs
  const [selectedItem, setSelectedItem] = useState(0); // First item selected
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Navbar (Full Width) */}
      <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300, backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
        

<Box display="flex" alignItems="center">
  {/* Backward Button */}
  <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40 }}>
    <Box component="img" src={BackwordIcon} alt="Backward" sx={{ width: 18, height: 18 }} />
  </IconButton>

  {/* Forward Button */}
  <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40, ml: 1 }}>
    <Box component="img" src={ForvordIcon} alt="Forward" sx={{ width: 18, height: 18 }} />
  </IconButton>

  {/* Logo */}
  <IconButton>
    <Box component="img" src={NavLogo} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover",ml: 1 }} />
  </IconButton>
</Box>



          {/* Navigation Tabs */}
          <Tabs value={selectedTab} onChange={(_, newValue) => setSelectedTab(newValue)} textColor="primary" indicatorColor="primary">
            {navItems.map((item, index) => (
              <Tab key={index} label={item} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
            ))}
          </Tabs>

          <Box display="flex" alignItems="center">
            <IconButton sx={{ color: "#000" }}>
            <IconButton>
    <Box component="img" src={SettingIcon} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover",ml: 1 }} />
  </IconButton>
            </IconButton>
            <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
            <Typography sx={{ color:'#171719', ml:1}}>Ajay Kumar</Typography>
          </Box>
        </Toolbar>
      </AppBar>


  {/* Toolbar as a spacer to push content below AppBar */}
  <Toolbar /> 

  <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
  >
    <Outlet />
  </Box>
      
    </Box>
  );
};

export default LayOut;




















// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Tabs, Tab } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PeopleIcon from "@mui/icons-material/People";
// import WorkIcon from "@mui/icons-material/Work";
// import BusinessIcon from "@mui/icons-material/Business";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import HomeWorkIcon from "@mui/icons-material/HomeWork";
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import NavLogo from "../assets/logos/NavLogo.svg";
// import BackwordIcon from "../assets/logos/BackwordIcon.svg";
// import ForvordIcon from "../assets/logos/ForvordIcon.svg";
// import SettingIcon from "../assets/logos/SettingIcon.svg";

// const menuItems = [
//   { id: 0, text: "User", icon: <PeopleIcon /> },
//   { id: 1, text: "Roles", icon: <WorkIcon /> },
//   { id: 2, text: "Department", icon: <BusinessIcon /> },
//   { id: 3, text: "Exp Range", icon: <AccountTreeIcon /> },
//   { id: 4, text: "Branches", icon: <HomeWorkIcon /> },
// ];

// const navItems = ["Dashboard", "Job Description", "Interview", "Candidate", "CRM", "Operations", "Vendor"];

// const LayOut = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedTab, setSelectedTab] = useState(0); // ✅ Define state for Tabs
//   const [selectedItem, setSelectedItem] = useState(0); // First item selected
  
//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
//       {/* Navbar (Full Width) */}
//       <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300, backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
        

// <Box display="flex" alignItems="center">
//   {/* Backward Button */}
//   <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40 }}>
//     <Box component="img" src={BackwordIcon} alt="Backward" sx={{ width: 18, height: 18 }} />
//   </IconButton>

//   {/* Forward Button */}
//   <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40, ml: 1 }}>
//     <Box component="img" src={ForvordIcon} alt="Forward" sx={{ width: 18, height: 18 }} />
//   </IconButton>

//   {/* Logo */}
//   <IconButton>
//     <Box component="img" src={NavLogo} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover",ml: 1 }} />
//   </IconButton>
// </Box>



//           {/* Navigation Tabs */}
//           <Tabs value={selectedTab} onChange={(_, newValue) => setSelectedTab(newValue)} textColor="primary" indicatorColor="primary">
//             {navItems.map((item, index) => (
//               <Tab key={index} label={item} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
//             ))}
//           </Tabs>

//           <Box display="flex" alignItems="center">
//             <IconButton sx={{ color: "#000" }}>
//             <IconButton>
//     <Box component="img" src={SettingIcon} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover",ml: 1 }} />
//   </IconButton>
//             </IconButton>
//             <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
//             <Typography sx={{ color:'#171719', ml:1}}>Ajay Kumar</Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar BELOW the Navbar */}

//       <Box sx={{ display: "flex", flexGrow: 1, mt: 8 }}>
//         <Drawer
//       variant="permanent"
//      sx={{
//             width: sidebarOpen ? 105 : 250,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: sidebarOpen ? 105 : 250,
//               transition: "width 0.3s ease-in-out",
//               overflowX: "hidden",
//               // mt: 8, 
//               mt: 8, 
//               pt:4,
//             },
//           }}
//     >
//       <List sx={{ width: "100%" }}>
//         {menuItems.map((item) => (
//           <ListItem key={item.id} disablePadding sx={{ justifyContent: "center" }}>
//             <ListItemButton
//               onClick={() => setSelectedItem(item.id)}
//               sx={{
//                 flexDirection: "column",
//                 alignItems: "center",
//                 py: 1,
//                 borderRadius: "10px",
//                 width: "80%",
//                 mx: "auto",
//                 mx:1,
//                 transition: "0.3s",
//                 backgroundColor: selectedItem === item.id ? "#000" : "transparent",
//                 color: selectedItem === item.id ? "#fff" : "#aaa",
//                 "&:hover": {
//                   backgroundColor: selectedItem === item.id ? "#000" : "#f5f5f5",
//                 },
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   color: selectedItem === item.id ? "#fff" : "#aaa",
//                   justifyContent: "center",
//                   minWidth: "auto",
//                 }}
//               >
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 primaryTypographyProps={{
//                   fontSize: 12,
//                   textAlign: "center",
//                   fontWeight: selectedItem === item.id ? "bold" : "normal",
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>

//         <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
//           <h1>Welcome to the Dashboard</h1>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LayOut;






















// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Tabs, Tab } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PeopleIcon from "@mui/icons-material/People";
// import WorkIcon from "@mui/icons-material/Work";
// import BusinessIcon from "@mui/icons-material/Business";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import HomeWorkIcon from "@mui/icons-material/HomeWork";
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import NavLogo from "../../assets/logos/NavLogo.svg";

// const menuItems = [
//   { text: "User", icon: <PeopleIcon /> },
//   { text: "Roles", icon: <WorkIcon /> },
//   { text: "Department", icon: <BusinessIcon /> },
//   { text: "Exp Range", icon: <AccountTreeIcon /> },
//   { text: "Branches", icon: <HomeWorkIcon /> },
// ];

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navItems = ["Dashboard", "Job Description", "Interview", "Candidate", "CRM", "Operations", "Vendor"];

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
//       {/* Navbar (Full Width) */}
//       <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300,  backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd"}}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <Box display="flex" alignItems="center">
//             <IconButton>
//               {/* <MenuIcon />
//                */}
//                        <Box
//           component="img"
//           src={NavLogo}
//           alt="Login"
//           sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//             </IconButton>
//           </Box>

//           <Tabs
//           value={selectedTab} 
//           onChange={(_, newValue) => setSelectedTab(newValue)}
//           textColor="primary"
//           indicatorColor="primary"
//         >
//           {navItems.map((item, index) => (
//             <Tab key={index} label={item} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
//           ))}
//         </Tabs>


//           <Box display="flex" alignItems="center">
//             <IconButton sx={{ color: "#000" }}>
//               <SettingsIcon />
//             </IconButton>
//             <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar BELOW the Navbar */}
//       <Box sx={{ display: "flex", flexGrow: 1, mt: 8 }}>
//         <Drawer
//           variant="permanent"
//           open={sidebarOpen}
//           sx={{
//             width: sidebarOpen ? 80 : 250,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: sidebarOpen ? 80 : 250,
//               transition: "width 0.3s ease-in-out",
//               overflowX: "hidden",
//               mt: 8, // Sidebar starts BELOW navbar
//             },
//           }}
//         >
//           <List>
//           <p><ArrowCircleRightIcon  onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: "#000", mr: 1 }}/></p>
//             {menuItems.map((item, index) => (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   {!sidebarOpen ? <ListItemText primary={item.text} /> : null}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>

//         {/* Main Content */}
//         <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
//           <h1>Welcome to the Dashboard</h1>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
