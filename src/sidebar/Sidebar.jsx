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
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TimelineIcon from "@mui/icons-material/Timeline";
import DescriptionIcon from "@mui/icons-material/Description";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { MdOutlineComputer } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineAirlineSeatLegroomNormal } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { MdTranslate } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { MdDonutLarge } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaUserMinus } from "react-icons/fa";
import { RiCurrencyFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";










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
            text: "Resume Bank",
            path: "/dashboard/candidate/resume-bank",
            icon: <DescriptionIcon />, 
          },
          {
            text: "Bench",
            path: "/dashboard/candidate/bench",
            icon: <PlaylistAddCheckIcon />, 
          },
          {
            text: "OnBoarding",
            path: "/dashboard/candidate/on-boarding",
            icon: <AssignmentIcon />, 
          },
          {
            text: "UpComing OffBoardings",
            path: "/dashboard/candidate/upcoming-off-boardings",
            icon: <ExitToAppIcon />, 
          },
          {
            text: "OffBoarded",
            path: "/dashboard/candidate/off-boarded",
            icon: <AssignmentIcon />, 
          },
      
        ];
        break;
  
  
      case "crm":
        menuItems = [
          { text: "Client List", path: "/dashboard/crm", icon: <BusinessCenterIcon /> },

          { text: "Contacts", path: "/dashboard/crm/contacts", icon: <ContactsIcon /> },
          { text: "Quotations", path: "/dashboard/crm/quotations", icon: <ReceiptLongIcon /> },
          {
            text: "Orders",
            path: "/dashboard/crm/orders",
            icon: <AssignmentIcon />,
          },
        ];
        break;
  
  
      case "operations":
        menuItems = [
          {
            text: "Accounts",
            path: "/dashboard/operations",
            icon: <AccountBalanceIcon />,
          },
          {
            text: "Invoices",
            path: "/dashboard/operations/invoices",
            icon: <ReceiptIcon />,
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
    
  
    case "settings":
        menuItems = [
          {
            text: "Users",
            path: "/dashboard/settings",
            icon: <PeopleIcon size={24}/>,
          },
          {
            text: "Roles",
            path: "/dashboard/settings/roles",
            icon: <AdminPanelSettingsIcon size={24} />,
          },
          {
            text: "Experience Range",
            path: "/dashboard/settings/experience-range",
            icon: <TimelineIcon size={24}/>,
          },
          {
            text: "Department",
            path: "/dashboard/settings/department",
            icon: <BusinessIcon size={24}/>,
          },
          {
            text: "Branch",
            path: "/dashboard/settings/branch",
            icon: <ApartmentIcon size={24}/>,
          },
          {
            text: "Work Layout",
            path: "/dashboard/settings/WorkLayout",
            icon: <MdOutlineComputer size={24}/>,
          },
          {
            text: "Candidate Status",
            path: "/dashboard/settings/CandidateStatus",
            icon: <FaUserTie size={24}/>,
          },
          {
            text: "Bench Status",
            path: "/dashboard/settings/BenchStatus",
            icon: <MdOutlineAirlineSeatLegroomNormal size={24}/>,
          },
          {
            text: "Job Title",
            path: "/dashboard/settings/JobTitle",
            icon: <FaBriefcase size={24}/>,
          },
          {
            text: "Skills",
            path: "/dashboard/settings/Skills",
            icon: <GiBrainstorm size={24}/>,
          },
          {
            text: "Industry",
            path: "/dashboard/settings/Industry",
            icon: <FaIndustry size={24}/>,
          },
          {
            text: "Interview Name",
            path: "/dashboard/settings/InterviewName",
            icon: <FaChalkboardTeacher size={24}/>,
          },
          {
            text: "Interview Status",
            path: "/dashboard/settings/InterviewStatus",
            icon: <MdQuestionAnswer size={24}/>,
          },
          {
            text: "Language Proficiency ",
            path: "/dashboard/settings/Languageproficiency",
            icon: <MdTranslate size={24}/>,
          },
          {
            text: "Source",
            path: "/dashboard/settings/SourceSe",
            icon: <MdTravelExplore size={24}/>,
          },
          {
            text: "Overall Status",
            path: "/dashboard/settings/OverallStatus",
            icon: <MdDonutLarge size={24}/>, 
          },
          {
            text: "Availability",
            path: "/dashboard/settings/Availability",
            icon: <MdAccessTime size={24}/>, 
          },
          {
            text: "OffBoarding Reasons",
            path: "/dashboard/settings/OffBoardingReasons",
            icon: <FaUserMinus size={24}/>, 
          },
          {
            text: "Currency",
            path: "/dashboard/settings/Currency",
            icon: <RiCurrencyFill size={24}/>, 
          },
          {
            text: "RateType",
            path: "/dashboard/settings/RateType",
            icon: <FaMoneyCheckAlt size={24}/>, 
          },
        ];
        break;

      default:
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
                width: "100px",
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
                      display: "block", 
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
