import React, { useState } from "react";
import { useEffect } from "react";
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
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import { green } from "@mui/material/colors";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ThankYouPage = ({ applicationNumber, email, submissionTime }) => {
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={6} sx={{ my: 4, p: 3, textAlign: "center" }}>
        <CheckCircleOutlineIcon
          sx={{ fontSize: 60, color: green[500], mb: 2 }}
        />
        <Typography variant="h4" gutterBottom>
          Application Submitted Successfully!
        </Typography>
        <Typography variant="subtitle1">
          Your application has been received and is currently being processed.
        </Typography>
        <Box mt={3}>
          <Typography variant="body1" component="p">
            <strong>Application Number:</strong> {applicationNumber}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Email:</strong> {email}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Time of Submission:</strong> {submissionTime}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

// Usage of ThankYouPage component somewhere in your application
// You'd pass the actual application number, email, and submission time as props
const SuccessPage = () => {
  // Placeholder data, replace with actual data

  const [applicationDetails, setApplicationDetails] = useState({
    applicationNumber: "123456",
    email: "applicant@example.com",
    submissionTime: new Date().toLocaleString(), // Formats current time as a string
  });

  useEffect(() => {
    setApplicationDetails({
      applicationNumber: localStorage.getItem("applicationNo"),
      email: localStorage.getItem("email"),
      submissionTime: localStorage.getItem("time"), // Formats current time as a string
    });
  }, []);
  return (
    <ThankYouPage
      applicationNumber={applicationDetails.applicationNumber}
      email={applicationDetails.email}
      submissionTime={applicationDetails.submissionTime}
    />
  );
};

export default SuccessPage;
