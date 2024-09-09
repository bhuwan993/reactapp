import {useEffect} from 'react'
import {gsap} from 'gsap'
import ProfileImage from '../../assets/images/image.png'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
import './Hero.css'

const Hero = () => {
  useEffect(()=>{
     gsap.to('.circle',{
      rotate:"360deg",
      repeat:-1,
      duration:150,
      smoothOrigin:true
     })
     gsap.to('.downArrow',{
      y:10,
      repeat:-1,
      duration:0.6,
      yoyo:true,
      ease:"elastic"

     })
  },[])
  return (
    <>
    <div className='md:h-[75vh] h-[100vh] xl:w-full md:flex md:flex-row-reverse  md:relative overflow-hidden bg-transparent pointer-events-none md:top-[3vh]'> 
    <div className="heroSection h-[50vh] xl:relative xl:top-[3vh] xl:right-[25vh] xl:z-20 bg-transparent">
        <div className="imageSection md:w-[50vh] flex relative justify-center top-[2vh] md:top-[6vh] xl:top-[4vh] bg-transparent">
            <div className="image z-20 bg-transparent pointer-events-none">
              <img className="h-[37vh] w-[37vh] xl:h-[45vh] xl:w-[45vh] z-20 pointer-events-none bg-transparent rounded-full relative top-[2.2vh] " src={ProfileImage} alt="" />
            </div>
            <div className='circle h-[45vh] w-[45vh] xl:h-[55vh] xl:w-[55vh] border-[17px] absolute rounded-full border-dotted border-[#00ff99] bg-transparent z-30'>
            </div>
            
        </div>
    </div>
    <div className='xl:flex xl:flex-col xl:sticky xl:pr-[8rem] 2xl:pr-[8rem] xl:top-[3vh] overflow-hidden bg-transparent z-30 pointer-events-none'>
    <div className="informationSection xl:w-[60%] text-white flex justify-center items-center md:items-start xl:items-start pointer-events-none md:pl-[4vh] xl:pl-[0vh] text-center md:mt-[8vh] md:text-left flex-col bg-transparent">
            <h2 className="text-[3vh] font-['lato-regular'] xl:text-[4vh] bg-transparent pointer-events-none">Software Developer</h2>
            <h1 className="text-[5.5vh] leading-[6vh] text-[#00ff99] font-['lato-bold'] pointer-events-none md:leading-[10vh] md:text-[7.5vh] xl:text-[10vh] xl:leading-[12vh] bg-transparent">Hello, I am </h1>
            <h1 className="text-[5.5vh] leading-[6vh] text-[#00ff99] font-['lato-bold'] pointer-events-none  md:leading-[10vh] md:text-[7.5vh] xl:text-[10vh] xl:leading-[12vh] bg-transparent">Bhuwan Thapa</h1>
            <p className='text-[2vh] px-[6vh] md:px-[0vh] font-["lato-regular"] opacity-[0.5] pointer-events-none mt-[2vh] md:mt-[2vh] bg-transparent'>I am a Front-end Develper . I have 1 year experience as a front-end developer with some basic knowlegde about UI and UX Design.</p>
        </div>
        <div className="links flex text-white justify-center items-center md:justify-start mt-[2vh] md:w-[65vh] md:mt-[6vh] gap-[3.6vh] pl-[3vh] xl:pl-[0vh] bg-transparent">
          <button className="flex relative font-mono text-[2.2vh] justify-center items-center gap-[1.3vh] border-2 border-[#00ff99] px-[1.2vh] py-[0.5vh] rounded-2xl md:w-[20vh] pointer-events-auto  hover:text-black overflow-hidden"><h3 className='relative z-10 bg-transparent'>Download CV</h3><GoDownload id='download-icon' className=" text-white relative z-10 bg-transparent" /></button>
          <a className="h-[4.5vh] w-[4.5vh] border-2 border-[#00ff99] flex items-center justify-center rounded-full relative overflow-hidden hover:text-black bg-transparent pointer-events-auto" href="#">< FaFacebookF className='relative z-10 bg-transparent'/></a>
          <a className="h-[4.5vh] w-[4.5vh] border-2 border-[#00ff99] flex items-center justify-center rounded-full relative overflow-hidden hover:text-black bg-transparent pointer-events-auto" href="#"><FaGithub className='relative z-10 bg-transparent'/></a>
          <a className="h-[4.5vh] w-[4.5vh] border-2 border-[#00ff99] flex items-center justify-center rounded-full relative overflow-hidden hover:text-black bg-transparent pointer-events-auto" href="#">< FaLinkedin className='relative z-10 bg-transparent' /></a>
          <a className="h-[4.5vh] w-[4.5vh] border-2 border-[#00ff99] flex items-center justify-center rounded-full relative overflow-hidden hover:text-black bg-transparent pointer-events-auto" href="#"><FiTwitter className='relative z-10 bg-transparent' /></a>
        </div>
    </div> 
    <div className="project-btn hidden md:flex flex-col justify-center items-center gap-[0.5vh] absolute xl:top-[60vh] xl:right-[85vh] lg:right-[60vh] md:right-[40vh] md:top-[60vh] z-30 bg-transparent">
          <button className="text-[4vh] pointer-events-auto font-['lato-regular'] text-zinc-900 xl:text-[5vh] rounded-xl bg-gradient-to-r from-[#00ff99] 70% px-[2vh] to-green-400 relative overflow-hidden"><h3 className='relative z-40'>Latest Projects</h3></button>
          < FaArrowDownLong className="downArrow text-[#00ff99] text-[4vh] xl:text-[5vh] bg-transparent z-50"/>
        </div>
    {/* <hr className='hidden md:text-white border-2 mt-[30vh] border-white md:block' /> */}
    </div>
      <div className="border-[0.44px] mb-[2vh]  md:relative md:top-[25vh]"></div>
    </>
  )
}

export default Hero