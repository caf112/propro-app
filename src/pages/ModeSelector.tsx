import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const ModeSelector = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        モード選択
      </Typography>
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/game"
          sx={{ minWidth: 200 }}
        >
          一人モード
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="#"
          sx={{ minWidth: 200 }}
        >
          複数人モード
        </Button>
      </Box>
    </Box>
  );
};

export default ModeSelector;
