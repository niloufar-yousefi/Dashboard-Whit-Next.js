"use client"
import * as React from 'react';
import './globals.css';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import DownloadingTwoToneIcon from '@mui/icons-material/DownloadingTwoTone';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/navigation';
import Link from 'next/link';







export default function SquareCorners() {

  // for focus and blur start
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  // for show and hide password start
  const [showPassword, setShowPassword] = useState(false);

  // for login start // get data from mockapi.io
  const [login, setLogin] = useState([]);
  useEffect(() => {
    fetch('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users')
      .then(response => response.json())
      .then(data => {
        setLogin(data)
      })
  }, [login]);
  // for login end 

// تعریف router
  const router = useRouter(); 


  return (
    <div className='flex justify-center items-center h-screen bg-slate-50 w'>

      <Stack direction="row  " className='shadow-2xl'>

        {/* part1 start */}
        <div className=' bg-[#3040D6] w-[400px] h-[450px] hidden md:block'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='px-10'>

              <Grid size={12} className='pt-14 pb-10 font-sans text-3xl  text-slate-50'>
                {/* part 1-1 */}
                <div><h5>Welcome</h5> </div>
              </Grid>

              <Grid size={12} sx={{ height: '40%' }} className='pb-8 font-sans text-md  text-slate-100'>
              <div className=' h-[100px]'><p className='text-justify'>
                  This dashboard is develoed by <span className='text-slate-400 '>Niloofar Yoosefi</span> whit Next.js , MUI and also using mockapi 
                   to get data .You can Create an account or use default words to login.
                </p></div>
              </Grid>

              <Grid size={12} className='' sx={{ height: '40%' }}>
              <div className='flex h-[100px] justify-between'>
              <Diversity2TwoToneIcon className='text-[#1020ab] border-2 border-[#1020ab] rounded-full' style={{ fontSize: '4rem' }} />
                  <DownloadingTwoToneIcon className='text-[#1020ab] border-2 border-[#1020ab] rounded-full' style={{ fontSize: '4rem' }} />
                  <EqualizerTwoToneIcon className='text-[#1020ab] border-2 border-[#1020ab] rounded-full' style={{ fontSize: '4rem' }} />
                </div>
              </Grid>
            </Grid>
          </Box>.
        </div>
        {/* part1 end */}

        {/* part2 start */}
        <div className='  w-[400px] h-[450px]  '>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='px-10'>

              <Grid size={12} className='pt-14 pb-10 font-sans text-3xl  text-slate-50'>
                {/* part 1-2 start */}
                <div>
                  <Image src="/logo2.svg" alt="image" width={100} height={100} style={{ width: 'auto', height: 'auto' }} />
                </div>
              </Grid>
              {/* part 1-2 end */}

              {/* part 2-2 start */}
              <Grid size={12} sx={{ height: '40%' }} className='pb-8 font-sans text-md  '>

                {/* useing formik and yup for validation */}
                <div >
                  <Formik
                    initialValues={{ user: 'niloofar', password: 'niloofar' }}
                    validationSchema={Yup.object({
                      user: Yup.string()
                        .required('required'),
                      password: Yup.string()
                        .required('required'),
                    })}
                    // for login start
                    onSubmit={(values, { setSubmitting }) => {
                      if (values.user === 'niloofar' && values.password === 'niloofar' || login.some(item => item.username === values.user && item.password === values.password)) {
                      //  alert('login success')
                      // window.location.href = '/dashboard';
                      router.push('/dashboard');
                      } else {
                        alert('login failed')
                      }

                    }}

                  >

                    <Form>

                      {/* for focus and blur start */}
                      <Field className={`w-full  px-3 py-2 rounded-md ${isFocusedUser ? 'border-2 border-slate-500 outline-none' : 'border-none outline-none'}`} type="text" name="user" placeholder="username" onFocus={() => setIsFocusedUser(!isFocusedUser)} onBlur={() => setIsFocusedUser(!isFocusedUser)} />
                      <div className='w-full h-[10px] px-3 mt-1 text-red-500 text-xs font-sans font-bold'>
                        <ErrorMessage name="user" component="div" />
                      </div>
                      <br />

                      {/* for focus and blur start */}
                      {/* for show and hide password start */}
                      <div className="relative">
                        <Field className={`w-full pr-10 px-3 py-2 rounded-md ${isFocusedPassword ? 'border-2 border-slate-500 outline-none' : 'border-none outline-none'}`} type={showPassword ? "text" : "password"} name="password" placeholder="password" onFocus={() => setIsFocusedPassword(!isFocusedPassword)} onBlur={() => setIsFocusedPassword(!isFocusedPassword)} />
                        <RemoveRedEyeIcon className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                      </div>


                      <div className='w-full h-[10px] px-3 mt-1 text-red-500 text-xs font-sans font-bold'>
                        <ErrorMessage name="password" component="div" />
                      </div>
                      <br />
                      <div className="flex justify-center flex-wrap">
                       
                        <button type="submit" className="bg-[#3040D6] hover:bg-[#1020ab] text-white font-bold font-sans py-2 px-8 rounded">
                          Login
                        </button>
                       
                       <div className='w-full flex justify-center mt-3'>
                        <p className='text-slate-500 text-xs font-sans'>New on our platform?
                        <span className='text-[#3040D6] underline hover:text-[#1020ab] cursor-pointer text-xs font-sans'> <Link href="/signup"> Create an account</Link></span></p>
                      </div>
                      </div>



                    </Form>
                  </Formik>
                </div>
              </Grid>
              {/* part 2-2 end */}

            </Grid>
          </Box>.
        </div>

        {/* part2 end */}

      </Stack>

    </div>
  );
}
