import { Box, Button, Grid } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../assests/images/Sahaya Sneha_page-0001.jpg";

export const Resume = () => {
  return (
    <Box
      sx={{
        height: "auto",
        backgroundImage: "url(https://wallpapercave.com/wp/BMrmUGk.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "100px",
        pb: 5, // Add padding-bottom for spacing
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {/* Download Button Section */}
        <Grid
          item
          lg={4}
          md={5}
          sm={6}
          xs={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
             download="SahayaSneha_Resume.pdf"
              href="Sahaya Sneha.pdf"
            style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
             
              sx={{
                height: "50px",
                width: { xs: "100%", sm: "80%", md: "70%" }, // Responsive width
                backgroundColor: "violet",
                color: "white",
                "&:hover": { backgroundColor: "darkviolet" },
              }}
            >
              Download CV
            </Button>
          </a>
        </Grid>

        {/* Resume Image Section */}
        <Grid
          item
          lg={10}
          md={10}
          sm={12}
          xs={12}
          mt={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={resume}
            alt="Resume Preview"
            style={{
              width: "100%",
              maxWidth: "900px", // Ensures it doesn't stretch beyond this
              maxHeight: "90vh", // Prevents excessive height
              objectFit: "contain", // Maintains aspect ratio
              
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
