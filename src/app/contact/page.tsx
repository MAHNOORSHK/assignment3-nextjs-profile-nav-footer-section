import Footer from "../components/footer";
import Header from "../components/header";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export default function Contact(){
    return(
        <>
        <Header/>
        <div className="w-full bg-slate-600">
            <h1 className="text-[35px] text-center underline font-extrabold font-sans">Contact Me</h1>
            <h1 className="text-[35px] text-center text-white underline font-extrabold font-sans">Mahnoor Shaikh</h1>
            
            <div className="socials ml-5 text-center">
                <a href="https://www.linkedin.com/in/mahnoor-shaikh/"><i><FaLinkedin/></i></a>
                <a href="https://github.com/MAHNOORSHK"><i><FaGithub/></i></a>
                <a href="https://vercel.com/mahnoor-shaikhs-projects"><i><IoLogoVercel/></i></a>
                <a href="#"><i><FaFacebook /></i></a>
                <a href="#"><i><FaWhatsapp /></i></a>
             </div>
        </div>
        <Footer/>
        </>
    )
}