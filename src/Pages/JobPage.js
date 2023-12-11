import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import MailIcon from "@mui/icons-material/Mail";

import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const JobPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Job Portal
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "none", // Removes the shadow
            background: "transparent", // Makes the background transparent
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Home", "Jobs", "About Us", "Contact"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom component="div">
            Representative, Operations
          </Typography>
          <Typography paragraph>
            The Representative Customer Service / Technical Support position
            interfaces with customers via inbound and/or outbound calls, Emails
            / Chats or through the Internet depending upon client requirements.
            This position provides customer service support / Technical Support
            and resolution of routine problems regarding client's product or
            services.
          </Typography>
          <Typography paragraph>
            Experience – Fresher or any experience.
          </Typography>
          {/* ... other job description paragraphs ... */}
          <Button
            variant="contained"
            color="primary"
            style={{
              marginBottom: "50px",
            }}
            onClick={() => {
              navigate("/application");
            }}
          >
            Apply Now
          </Button>

          {/* Additional Content */}
          <Typography variant="subtitle1" gutterBottom component="div">
            Location: IND Gurgaon - Bld 14 IT SEZ Unit 1, 5th, 6th and 17th Flr
          </Typography>
          <Typography variant="body1" paragraph>
            Job Id: R1367142
            <br />
            Posted Date: 06/06/2023
            <br />
            External Job associated with 2 categories: Operations Contact Center
          </Typography>
          {/* <Button variant="outlined" color="primary">
            Save
          </Button> */}

          {/* Detailed Job Description */}
          {/* ... add detailed job description here ... */}

          {/* Disclaimer */}
          <Typography variant="body2" color="textSecondary" paragraph>
            Disclaimer: The above statements are intended to describe the
            general nature and level of work being performed by people assigned
            to this job. They are not intended to be an exhaustive list of all
            responsibilities, duties, and skills required of personnel working
            within this job title.
          </Typography>
          {/* ... other disclaimer and location details ... */}
        </Container>
      </Box>
    </Box>
  );
};

export default JobPage;
