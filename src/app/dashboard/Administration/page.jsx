'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FilterIcon from '@mui/icons-material/Filter';
import Administration from './componentCustomer/Administration';





export default function Page() {

  return (
    <div className=' mb-28 md:mb-56'>
      {/* part 1 ************* start */}
      <div className="w-full *:font-sans">

        <Box sx={{ flexGrow: 1 }}>
          <Grid container className='  ' >

            {/* title*/}
            <Grid size={{ xs: 12, md: 6 }} className=' ' >
              <h1 className='text-2xl font-bold text-slate-600 font-sans'>Administration</h1>
            </Grid>

            {/* table */}
            <Grid size={{ xs: 12, md: 6 }} className='flex mt-4 md:mt-0 md:justify-end'>
              <Button className='w-[150px] capitalize hover:underline  decoration-blue-500 decoration-4'
                variant="contained"              
                startIcon={<AddIcon />}
                style={{ backgroundColor: 'transparent', color: '#4D70EB', fontFamily: 'sans-serif', border:'1px solid #4D70EB'}}
                sx={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)', '&:hover': { boxShadow: '0 6px 10px rgba(0, 0, 0, 0.25)', backgroundColor: '#e0e0e0' } }}
              >
                Create New
              </Button>
              
              <Button className='w-[150px] capitalize hover:underline decoration-blue-500 decoration-4'
                variant="contained"
                color="primary"
                startIcon={<FilterIcon />}
                style={{ backgroundColor: 'transparent', color: '#4D70EB', fontFamily: 'sans-serif', boxShadow: 'none',display:'flex',justifyContent:'flex-end' }}
              >
                Filter
              </Button>
            </Grid>

          </Grid>
        </Box>

      </div>
      {/* part 1 ************* end */}
      

      {/* part 2 ************* start */}
      <div className="w-full *:font-sans mt-10">
        <Administration/>
      </div>
      {/* part 2 ************* end */}

    </div>
  )
}



