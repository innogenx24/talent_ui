import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Tabs, Tab, useMediaQuery, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import NavLogo from "../assets/logos/NavLogo.svg";
import BackwordIcon from "../assets/logos/BackwordIcon.svg";
import ForvordIcon from "../assets/logos/ForvordIcon.svg";
import SettingIcon from "../assets/logos/SettingIcon.svg";
import { Outlet } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Job Description", path: "/dashboard/job_describtion" },
  { label: "Interview", path: "/dashboard/interview" },
  { label: "Candidate", path: "/dashboard/candidate" },
  { label: "CRM", path: "/dashboard/crm" },
  { label: "Operations", path: "/dashboard/operations" },
  { label: "Vendor", path: "/dashboard/vendor" },
];

const LayOut = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedTab, setSelectedTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
    navigate(navItems[newValue].path);
  };

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (index) => {
    setMenuAnchor(null);
    if (index !== null) {
      setSelectedTab(index);
      navigate(navItems[index].path);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300, backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* Left Side (Navigation Buttons & Logo) */}
          <Box display="flex" alignItems="center">
            <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40 }}>
              <Box component="img" src={BackwordIcon} alt="Backward" sx={{ width: 18, height: 18 }} />
            </IconButton>

            <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40, ml: 1 }}>
              <Box component="img" src={ForvordIcon} alt="Forward" sx={{ width: 18, height: 18 }} />
            </IconButton>

            <IconButton>
              <Box component="img" src={NavLogo} alt="Logo" sx={{ maxWidth: 120, height: "auto", ml: 1 }} />
            </IconButton>
          </Box>

          {/* Navigation Tabs (Desktop) */}
          {!isMobile && (
            <Tabs value={selectedTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
              {navItems.map((item, index) => (
                <Tab key={index} label={item.label} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
              ))}
            </Tabs>
          )}

          {/* Right Side Icons */}
          <Box display="flex" alignItems="center">
            {/* Mobile Menu Button */}
            {isMobile && (
              <>
                <IconButton onClick={handleMenuClick}>
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => handleMenuClose(null)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                  {navItems.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleMenuClose(index)}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}

            {/* Settings Icon */}
            <IconButton>
              <Box component="img" src={SettingIcon} alt="Settings" sx={{ width: 35, height: 35, ml: 1 }} />
            </IconButton>

            {/* User Avatar & Name */}
            <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
            <Typography sx={{ color: "#171719", ml: 1 }}>Ajay Kumar</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Toolbar Spacer */}
      <Toolbar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default LayOut;




















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Tabs, Tab, useMediaQuery, Menu, MenuItem } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useTheme } from "@mui/material/styles";
// import NavLogo from "../assets/logos/NavLogo.svg";
// import BackwordIcon from "../assets/logos/BackwordIcon.svg";
// import ForvordIcon from "../assets/logos/ForvordIcon.svg";
// import SettingIcon from "../assets/logos/SettingIcon.svg";
// import { Outlet } from "react-router-dom";

// const navItems = [
//   { label: "Dashboard", path: "/dashboard" },
//   { label: "Job Description", path: "/dashboard/job_describtion" },
//   { label: "Interview", path: "/dashboard/interview" },
//   { label: "Candidate", path: "/dashboard/candidate" },
//   { label: "CRM", path: "/dashboard/crm" },
//   { label: "Operations", path: "/dashboard/operations" },
//   { label: "Vendor", path: "/dashboard/vendor" },
// ];

// const LayOut = () => {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [menuAnchor, setMenuAnchor] = useState(null);

//   const handleTabChange = (_, newValue) => {
//     setSelectedTab(newValue);
//     navigate(navItems[newValue].path);
//   };

//   const handleMenuClick = (event) => {
//     setMenuAnchor(event.currentTarget);
//   };

//   const handleMenuClose = (index) => {
//     setMenuAnchor(null);
//     if (index !== null) {
//       setSelectedTab(index);
//       navigate(navItems[index].path);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
//       <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300, backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
          
//           <Box display="flex" alignItems="center">
//             <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40 }}>
//               <Box component="img" src={BackwordIcon} alt="Backward" sx={{ width: 18, height: 18 }} />
//             </IconButton>

