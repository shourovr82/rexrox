import React, { useState } from 'react';
import { ImCamera } from 'react-icons/im';
import { FaMusic } from 'react-icons/fa';
import { RxVideo } from 'react-icons/rx';
import { TiNews, TiSocialTwitter, TiWeatherCloudy } from 'react-icons/ti';
import { SiPicardsurgeles } from 'react-icons/si';
import { FcAbout, FcMindMap, FcTimeline, FcWorkflow } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { TbLayoutCards } from 'react-icons/tb';
import { BsFacebook, BsInstagram, BsJournalRichtext } from 'react-icons/bs';
import { RiContactsFill, RiTeamFill, RiWechat2Line } from 'react-icons/ri';
import { GrContactInfo } from 'react-icons/gr';

const AllMenu = () => {
  const [level, setLevel] = useState(50);


  return (
    <>
      <section className='grid grid-cols-12 gap-2  menuBg text-center '>
        <div className='col-span-8 '>
          <div className='grid grid-cols-4 gap-2'>
            {/* calender */}
            <div className='col-span-4   border p-2'>
              <div className='w-full flex justify-between text-start'>
                <div>
                  <h2 className='text-sm'>Morning Review</h2>
                  <p className='text-sm'>Meeting</p>
                </div>
                <div>
                  <h3 className='text-3xl'>11:00 AM</h3>
                </div>

              </div>
              <div className='flex justify-between '>
                <div className='flex items-end'>
                  <h4>Calendar</h4>
                </div>
                <div className='flex items-end  gap-2'>
                  <p>Wed</p>
                  <h1 className='text-3xl'>5</h1>
                </div>
              </div>
            </div>



            {/* camera */}
            {/* <div className='col-span-2   flex items-center justify-center border'>
              <div className='flex flex-col  gap-1 justify-center items-center'>
                <span>
                  <ImCamera className='text-2xl' />
                </span>
                <h1 className='text-sm'>Shafin GCAM Mode</h1>
              </div>
            </div>
     
            <div className='grid grid-cols-4  gap-2 col-span-4 '>
              <div className='col-span-4 border'>
                <div className='flex flex-col justify-center items-center'>
                  <span><FaMusic className='text-2xl' /></span>
                  <h2 className='text-sm'>Shafin Music</h2>
                </div>
              </div>

            </div> */}
          </div>

        </div>
        {/* battery */}



        <div className='grid-cols-4 gap-2 grid col-span-4 '>

          <div className='col-span-4  '>
            <div className='bg-gradient-to-r from-[#093382]  to-[#3B63A3] p-2'>
              <p className='text-start  text-sm'>Sirajganj, Bangladesh</p>
              <span className='text-center flex justify-center'><TiWeatherCloudy className='text-4xl' /></span>
              <div className='text-start flex justify-between'>
                <h5>78°F</h5>
                <p>Sunny</p>
              </div>
            </div>
          </div>

        </div>



        <div className='col-span-12 grid-cols-6 grid gap-2  '>

          <div className='flex col-span-2  py-2 space-y-2 border justify-center flex-col items-center '>
            <div>
              <span><ImCamera className='text-2xl' /></span>
            </div>
            <h1>Shafin GCAM Mode</h1>
          </div>
          <div className='flex col-span-2 py-2 space-y-2 border  justify-center flex-col items-center '>
            <div>
              <span><FaMusic className='text-2xl' /></span>
            </div>
            <h1>Shafin Music</h1>
          </div>

          <div className='flex col-span-2 py-2 space-y-2 border  justify-center flex-col items-center '>
            <div className='flex justify-center gap-3'>
              <span><TiSocialTwitter className='text-2xl' /></span>
              <span><BsInstagram className='text-2xl' /></span>
              <span><BsFacebook className='text-2xl' /></span>
            </div>
            <div>
              <h1>Social Activities</h1>
            </div>
          </div>
        </div>











        <div className='col-span-12 border py-2'>
          <div className='flex justify-center flex-col items-center '>
            <div>
              <span><TiNews className='text-2xl' /></span>
            </div>
            <h1>Latest News</h1>
          </div>
        </div>
        {/* Projects */}
        <div className='col-span-6 border py-3 space-y-4'>
          <div className='flex justify-center  gap-2'>
            <span><TbLayoutCards className='text-4xl' /></span>
            <span><SiPicardsurgeles className='text-4xl' /></span>
            <span><FcTimeline className='text-4xl' /></span>
            <span><FcWorkflow className='text-4xl' /></span>
          </div>
          <div>
            <h1 className='text-sm'>Projects</h1>
          </div>
        </div>
        {/* Skills */}
        <div className='col-span-6 flex flex-col  py-3 space-y-4 justify-center items-center border'>
          <div className='flex  gap-2'>
            <span><FcMindMap className='text-4xl' /></span>
            <span><GiSkills className='text-4xl' /></span>
          </div>
          <div>
            <h2 className='text-sm'>Skills</h2>
          </div>
        </div>
        {/* other details */}

        <div className='col-span-5 border py-3'>
          <div className='flex justify-center'>
            <span><FcAbout className='text-4xl' /></span>
          </div>
          <h3 className='text-sm'>About</h3>
        </div>
        <div className='grid grid-cols-4 gap-2 col-span-7 '>
          <div className='col-span-2 border flex justify-center items-center'>
            <div className='flex items-center space-y-2 justify-center flex-col'>
              <span><BsJournalRichtext className='text-3xl' /></span>
              <h3 className='text-sm'>Blogs</h3>
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-center items-center border'>
            <h2>  Course</h2>
            <span className='text-[8px]'>will be coming soon</span>
          </div>
        </div>
        {/* teams and friends */}
        <div className='col-span-12 gap-2 grid-cols-12 grid'>
          <div className='col-span-4 border py-2'>
            <div className='flex flex-col items-center justify-center '>
              <span><RiTeamFill className='text-4xl' /></span>
              <h2 className='text-sm'>Teams</h2>
            </div>

          </div>
          <div className='col-span-3 border py-2'>
            <div className='flex flex-col items-center justify-center '>
              <span><RiContactsFill className='text-4xl' /></span>
              <h2 className='text-sm'>Contact</h2>
            </div>
          </div>
          <div className='col-span-5 border py-2'>
            <div className='flex flex-col items-center justify-center '>
              <span><RiWechat2Line className='text-4xl' /></span>
              <h2 className='text-sm'>Live Chat</h2>
            </div>
          </div>
        </div>

      </section >

    </>


  );
};

export default AllMenu;