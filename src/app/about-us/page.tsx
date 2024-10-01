import Footer from "../components/footer"
import Header from "../components/header"
import Image from "next/image";
import Mahnoor from "../image/mahnoor.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export default function About(){
    return(
        <>
        <Header/>
        <div className="flex flex-col  md:flex-row bg-gray-600 sm:mt-[170px] lg:mt-auto md:mt-auto">
        <div className="mt-2 flex justify-center md:m-auto md:justify-start "><Image src={Mahnoor} height={300} width={300} alt="governor" className="h-72 m-2  items-end justify-center md:mr-40  md:w-[200px] lg:w-[400px] rounded-[50%] border-black border-2"/></div>
        <div className=" w-full h-fit md:w-1/2 pt-5 md:py-10 ">

        <div className="w-full text-white">
            <h1 className="text-[35px] text-center underline font-extrabold font-sans">About Me</h1>
            <h1 className="text-[35px] text-center text-white underline font-extrabold font-sans">Mahnoor Shaikh</h1>
            
            <div className="socials ml-5 text-center">
                <a href="https://www.linkedin.com/in/mahnoor-shaikh/"><i><FaLinkedin/></i></a>
                <a href="https://github.com/MAHNOORSHK"><i><FaGithub/></i></a>
                <a href="https://vercel.com/mahnoor-shaikhs-projects"><i><IoLogoVercel/></i></a>
                <a href="#"><i><FaFacebook /></i></a>
                <a href="#"><i><FaWhatsapp /></i></a>
             </div>
          </div>
      </div>
      </div>
        <Footer/>
        </>
    )
}