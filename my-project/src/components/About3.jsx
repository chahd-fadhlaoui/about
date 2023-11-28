import React from 'react'
import Button from "../layout/button";
import { Link } from "react-scroll";
import img4 from "../assets/img4.PNG";

const About3 = () => {
  return(
   <div className=' min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10"'>
      <div className=" md:w-2/4 text-center">
      <h2  className=" text-5xl font-semibold leading-tight">quick facts </h2>
      <p>
      IEEE:

Has 39 Societies and seven technical councils representing the wide range of IEEE technical interests
Has nearly 4 million documents in the IEEE Xplore® Digital Library, with more than 8 million downloads each month
Has over 1,100 active standards and more than 500 standards under development
Publishes approximately 180 transactions, journals, and magazines
Sponsors more than 1,800 conferences in 95 countries while:
Partnering with more than 1,300 non-IEEE entities globally
Attracting more than 485,000 conference attendees.

        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us"/>
        </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-500 md:w-2/5">
  <img src={img4} alt="img" width="450" height="450"/>
</div>



    </div>
  )
}
export default About3