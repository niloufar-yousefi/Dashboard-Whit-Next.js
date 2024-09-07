"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MostSold from './MostSold';
import MapContainer from './MapContainer';
import Otherproducts from './Otherproducts';







export default function MainContent() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className='mt-32 border-t-2 py-10 border-slate-100  *:h-[400px] ' spacing={2}>
      <Grid size={{ xs: 12, md: 5 }} className='mb-10 md:mb-0 overflow-y-scroll shadow-sm rounded-2xl ' style={{ maxHeight: '400px', scrollbarWidth: 'thin', scrollbarColor: 'dark' }}>
          {/* Most Sold Products title */}
          <h5 className='text-slate-500 py-4 sticky top-0 bg-slate-100 z-10'>Most Sold Products</h5>

          {/* fetching data for Most Sold Products */}
          <MostSold />
        </Grid>

        {/* map */}
        <Grid size={{ xs: 12, md: 7 }} className=''>
          <div className='h-full' bg-slate-100 >
            <MapContainer />
          </div>
        </Grid>


        {/*Other products  */}
        <Grid size={{ xs: 12}} className='mb-10 md:mb-0 overflow-y-scroll shadow-sm rounded-2xl ' style={{ maxHeight: '400px', scrollbarWidth: 'thin', scrollbarColor: 'dark' }}>
          {/* Other Products title */}
          <h5 className='text-slate-500 py-4 sticky top-0 bg-slate-100 z-10'>Other Products </h5>

          {/* fetching data for Most Sold Products */}
          <Otherproducts />

        </Grid>
      </Grid>
    </Box>
  );
}
