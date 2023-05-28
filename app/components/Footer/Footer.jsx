import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter mt-6">
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">Follow Me : </h3>
              <ul className="flex justify-center mt-4">
                <li className="mx-2">
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ameer86/"
                    target="_blank"
                  >
                    <BsLinkedin className="text-2xl" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    rel="noreferrer"
                    href="https://stackoverflow.com/users/19499075/ameer"
                    target="_blank"
                  >
                    <BsStackOverflow className="text-2xl" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    rel="noreferrer"
                    href="https://ameer-portfolio2023.netlify.app/"
                    target="_blank"
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    rel="noreferrer"
                    href="https://github.com/Ameerusa86"
                    target="_blank"
                  >
                    <BsGithub className="text-2xl" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCoC2WTn5wlxcqGkbLbUH8-w"
                    target="_blank"
                  >
                    <BsYoutube className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 text-center">
              <div className="text-sm text-gray-500">
                <small>
                  © Developed and Designed by{" "}
                  <a
                    href="https://www.youtube.com/channel/UCoC2WTn5wlxcqGkbLbUH8-w"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AMEER HASAN
                  </a>
                  .
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
