import React, { useEffect, useState } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
// } from "@mui/material";
import { db } from "./Auth/Firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
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

//
import GoogleButton from "react-google-button";
import { auth, provider } from "./Auth/Firebase";
import { signInWithPopup } from "firebase/auth";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

//

import { useNavigate } from "react-router-dom";

const ApplicantForm = () => {
  const navigate = useNavigate();
  const [applicant, setApplicant] = useState({
    uid: "",
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const generateApplicationNumber = () => {
    const timestamp = new Date().getTime(); // Current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Random number between 0 and 999
    return `APP-${timestamp}-${randomNum}`;
  };
  function getCurrentDateTime() {
    const now = new Date();

    // Extracting date components
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // Months are zero-indexed
    let day = now.getDate();

    // Extracting time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Padding single digit month, day, hours, minutes, and seconds with a leading zero
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  const applicationNumber = generateApplicationNumber();

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setApplicant({
      ...applicant,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event, uid) => {
    event.preventDefault();
    // Process the applicant data here
    console.log(applicant);
    // await firestore.collection("users").add(applicant);
    const targetDoc = doc(db, "Users", applicant.uid);

    try {
      await setDoc(
        targetDoc,
        {
          uid: applicant.uid,
          fullName: applicant.fullName,
          email: applicant.email,
          phoneNumber: applicant.phone,
          applicationNumber: applicationNumber, // Add the application number here
          created_time: serverTimestamp(),
          updated_time: serverTimestamp(),
        },
        { merge: true }
      );
      const currentTime = getCurrentDateTime();
      console.log(currentTime);
      localStorage.setItem("email", applicant.email);
      localStorage.setItem("uid", applicant.uid);
      localStorage.setItem("applicationNo", applicationNumber);
      localStorage.setItem("time", currentTime);

      console.log("Document updated successfully");
      navigate("/success");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handelClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      console.log(data.user.uid, data.user.email, data.user.displayName);

      setApplicant((prevApplicant) => ({
        ...prevApplicant,
        uid: data.user.uid,
        fullName: data.user.displayName,
        email: data.user.email,
      }));

      // Additional code for navigation or data context updates
      // dataContext.setUidFunction({ data: data.user.uid });
      // await dataContext.deleteUidIfExists({ uid: data.user.uid });
      // navigate("/extract-data");
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle errors here, such as showing a notification to the user
    }
  };

  useEffect(() => {
    const applicationNumber = localStorage.getItem("applicationNo");
    const email = localStorage.getItem("email");
    const submissionTime = localStorage.getItem("time"); // Formats current time as a string

    if (applicationNumber && email && submissionTime) {
      navigate("/success");
    }
  }, []);

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ width: "300px", paddingTop: "50px" }}>
        <GoogleButton onClick={handelClick} />

        <FacebookLoginButton onClick={() => alert("Hello")} />
        {/* <InstagramLoginButton onClick={() => alert("Hello")} /> */}
        <LinkedInLoginButton onClick={() => alert("Hello")} />
      </Box>
      <Paper elevation={6} sx={{ my: 4, p: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Applicant Information
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            margin="normal"
            autoComplete="fname"
            autoFocus
            value={applicant.fullName}
            onChange={handleChange}
          />
          {/* <TextField
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            margin="normal"
            autoComplete="fname"
            autoFocus
            value={applicant.firstName}
            onChange={handleChange}
          /> */}
          {/* <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            margin="normal"
            autoComplete="lname"
            value={applicant.lastName}
            onChange={handleChange}
          /> */}
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            margin="normal"
            autoComplete="email"
            value={applicant.email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            margin="normal"
            autoComplete="tel"
            type="tel"
            value={applicant.phone}
            onChange={handleChange}
          />
          <input
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            id="resume"
            type="file"
            name="resume"
            onChange={handleChange}
          />
          <label htmlFor="resume">
            <Button variant="contained" color="primary" component="span">
              Upload Resume
            </Button>
          </label>
          <Box sx={{ mt: 3 }}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit Application
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ApplicantForm;
