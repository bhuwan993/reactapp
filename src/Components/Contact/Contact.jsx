import {useState} from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const Contact = () => {
  const [closeContact, setCloseContact] = useState(false);
  let contactContainer = document.querySelector('.contact-container');
  // let crossBtn  =  document.querySelector('.cross');
  function close(){
     setCloseContact(!closeContact);
    contactContainer.style.display = "none";
  }
  return (
    <div className="contact-container hidden fixed top-[1vh] flex-col  items-center justify-center z-40 h-[100vh] w-[100vw]">
      <div className="contact-section relative h-[90%] w-[70%] pl-[15vh] py-[7vh]  rounded-3xl flex-col bg-[#2c2c2c] flex gap-[5vh]">
      <div className="flex flex-col text-left w-1/2">
       <h1 className="relative text-[5vh] font-['lato-bold'] text-[#00ff99]">Let's work together</h1>
        <p className="relative  text-[2vh] font-['lato-regular'] text-[#fff] opacity-50 w-[70vh] text-left">If you want to work with me then you will be contact in below contact section and also you will be leave a message.</p>
        </div>
       <div className="flex gap-[4vh]">
        <div className="rightSection flex flex-col w-1/2">
          <form action="#">
            <div className="grid grid-cols-2  gap-[4vh]">
            <input className="border-none bg-[#111] px-[3vh] py-[2vh] rounded-3xl" type="text" placeholder="First Name" />
            <input className="border-none bg-[#111] px-[3vh] py-[2vh] rounded-3xl" type="text" placeholder="Last Name" />
            <input className="border-none bg-[#111] px-[3vh] py-[2vh] rounded-3xl" type="email" placeholder="Email" />
            <input className="border-none bg-[#111] px-[3vh] py-[2vh] rounded-3xl" type="number" placeholder="Phone Number" />
            <textarea className="border-none bg-[#111] px-[3vh] py-[2vh] rounded-3xl w-[68vh] h-[27vh]" type="text" placeholder="Type your message here !" />
            </div>
            <input className="mt-[6vh] px-[4vh] py-[1.5vh] relative left-[28%] bottom-[5%] text-[3vh] font-['lato-regular'] rounded-2xl bg-blue-600 text-white" type="submit" value='send message' name="login" id="login" />
          </form>
        </div>
        <div className="leftSection flex flex-col relative left-[5vh] gap-[4vh]">
               <div className="flex gap-[3vh] justify-start  items-center">
                  <div>
                    <FaPhone className="text-[#00ff99] text-[4vh]" />
                  </div>
                  <div>
                    <h1 className="font-['lato-bold'] text-[3vh] text-[#00ff99]">Phone</h1>
                    <p className="font-['lato-bold'] text-[3vh] text-[#00ff99]">+977 9865569082</p>
                  </div>
               </div>
               <div className="flex gap-[3vh] justify-start  items-center">
                <div>
                 <MdEmail className="text-[#00ff99] text-[4vh]" />
                </div>
                <div>
                    <h1 className="font-['lato-bold'] text-[3vh] text-[#00ff99]">Email</h1>
                    <p className="font-['lato-bold'] text-[3vh] text-[#00ff99]">tbhuwan839@gmail.com</p>
                </div>
               </div>
               <div className="flex gap-[3vh] justify-start  items-center">
                <div>
                 <FaLocationDot className="text-[#00ff99] text-[4vh]"/>
                </div>
                <div>
                    <h1 className="font-['lato-bold'] text-[3vh] text-[#00ff99]">Address</h1>
                    <p className="font-['lato-bold'] text-[3vh] text-[#00ff99]">Naya Thimi,Bhaktapur,Nepal</p>
                </div>
               </div>
       </div>
        </div>
        <div onClick={close}  className="about-cross absolute top-[6vh] right-[8vh] overflow-hidden border h-[4vh] w-[4vh] p-[1vh] flex justify-center items-center rounded-full cursor-pointer">
          <ImCross className="cross-symbol relative z-40 text-[#00ff99]" />
       </div>
  </div>    
  
</div>
  );
};

export default Contact;