//             <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40, ml: 1 }}>
//               <Box component="img" src={ForvordIcon} alt="Forward" sx={{ width: 18, height: 18 }} />
//             </IconButton>

//             <IconButton>
//               <Box component="img" src={NavLogo} alt="Logo" sx={{ maxWidth: 120, height: "auto", ml: 1 }} />
//             </IconButton>
//           </Box>

//           {/* Navigation Tabs (Desktop) */}
//           {!isMobile ? (
//             <Tabs value={selectedTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary" sx={{ flexGrow: 1, overflowX: "auto" }}>
//               {navItems.map((item, index) => (
//                 <Tab key={index} label={item.label} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
//               ))}
//             </Tabs>
//           ) : (
//             // Mobile Menu Button
//             <>
//               <IconButton onClick={handleMenuClick}>
//                 <MenuIcon />
//               </IconButton>
//               <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => handleMenuClose(null)}>
//                 {navItems.map((item, index) => (
//                   <MenuItem key={index} onClick={() => handleMenuClose(index)}>
//                     {item.label}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </>
//           )}

//           {/* Right Side Icons */}
//           <Box display="flex" alignItems="center">
//             <IconButton>
//               <Box component="img" src={SettingIcon} alt="Settings" sx={{ width: 24, height: 24, ml: 1 }} />
//             </IconButton>
//             <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
//             <Typography sx={{ color: "#171719", ml: 1 }}>Ajay Kumar</Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Toolbar Spacer */}
//       <Toolbar />

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default LayOut;






















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Tabs, Tab } from "@mui/material";
// import NavLogo from "../assets/logos/NavLogo.svg";
// import BackwordIcon from "../assets/logos/BackwordIcon.svg";
// import ForvordIcon from "../assets/logos/ForvordIcon.svg";
// import SettingIcon from "../assets/logos/SettingIcon.svg";
// import { Outlet } from "react-router-dom";

// const navItems = [
//   { label: "Dashboard", path: "/dashboard" },
//   { label: "Job Description", path: "/dashboard/job_describtion" },
//   { label: "Interview", path: "/dashboard/interview" },
//   { label: "Candidate", path: "/dashboard/candidate" },
//   { label: "CRM", path: "/dashboard/crm" },
//   { label: "Operations", path: "/dashboard/operations" },
//   { label: "Vendor", path: "/dashboard/vendor" },
// ];

// const LayOut = () => {
//   const navigate = useNavigate(); // Initialize navigate function
//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//     navigate(navItems[newValue].path); // Navigate to the selected tab's path
//   };

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f5f5f5" }}>
//       {/* Navbar */}
//       <AppBar position="fixed" sx={{ width: "100%", zIndex: 1300, backgroundColor: "#FFFFFF", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
          
//           <Box display="flex" alignItems="center">
//             <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40 }}>
//               <Box component="img" src={BackwordIcon} alt="Backward" sx={{ width: 18, height: 18 }} />
//             </IconButton>

//             <IconButton sx={{ border: "1px solid #ddd", borderRadius: "50%", width: 40, height: 40, ml: 1 }}>
//               <Box component="img" src={ForvordIcon} alt="Forward" sx={{ width: 18, height: 18 }} />
//             </IconButton>

//             <IconButton>
//               <Box component="img" src={NavLogo} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover", ml: 1 }} />
//             </IconButton>
//           </Box>

//           {/* Navigation Tabs */}
//           <Tabs value={selectedTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
//             {navItems.map((item, index) => (
//               <Tab key={index} label={item.label} sx={{ textTransform: "none", fontWeight: selectedTab === index ? "bold" : "normal" }} />
//             ))}
//           </Tabs>

//           <Box display="flex" alignItems="center">
//             <IconButton>
//               <Box component="img" src={SettingIcon} alt="Logo" sx={{ width: "100%", height: "100%", objectFit: "cover", ml: 1 }} />
//             </IconButton>
//             <Avatar sx={{ ml: 1 }} src="https://via.placeholder.com/40" />
//             <Typography sx={{ color: "#171719", ml: 1 }}>Ajay Kumar</Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Toolbar Spacer */}
//       <Toolbar />

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default LayOut;

