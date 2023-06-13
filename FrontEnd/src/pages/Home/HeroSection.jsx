import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import students from "../../images/students.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(11),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "",
    fontWeight: "",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #000046, #1cb5e0)",
        minHeight: "100vh",
      }}
    >
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "aliceblue",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to
            </Typography>
            <Title variant="h1">NIET Students CLUB</Title>

            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "aliceblue", my: 4 }}
            >
              the one-stop destination for all the clubs on campus! Here, you
              will find a diverse range of clubs that cater to a wide variety of
              interests and passions. Our clubs offer opportunities for personal
              growth, skill development, and social engagement, providing a
              platform for students to connect with like-minded peers and
              explore their interests.
            </Typography>

            <Link to="/About">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Link>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={students}
              alt="students"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default HeroSection;
