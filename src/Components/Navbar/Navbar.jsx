import {useEffect,useState,useRef} from 'react'
import { CgMenuMotion } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { gsap } from 'gsap';
import './Navbar.css'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Navbar = () => {
  const [menubar, setMenubar] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const menuItemRef = useRef(null);
  let menu = document.querySelector('.menubar');
  let aboutSection = document.querySelector('.about');
  let contactSection = document.querySelector('.contact-container')
  function changeMenubar(){
    setMenubar(!menubar);
    menu.style.display = "block";
  }
  function closeMenubar(){
    setMenubar(menubar);
    menu.style.display = "none";
    
  }
  function aboutOpen(){
    setAbout(!about);
    // aboutSection.style.display = "flex";
    aboutSection.style.transform = "scale(1)";
  } 
  function contactOpen(){
    setContact(!contact);
    contactSection.style.display = "flex";
  }
  // useEffect(()=>{
  //   if(!menubar){

  //     gsap.from('.menu-item',{
  //       x:250,
  //       opacity:0,
  //       duration:1,
  //       delay:2,
  //       smoothOrigin:true,
  //       stagger:0.5,
  //     })
  //   }
  // },[menubar])

  return (
    <div className='nav-wrapper'>
      <About />
      <Contact />
    <nav className="navContainer relative  font-['lato-bold'] px-[6vh] py-[4vh] xl:px-[25vh] md:pt-[8vh] bg-transparent">
        <div className="navItems flex justify-between items-center bg-transparent">
            <div className="flex items-baseline gap-[1vh] bg-transparent">
            <h1 className="text-[#00ff99] text-[3vh] md:text-[3.5vh] xl:text-[4.5vh] bg-transparent pointer-events-none z-30">Bhuwan Thapa </h1> <div className='h-[1vh] w-[1vh] rounded-full bg-[#00ff99]'></div>
            </div>
            <CgMenuMotion onClick={changeMenubar} className="md:hidden pointer-events-auto  text-[#00ff99] text-[5vh]  cursor-pointer"/>
            <div className="nav-items hidden md:flex md:gap-[4.5vh] md:justify-center md:items-center xl:gap-[8vh] bg-transparent">
              <a className='text-[#00ff99] font-["lato-bold"] pointer-cursor lg:text-[3vh] text-[2.5vh] flex flex-col justify-center items-center z-20 xl:text-[3vh] bg-transparent' href="index.html"><h1>Home</h1><div id='first-line' className='w-[0vh] border-b-2 border-[#00ff99] relative bottom-[0.5vh]'></div></a>
              <a onClick={aboutOpen} className='text-[#00ff99] font-["lato-bold"] lg:text-[3vh] pointer-cursor flex flex-col justify-center items-center text-[2.5vh] z-20 xl:text-[3vh] bg-transparent' href="#"><h1>About</h1><div id='second-line' className='w-[0vh] border-b-2 border-[#00ff99] relative bottom-[0.5vh]'></div></a>
              <a onClick={contactOpen} className='text-[#00ff99] font-["lato-bold"] pointer-cursor flex lg:text-[3vh] flex-col justify-center items-center text-[2.5vh] z-20 xl:text-[3vh] bg-transparent' href="#"><h1>Contact</h1><div id='third-line' className='w-[0vh] border-b-2 border-[#00ff99] relative bottom-[0.5vh]'></div></a>
              <a className='text-[#00ff99] font-["lato-bold"] pointer-cursor flex lg:text-[3vh] flex-col justify-center items-center text-[2.5vh] z-20 xl:text-[3vh] bg-transparent' href="#Project-container"><h1>Projects</h1><div id='fourth-line' className='w-[0vh] border-b-2 border-[#00ff99] relative bottom-[0.5vh]'></div></a>
              <button onClick={contactOpen} className='hire-btn relative text-[#00ff99] font-["lato-bold"] lg-text-[3vh] pointer-cursor text-[2.5vh] xl:text-[3vh] z-20 border-2 px-[1.7vh] py-[0.7vh] rounded-[30px] border-[#00ff99] overflow-hidden'><h2 className='relative z-10 bg-transparent'>Hire me</h2></button>
            </div>
        </div>
       
        <div  className="hidden menubar fixed right-0 top-6 border-2 border-[#00ff99] border-r-0 h-fit rounded-tl-3xl rounded-bl-3xl bg-black w-[35vh] z-40">
        <div onClick={closeMenubar} id='cross' className="cross relative z-10 left-[25vh] top-[6vh]">
            < ImCross className="text-white text-[3vh] border-2 border-[#00ff99] h-[6vh] w-[6vh] p-[1.2vh] rounded-full cursor-pointer"/>
          </div>
          <div className="list flex flex-col gap-[5vh] z-1 relative px-[4vh] pt-[5vh] pb-[4vh] bg-transparent">
          <a ref={menuItemRef} className="menu-item text-white text-[4vh] font-['lato-bold'] relative right-0 bg-transparent hover:underline" href="#">Home</a>
          <a ref={menuItemRef} className="menu-item text-white text-[4vh] font-['lato-bold'] relative right-0 bg-transparent hover:underline" href="#">About</a>
          <a ref={menuItemRef} className="menu-item text-white text-[4vh] font-['lato-bold'] relative right-0 bg-transparent hover:underline" href="#">Contact</a>
          <a ref={menuItemRef} className="menu-item text-white text-[4vh] font-['lato-bold'] relative right-0 bg-transparent hover:underline" href="#">Services</a>
          <a ref={menuItemRef} className="menu-item text-white text-[4vh] font-['lato-bold'] relative right-0 bg-transparent hover:underline" href="#">Projects</a>
          </div>

        </div>
    </nav>
  </div>
  )
}

export default Navbar