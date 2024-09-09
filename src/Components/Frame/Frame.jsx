// import React from 'react'
import labtopFrame from '../../assets/Frames/mackbook1.png'
import tabFrame from '../../assets/Frames/ipad 1.png'
import './Frame.css'
const Frame = (props) => {
  const {Tittle,Technologies,FrameUrl} = props;
  return (
    <>
    <div className="projectContainer  flex-col items-center justify-center xl:mt-[20vh] md:mt-[20vh]">
    <section className="labtop">
    <div className="projectItems relative hidden lg:flex  justify-center items-center h-[40vh] w-[80vw] cursor-pointer">
    <div className="frame absolute z-30 bg-transparent">
      <img className='h-[13rem] w-[26rem] md:h-[20rem] md:w-[40rem]' src={FrameUrl} alt="frame" />
    </div>
    <div className="projectImage absolute z-20 bg-transparent">
      <img className="h-[18rem] rounded-lg w-[30.5rem] relative bg-transparent bottom-[1.5vh] right-[0.vh]" src={props.url} alt="image" />
    </div>
    </div>
    <div className='hidden flex-col lg:flex text-center items-center left-[30vh] relative md:top-[15vh] '>
      <h1 className='text-[#1788ae] relative bottom-[10vh] text-[4vh] font-["lato-bold"] px-[5vh]'>{Tittle}</h1>
      <h1 className='text-[#1788ae] relative bottom-[10vh] text-[4vh] font-["lato-bold"] px-[5vh]'>{Technologies}</h1>
    </div>
    </section>
    <section className="tablet">
    <div className="projectItems relative md:flex hidden lg:hidden justify-center items-center h-[40vh] w-[80vw] cursor-pointer">
    <div className="frame absolute z-30 bg-transparent">
      <img className='h-[13rem] w-[26rem] md:h-[20rem] md:w-[40rem]' src={FrameUrl} alt="frame" />
    </div>
    <div className="projectImage absolute z-20 bg-transparent">
      <img className="h-[19rem] rounded-lg w-[15.5rem] relative bg-transparent" src={props.url} alt="image" />
    </div>
    </div>
    <div className='md:flex lg:hidden hidden flex-col text-center left-[16vh] relative md:top-[5vh]'>
      <h1 className='text-[#1788ae] relative  text-[3vh] font-["lato-bold"] px-[5vh]'>{Tittle}</h1>
      <h1 className='text-[#1788ae] relative  text-[3vh] font-["lato-bold"] px-[5vh]'>{Technologies}</h1>
    </div>
    </section>

  <section className="mobile">
    <div className="projectItems relative flex md:hidden justify-center items-center h-[40vh] w-[80vw] cursor-pointer">
    <div className="frame absolute z-30 bg-transparent">
      <img className='h-[14rem]' src={FrameUrl} alt="frame" />
    </div>
    <div className="projectImage absolute z-20 bg-transparent">
      <img className="h-[13.5rem] rounded-xl w-[6.2rem] relative bg-transparent" src={props.url} alt="image" />
    </div>
    </div>
    <div className='md:hidden lg:hidden flex  flex-col text-center left-[13vh] relative md:top-[5vh]'>
      <h1 className='text-[#1788ae] relative  text-[2vh] font-["lato-bold"] px-[5vh]'>{Tittle}</h1>
      <h1 className='text-[#1788ae] relative  text-[2vh] font-["lato-bold"] px-[5vh]'>{Technologies}</h1>
    </div>
  </section>
</div>
</>
  )
}

export default Frame