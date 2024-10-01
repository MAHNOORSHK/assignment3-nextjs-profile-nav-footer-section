import Image from "next/image";
import Mahnoor from "../image/mahnoor.jpg"


export default function Main() {
  return (
    <>
      <div className="flex flex-col  md:flex-row bg-gray-50 sm:mt-[170px] lg:mt-auto md:mt-auto">
        <div className=" w-full h-fit md:w-1/2 pt-5 md:py-10 ">
          <h1 className="whitespace-nowrap text-[2rem] p-4 text-blue-900 tracking-wider font-extrabold leading-10 sm:text-5xl sm:leading-none lg:text-6xl">Mahnoor Shaikh</h1>
          <h1 className="whitespace-nowrap text-[1.5rem] leading-[2rem] tracking-wider text-blue-800 font-semibold pl-4 sm:text-4xl sm:leading-[3rem]  lg:text-[2.5rem]">Web Developer</h1>
          <p className="text-blue-900 pl-4 tracking-wider font-bold text-[1rem] sm:text-2xl text-justify">As a highly skilled web developer, I possess extensive experience in front-end development using React, Typescript, Tailwind CSS, Core CSS, and HTML, as well as back-end development using Node.js and Next.js.</p>
        </div>
        <div className="mt-2 flex justify-center md:m-auto md:justify-end "><Image src={Mahnoor} height={300} width={300} alt="governor" className="h-72 m-2  items-end justify-center md:ml-40  md:w-[200px] lg:w-[400px] rounded-[50%] border-black border-2"/></div>
      </div>
    </>
  );
}
 