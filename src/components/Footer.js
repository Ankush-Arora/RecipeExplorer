import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react'

const Footer = () => {
  return (
    <>
       <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white' ,padding:2,maxWidth:'Box'}}>

        <Box sx={{my:2,"& svg":{fontSize:"60px",mr:2,cursor:"pointer"},"& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }}}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
        </Box>
         <Typography varient="h5" sx={
            {"@media(max-width:600px)":{fontSize:"1rem",}}
         }>All Rights Reserved &copy; Recipe Explorer </Typography>
         <Typography sx={{m:'1'}}>
         <p>Developed by Ankush Arora</p> 
        <sub> <MailOutlineIcon/> </sub><span>: ankusharora5551@gmail.com</span>
         </Typography>
       </Box>
    </>
  )
}

export default Footer
