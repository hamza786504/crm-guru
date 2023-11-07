import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsDribbble,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_upper bg-cover bg-no-repeat bg-center px-2 pt-28 pb-24">
          <h2 className="text-2xl md:text-4xl text-white text-center max-w-[580px] !leading-snug mx-auto">
            Give your business the edge it deserves with a{" "}
            <span className="relative">
              certified{" "}
              <img
                src="/images/underline.png"
                alt="underline"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              />
            </span>{" "}
            expert
          </h2>
          <div className="text-center">
            <button
              type="button"
              className="bg-white text-purple-blue py-2 p-3 text-sm mt-10 rounded-sm ms-3"
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="footer_lower pt-3 pb-5 px-2">
          <div className="max-w-sm-block mx-auto flex items-center justify-between flex-col md:flex-row">
            <div className="flex items-center justify-center md:justify-start flex-row flex-wrap">
              <Link to="/" className="logo me-6 my-1">
                <img src="/images/footer-logo.png" alt="logo" />
              </Link>
              <ul className="flex items-center justify-start me-4 flex-wrap my-1">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-dark-black text-custom-sm flex items-center pe-2"
                  >
                    Privary Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-services"
                    className="text-dark-black text-custom-sm flex items-center border-l ps-2 pe-4 border-gray-black h-3"
                  >
                    Terms of Services
                  </Link>
                </li>
              </ul>
              <span className="text-custom-sm text-gray-black my-1">
                © CRMguru Ltd. 2023
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-between flex-row flex-wrap mt-3 md:mt-0">
              <Link
                    to="mailto:contact@crmguru.com" className="text-custom-sm text-gray-black me-5 flex items-center  my-1">
              <BsEnvelope className="me-3 text-sm"/>contact@crmguru.com
              </Link>
              <ul className="flex items-center justify-start space-x-3 my-1">
                <li>
                  <Link
                    to="/"
                    className="text-gray-black text-sm flex items-center"
                  >
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-black text-sm flex items-center"
                  >
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-black text-sm flex items-center"
                  >
                    <BsDribbble />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-black text-sm flex items-center"
                  >
                    <BsLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
