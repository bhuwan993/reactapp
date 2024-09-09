// import {useEffect} from 'react'
// import {gsap} from 'gsap';
import Project1 from '../../assets/images/ProjectImage1.png'
import Project2 from '../../assets/images/ProjectImage2.png'
import Project3 from '../../assets/images/ProjectImage3.png'
import Project4 from '../../assets/images/ProjectImage4.png'
import Project5 from '../../assets/images/ProjectImage5.png'
import Project6 from '../../assets/images/ProjectImage6.png'
import Project7 from '../../assets/images/ProjectImage7.png'
import Project8 from '../../assets/images/ProjectImage8.png'
import Project9 from '../../assets/images/ProjectImage9.png'
import Project10 from '../../assets/images/ProjectImage10.png'
// import Project11 from '../../assets/images/ProjectImage11.png'
// import Project12 from '../../assets/images/ProjectImage12.png'
import Frame from '../Frame/Frame'
import labtopFrame from  '../../assets/Frames/mackbook1.png'
import tabletFrame from  '../../assets/Frames/ipad 1.png'
import mobileFrame from '../../assets/Frames/iphone 4.png'
const Projects = () => {

  // useEffect(()=>{
    // gsap.from('.project-tittle',{
      // rotate:'4deg',
      // duration:5,
      // repeat:-1,
      // yoyo:true,
    // })
  // })
  return (
   <div id="Project-container" className="flex bg-white flex-col gap-[1vh] justify-center items-center  overflow-hidden relative">
    <h1 className='project-tittle  md:px-[2vh] text-[#1788ae] md:text-[8vh] text-[4vh] md:mb-[5vh] font-["lato-bold"] outline-double outline-[10px] bg-white relative z-50'>Latest Projects</h1>
   <div className='lg:grid grid-cols-2 bg-white -left-[30vh] hidden relative xl:bottom-[15vh] md:bottom-[15vh]'>
   <Frame FrameUrl={labtopFrame} url={Project1} Tittle={"sundown-studio.com"} Technologies={"HTML, CSS, JavaScript, Locomotive and Gsap."}/>
   <Frame FrameUrl={labtopFrame} url={Project2} Tittle={"Estate Agility.com"} Technologies={"HTML, CSS, JavaScript, Canvas , Locomotive, Gsap."} />
   <Frame FrameUrl={labtopFrame} url={Project3} Tittle={"SoftBenz.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={labtopFrame} url={Project4} Tittle={"Bubbles Game"} Technologies={"HTML, CSS, JavaScript"} />
   <Frame FrameUrl={labtopFrame} url={Project5} Tittle={"Simple User Interface"} Technologies={"HTML, CSS, JavaScript,Locomotive"}/>
   <Frame FrameUrl={labtopFrame} url={Project6} Tittle={"NIKE SHOP"} Technologies={"HTML, CSS, JavaScript,Swipper JS"} />
   <Frame FrameUrl={labtopFrame} url={Project7} Tittle={"Pathway.com"} Technologies={"React, Gsap, Locomotive, Three JS"}/>
   <Frame FrameUrl={labtopFrame} url={Project8} Tittle={"Lenovo Shop"} Technologies={"HTML, CSS, JavaScript, Bootsrap Template"}/>
   <Frame FrameUrl={labtopFrame} url={Project9}Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={labtopFrame} url={Project10} Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   {/* <Frame url={Project11} /> */}
   </div>
   <div className='md:grid right-[20vh] bg-white md:grid-cols-2 hidden lg:hidden relative  md:bottom-[1vh]'>
   <Frame FrameUrl={tabletFrame} url={Project1} Tittle={"sundown-studio.com"} Technologies={"HTML, CSS, JavaScript, Locomotive and Gsap."}/>
   <Frame FrameUrl={tabletFrame} url={Project2} Tittle={"Estate Agility.com"} Technologies={"HTML, CSS, JavaScript, Canvas , Locomotive, Gsap."} />
   <Frame FrameUrl={tabletFrame} url={Project3} Tittle={"SoftBenz.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={tabletFrame} url={Project4} Tittle={"Bubbles Game"} Technologies={"HTML, CSS, JavaScript"} />
   <Frame FrameUrl={tabletFrame} url={Project5} Tittle={"Simple User Interface"} Technologies={"HTML, CSS, JavaScript,Locomotive"}/>
   <Frame FrameUrl={tabletFrame} url={Project6} Tittle={"NIKE SHOP"} Technologies={"HTML, CSS, JavaScript,Swipper JS"} />
   <Frame FrameUrl={tabletFrame} url={Project7} Tittle={"Pathway.com"} Technologies={"React, Gsap, Locomotive, Three JS"}/>
   <Frame FrameUrl={tabletFrame} url={Project8} Tittle={"Lenovo Shop"} Technologies={"HTML, CSS, JavaScript, Bootsrap Template"}/>
   <Frame FrameUrl={tabletFrame} url={Project9}Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={tabletFrame} url={Project10} Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   </div>


   <div className='grid grid-cols-2 md:hidden relative right-[12vh] gap-[1vh] mt-[6vh]'>
   <Frame FrameUrl={mobileFrame} url={Project1} Tittle={"sundown-studio.com"} Technologies={"HTML, CSS, JavaScript, Locomotive and Gsap."}/>
   <Frame FrameUrl={mobileFrame} url={Project2} Tittle={"Estate Agility.com"} Technologies={"HTML, CSS, JavaScript, Canvas , Locomotive, Gsap."} />
   <Frame FrameUrl={mobileFrame} url={Project3} Tittle={"SoftBenz.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={mobileFrame} url={Project4} Tittle={"Bubbles Game"} Technologies={"HTML, CSS, JavaScript"} />
   <Frame FrameUrl={mobileFrame} url={Project5} Tittle={"Simple User Interface"} Technologies={"HTML, CSS, JavaScript,Locomotive"}/>
   <Frame FrameUrl={mobileFrame} url={Project6} Tittle={"NIKE SHOP"} Technologies={"HTML, CSS, JavaScript,Swipper JS"} />
   <Frame FrameUrl={mobileFrame} url={Project7} Tittle={"Pathway.com"} Technologies={"React, Gsap, Locomotive, Three JS"}/>
   <Frame FrameUrl={mobileFrame} url={Project8} Tittle={"Lenovo Shop"} Technologies={"HTML, CSS, JavaScript, Bootsrap Template"}/>
   <Frame FrameUrl={mobileFrame} url={Project9}Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   <Frame FrameUrl={mobileFrame} url={Project10} Tittle={"Edusity.com"} Technologies={"React, Locomotive, Gsap"}/>
   </div>
   <div className="line absolute top-[10vh] left-[50%] border-l-2 border-[#1788ae] h-[380vh] hidden 2xl:flex">
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[18.77vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[41.57vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[92.57vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[111.57vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[166.5vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[183.5vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[238.6vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[255.7vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[310.6vh] -left-[10px]'></div>
    <div className='h-[3vh] w-[3vh] bg-[#1788ae] rounded-full absolute top-[329.8vh] -left-[10px]'></div>
   </div>
   <div className='hidden 2xl:block'>

   <div className='line1 absolute top-[14%] border-t-2 right-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[32.5%] border-t-2 right-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[51.5%] border-t-2 right-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[70.5%] border-t-2 right-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[90%] border-t-2 right-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[8%] border-t-2 left-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[27.5%] border-t-2 left-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[47%] border-t-2 left-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[66%] border-t-2 left-[84vh] border-[#1788ae] w-[20vh]'></div>
   <div className='line1 absolute top-[85%] border-t-2 left-[84vh] border-[#1788ae] w-[20vh]'></div>
   </div>
  </div>
  )
}

export default Projects