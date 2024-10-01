
import Link from "next/link";
import Logo from "../image/images.png"
import "@/app/about-us/page"
import "@/app/contact/page"
import Image from "next/image";

export default function Header(){
    return(
        <>
            <div className="bg-[#011c39] font-serif flex justify-between items-center py-[10] px-[5%] ">
            <div>
            <Image src={Logo} alt="Mahnoor" height={150} width={200} className="cursor-pointer"/>
            </div>
            <div className="md:static absolute md:min-h-fit min-h-[25vh] left-0 top-[15%] md:w-auto w-full bg-[#011c39]  flex lg:items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center text-xl font-medium text-[#edf0f1] md:gap-[4vh] gap-6 ">
                    <Link href={"/"}><li className="hover:text-[#0088a9]">Portfolio</li></Link>
                    <Link href={"about-us"}><li className="hover:text-[#0088a9]">About</li></Link>
                    <Link href={"contact"}><li className="hover:text-[#0088a9]">Contact Us</li></Link>
                </ul>
            </div>
            <button className="py-2 px-7 bg-[#0099CC] text-xl border-none text-white rounded-lg hover:bg-[#0088a9]">Search</button>
                
            </div>
        </>
    )
}