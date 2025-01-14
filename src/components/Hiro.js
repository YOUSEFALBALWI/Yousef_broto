import { useState } from "react";

import profile from "../assets/E7k.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading..
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          {/* <img className="rounded-full w-80 h-80" src="/docs/images/examples/image-4@2x.jpg" alt="image description"/> */}
          {/* <br></br>
                    <br></br>
                    <br></br> */}

          <img
            className="rounded-full h-auto max-h-80 "
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Ehab Hakami</h1>
            <p class="text-xl font-bold text-gray-300">Front-End Developer</p>
            <p className="text-md font-light text-gray-400 ">
              Proficient in the field of mobile app development with over two years of experience.
             Committed to delivering exceptional performance and achieving success in mobile programming languages. Possess strong skills in researching, developing, 
             and finding solutions to encountered challenges. I work diligently to continuously enhance my skills. I am passionate about programming languages, their intricacies, 
             and staying updated with their latest developments. I am always on the lookout for opportunities to improve, develop, and achieve goals.
            </p>
          </div>
          {/* <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/EHAB7k"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/ehabhakami/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+966550199599"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
