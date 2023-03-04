import React from "react";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-center p-1">
      <a href="https://github.com/ZainKhawaja98" className='icon'>
        {/* <FaGithub size={40}></FaGithub> */}
      </a>
      <a href="https://www.linkedin.com/in/zain-khawaja-252846224/" className='icon'>
        {/* <FaLinkedinIn size={40}></FaLinkedinIn> */}
      </a>
      <a href="mailto: zainkhawaja98@gmail.com" className='icon'>
        {/* <AiOutlineMail size={40}></AiOutlineMail> */}
      </a>
    </footer>
  );
}

export default Footer;