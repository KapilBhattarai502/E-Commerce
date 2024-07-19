import { Button } from '@headlessui/react'
import { Grid,Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';


const Footer = () => {
  return (
    <div>

        <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black',color:"white",py:3}}>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Company</Typography>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Company</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>About</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Blog</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Press</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Jobs</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Partners</Button>
   

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Solutions</Typography>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Marketing</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Analytics</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Commerce</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Insights</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Support</Button>
       
   

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Documentation</Typography>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Guides</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>API STATUS</Button>
        
   

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Legal</Typography>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Claim</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Privacy</Button>
        <Button className='pb-5 w-full' variant='h6' gutterbottom>Terms</Button>
        

        </Grid>
        <Grid className='pt-20' item xs={12}>
        <Typography variant='body2' component='p' align='center'>
            &copy;2024 My company .All rights reserved.
        </Typography>
        <Typography variant='body2' component='p' align='center'>
            Made with love <FavoriteIcon className='text-red-500'></FavoriteIcon>
        </Typography>


        </Grid>
        </Grid>

    </div>
  )
}

export default Footer