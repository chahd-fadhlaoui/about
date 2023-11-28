import React from 'react'
import Button from "../layout/button";
import { Link } from "react-scroll";
import img2 from "../assets/img2.PNG";

const About1 = () => {
  return(
   <div className=' min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10"'>
      <div className=" md:w-2/4 text-center">
      <h2  className=" text-5xl font-semibold leading-tight">about IEEE</h2>
      <span className="text-blue-500 font-semibold "> IEEE</span>
      <p>
      IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences,
     technology standards, and professional and educational activities.

        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us"/>
        </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-500 md:w-2/5">
  <img src={img2} alt="img" width="450" height="450"/>
</div>



    </div>
  )
}
export default About1