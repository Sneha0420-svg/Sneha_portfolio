import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

export const About = () => {
  return (
    <Box
    id="about"
      sx={{
        width: '100%',
      
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
          lg={9}
          md={9}
          sm={10}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          <Typography variant="h2" color="white" mt={3}>
            Know Who <span style={{ color: 'violet' }}>I'M</span>
          </Typography>
          <Typography variant="h5" color="white" mt={3}>
            "Hi everyone, I'm <span style={{ color: 'violet' }}><i>SAHAYA SNEHA</i></span> from{' '}
            <span style={{ color: 'violet' }}><i>Tirunelveli</i></span>. I recently completed my{' '}
            <span style={{ color: 'violet' }}><i>Frontend Development</i></span> training at Karka Software Academy.
            I have a BSc in Mathematics and have practiced building both dynamic and static webpages using{' '}
            <span style={{ color: 'violet' }}><i>HTML5, CSS3</i></span> and{' '}
            <span style={{ color: 'violet' }}><i>JAVASCRIPT</i></span>. Additionally, I created an e-commerce website using{' '}
            <span style={{ color: 'violet' }}><i>REACT.JS and MUI</i>.</span>"
          </Typography>
          <Typography color="white" mt={4} fontSize={{ xs: '20px', md: '27px' }}>
            Apart from coding, some other activities that I love to do
          </Typography>
          <Box sx={{ width: '80%', mx: 'auto', my: 3 }}>
            <Typography variant="h6" color="white" display="flex" alignItems="center">
              <PanToolAltOutlinedIcon
                sx={{ transform: 'rotate(90deg)', mx: 2, fontSize: '30px' }}
              />
              Listening Music
            </Typography>
            <Typography variant="h6" color="white" display="flex" alignItems="center">
              <PanToolAltOutlinedIcon
                sx={{ transform: 'rotate(90deg)', mx: 2, fontSize: '30px' }}
              />
              Puzzle Solving
            </Typography>
            <Typography variant="h6" color="white" display="flex" alignItems="center">
              <PanToolAltOutlinedIcon
                sx={{ transform: 'rotate(90deg)', mx: 2, fontSize: '30px' }}
              />
              Gardening
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
