import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { About } from "./About";
import { Skills } from "./Skills";
import {Contact} from "./Contact"


const Home = () => {
  const word = "Frontend-Developer";
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 300; // Typing vs. Deleting speed

    const timeout = setTimeout(() => {
      setDisplayedLetters((prev) =>
        isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedLetters === word) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && displayedLetters === "") {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedLetters, isDeleting]);

  return (
    <Box
    id="home"
      sx={{
        height: "auto",
        backgroundImage: "url(https://wallpapercave.com/wp/BMrmUGk.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ fontFamily: "Poppins, sans-serif",textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
          >
            Hi There!
            <motion.span
              animate={{ rotate: [0, 20, 0] }} // Wave effect
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.span>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { lg: "50px", md: "50px", sm: "50px", xs: "40px" },
              mt: 2,
            }}
          >
            I'M <span style={{ color: "violet" }}>SAHAYA SNEHA</span>
          </Typography>
          <Typography variant="h4" component="div" color="violet" sx={{ mt: 4 }}>
            {displayedLetters.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            >
              |
            </motion.span>
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, md: 4 },
          }}
        >
          <img
            src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
            alt="not found"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </Grid>
      </Grid>
      <About />
      <Skills />
      <Contact />
    </Box>
    
  );
};

export default Home;
