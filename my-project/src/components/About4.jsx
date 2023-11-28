import React from "react";
import img5 from "../assets/img5.PNG";
import Button from "../layout/button";
import { Link } from "react-scroll";

const About4 = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        
        <img src={img5} alt="img" width="450" height="450" />
      </div>
     
      <div className="w-full md:w-2/4 text-center space-y-2">
<h2  className=" text-5xl font-semibold leading-tight">Membership </h2>

        <p >
        There are more than 421,355 IEEE members in over 160 countries 
        around the world.
         IEEE members are engineers, scientists,
         and allied professionals whose technical interests are rooted 
         in electrical and computer sciences, engineering, and related 
         disciplines.

The highest grade of membership, IEEE Fellow, is attained through 
nomination by peers and approval by the IEEE Board of Directors for 
distinction in the profession.</p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About4;