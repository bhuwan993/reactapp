import {useState} from 'react'
// import Circleword from "../CircleWord/Circleword"
import mPhoto from '../../assets/icons/mongodb.svg'
import ePhoto from '../../assets/icons/express.svg'
import rPhoto from '../../assets/icons/react.svg'
import nPhoto from '../../assets/icons/node.svg'
import { ImCross } from "react-icons/im";
import "./About.css"

const About = () => {
  const [closeAbout, setCloseAbout] = useState(false);
  let closeAbout1 = document.querySelector('.about');
    function closeAboutSection(){
      setCloseAbout(!closeAbout);
      closeAbout1.style.transform = "scale(0)";
    }
  return (
    <div className='about fixed flex scale-0 top-[2%] rounded-2xl px-[8vh] gap-[2vh]  text-white flex-col items-center w-[60vw] h-[95vh] bg-zinc-800  z-40 left-[15%] pt-[6vh]'>
       <h1 className="text-[5vh] font-['lato-bold'] text-[#00ff99] mt-[5vh]">ABOUT ME</h1>
       <div className="information text-[2.4vh] text-[#fff] font-['lato-regular']">
        I help business owners and busy web developers to design & develop creative website that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.
       </div>
        {/* <div className="flex flex-wrap gap-[1.5vh] tracking-tighter">
          <Circleword text={'#javascript'}/>
          <Circleword text={'#react.js'}/>
          <Circleword text={'#redux'}/>
          <Circleword text={'#node.js'}/>
          <Circleword text={'#express.js'}/>
          <Circleword text={'#mongoDB'}/>
          <Circleword text={'#mongoose'}/>
          <Circleword text={'#mysql'}/>
          <Circleword text={'#ejs'}/>
          <Circleword text={'#html'}/>
          <Circleword text={'#css'}/>
          <Circleword text={'#three.js'}/>
          <Circleword text={'#bootstrap'}/>
          <Circleword text={'#tailwind'}/>
          <Circleword text={'#git'}/>
          <Circleword text={'#github'}/>
          <Circleword text={'#gsap'}/>
          <Circleword text={'#framemotion'}/>
          <Circleword text={'#locomotive'}/>
       </div> */}
       <div className="mt-[5vh]">
        <h1 className='font-["lato-bold"] text-[4vh] text-[#00ff99]'>MERN STACK</h1>
       </div>
       <div className="flex gap-[3vh] justify-center items-center mt-[4vh]">
        <div className="flex flex-col justify-center items-center gap-[2vh]">
            <img className="h-[10vh]" src={mPhoto} alt="mangodb" />
            <h1 className='text-[5vh] font-["lato-bold"] text-[#47a248]'>M</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-[2vh]">
            <img className="h-[10vh]" src={ePhoto} alt="expess.js" />
            <h1 className='text-[5vh] font-["lato-bold"]'>E</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-[2vh]">
            <img className="h-[10vh]" src={rPhoto} alt="react.js" />
            <h1 className='text-[5vh] font-["lato-bold"] text-[#61d9fa]'>R</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-[2vh]">
            <img className="h-[10vh]" src={nPhoto} alt="node.js" />
            <h1 className='text-[5vh] font-["lato-bold"] text-[#8cc84b]'>N</h1>
        </div>
    </div>
       <div onClick={closeAboutSection} className="about-cross absolute top-[6vh] right-[8vh] overflow-hidden border h-[4vh] w-[4vh] p-[1vh] flex justify-center items-center rounded-full cursor-pointer">
          <ImCross className="cross-symbol relative z-40" />
       </div>
    </div>
  )
}

export default About