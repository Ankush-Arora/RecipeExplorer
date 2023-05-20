import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Axios } from 'axios';
import TextField from '@mui/material/TextField';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import '../style.css'
import Recipes from './Recipes';
const Header = () => {

    return (

        <Box sx={{ bgcolor: 'black', color: 'white',display:'flex',justifyContent:'space-between',flexGrow:1,maxWidth:'Box'}} >
            <Typography className='navbar' sx={{fontSize:'35px',mt:'12px',ml:'50px'}} >
            <FastfoodIcon/>  Recipe Explorer           
            </Typography>
        </Box>
    )     
}

export default Header
