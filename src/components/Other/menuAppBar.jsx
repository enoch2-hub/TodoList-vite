import * as React from 'react';
import { useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({addTodo, removeAllTodos}) {
  const [newTask, setnewTask] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTask)
    setnewTask("")
}


  return (
    
    <form onSubmit={handleSubmit}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <AutoAwesomeIcon/>
          </Typography>
          <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ 'aria-label': 'search' }}
              placeholder='Add new todo'
              value={newTask}
              onChange={(e) => {setnewTask(e.target.value)}}
            />
          </Search>
          &nbsp;&nbsp;&nbsp;
          <Button 
            type='submit' 
            variant="contained"
            sx={{ bgcolor: '#323c69' }}
          >
            <DoneIcon/>
          </Button>
          <IconButton
                onClick={() => {removeAllTodos()}}
            >
                <DeleteIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </form>
  );
}