import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Typography ,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";

const drawerWidth = 150;

const Sidebar = ({ section }) => {
  const location = useLocation(); // Get the current URL

  let menuItems = [];

  switch (section) {
    case "job_description":
      menuItems = [
        {
          text: "Job Description",
          path: "/dashboard/job_description",
          icon: <WorkIcon />,
        },
      ];
      break;
  
    case "interview":
      menuItems = [
        {
          text: "Interview List",
          path: "/dashboard/interview",
          icon: <PeopleIcon />,
        },
      ];
      break;
  
    case "candidate":
      menuItems = [
        {
          text: "Candidates List",
          path: "/dashboard/candidate",
          icon: <GroupIcon />,
        },
        {
          text: "Shortlisted",
          path: "/dashboard/candidate/shortlisted",
          icon: <AssignmentIcon />,
        },
      ];
      break;
  
    case "crm":
      menuItems = [
        { text: "Client List", path: "/dashboard/crm", icon: <BusinessIcon /> },
        {
          text: "Leads",
          path: "/dashboard/crm/leads",
          icon: <AssignmentIcon />,
        },
      ];
      break;
  
    case "operations":
      menuItems = [
        {
          text: "Operations List",
          path: "/dashboard/operations",
          icon: <BusinessIcon />,
        },
      ];
      break;
  
    case "vendor":
      menuItems = [
        {
          text: "Vendor List",
          path: "/dashboard/vendor",
          icon: <BusinessIcon />,
        },
      ];
      break;
  
    // ✅ Default menu when no section is matched
    default:
      menuItems = [
        {
          text: "Settings",
          path: "/dashboard/settings",
          icon: <WorkIcon />,
        },
      ];
      break;
  }
  

  // Set the initial selected item to the first item in the menu
  const [selected, setSelected] = useState(
    menuItems.length > 0 ? menuItems[0].path : ""
  );

  useEffect(() => {
    // Update the selected item when the route changes
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "65px",
          height: "calc(100vh - 65px)",
          display: "flex",
          alignItems: "center",
          paddingTop: "20px",
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            to={item.path}
            sx={{ justifyContent: "center" }}
            onClick={() => setSelected(item.path)} // Set selected item on click
          >
            <Box
              sx={{
                backgroundColor: selected === item.path ? "black" : "white",
                borderRadius: "14px",
                padding: "10px",
                width: "80px",
                height: "70px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
              }}
            >
              <ListItemIcon
                sx={{
                  color: selected === item.path ? "white" : "black",
                  minWidth: "auto",
                  marginBottom: "4px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: selected === item.path ? "white" : "black",
                      fontSize: "0.95rem !important",
                      lineHeight: "1.05 !important",
                      textAlign: "center",
                      display: "block", // Ensures the styles apply
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
