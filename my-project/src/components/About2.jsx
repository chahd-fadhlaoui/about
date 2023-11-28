import React from "react";
import img3 from "../assets/img3.PNG";
import Button from "../layout/button";
import { Link } from "react-scroll";

const About2 = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        
        <img src={img3} alt="img" width="450" height="450" />
      </div>
     
      <div className="w-full md:w-2/4 text-center space-y-2">
                    <h2  className=" text-5xl font-semibold leading-tight">quick facts </h2>

        <p >
        IEEE Quick Facts
IEEE has:

More than 421,000 members in more than 160 countries, more than 50 per cent of whom are from outside the United States
More than 114,000 Student members
334 Sections in ten geographic Regions worldwide
2,116 Chapters that unite local members with similar technical interests
2,806 student branches at colleges and universities in over 100 countries
1,159 student branch chapters of IEEE technical societies
459 affinity groups; IEEE affinity groups are non-technical sub-units of one or more Sections or a Council.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About2;