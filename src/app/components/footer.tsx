import Image from "next/image";
import Logo from "../image/images.png"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
  

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="footer-left">
            <Image src={Logo} alt="Mahnoor" height={150} width={200} className="cursor-pointer ml-7"/>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nihil sint aspernatur. Assumenda consequuntur facilis quam quaerat rerum magni cumque, maiores perferendis possimus voluptas quis praesentium temporibus obcaecati at quos!</p>
             
             <div className="socials">
                <a href="https://www.linkedin.com/in/mahnoor-shaikh/"><i><FaLinkedin/></i></a>
                <a href="https://github.com/MAHNOORSHK"><i><FaGithub/></i></a>
                <a href="https://vercel.com/mahnoor-shaikhs-projects"><i><IoLogoVercel/></i></a>
                <a href="#"><i><FaFacebook /></i></a>
                <a href="#"><i><FaWhatsapp /></i></a>
             </div>
            </div>

            <ul className="footer-right">
                <li>
                    <h2>Product</h2>
                    <ul className="box">
                        <li>Web Design</li>
                        <li>Web Design</li>
                        <li>Web Design</li>
                        <li>Web Design</li>
                        <li>Web Design</li>
                    </ul>
                </li>

                <li>
                    <h2>Useful Links</h2>
                    <ul className="box">
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                    </ul>
                </li>

                <li>
                    <h2>Address</h2>
                    <ul className="box">
                        <li>Karachi</li>
                        <li>Lahore</li>
                        <li>Hyderabad</li>
                        <li>Nawabshah</li>
                        <li>Sukkur</li>
                        <li>Islamabad</li>
                    </ul>
                </li>

                <li>
                    <h2>Address</h2>
                    <ul className="box">
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                        <li>Theme Design</li>
                    </ul>
                </li>
            </ul>

            <div className="footer-bottom">
                <p>All Right reserved by &copy;conceptial 2024</p>
            </div>
        </footer>
        </>
    )
}