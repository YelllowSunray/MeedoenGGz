'use client';

import React from 'react';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        mb: 3,
        width: '100%'
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Zoek activiteiten..."
        onChange={(e) => onSearch(e.target.value)}
        sx={{
          maxWidth: '600px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            backgroundColor: 'background.paper',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          },
        }}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
        }}
      />
    </Box>
  );
}