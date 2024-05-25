import React from "react";
import footer from "../styles/footer.module.scss";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={` ${footer.footer}`}>
      <div className={`contain ${footer.footer_top}`}>
        <div>
          <p>Join our newsletter</p>
          <span>We’ll send you a nice letter once per week. No spam.</span>
        </div>
        <div>
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
     <div className={`contain ${footer.footer_bottom}`}>
     <div className={footer.footer_bottom_first}>
        <div>
          <span>Everyone deserves a second chance, so do your phone!</span>
        </div>
        <div>
          <div className={footer.flex}>
          <div>
          <Link href={"/repair"}>Repairs</Link>
          <Link href={"/locations"}>Locations</Link>
          <Link href={"/about"}>About us</Link>
          </div>
          <div>
          <Link href={"/contact"}>Contact us</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/careers"}>Careers</Link>
          </div>
          </div>
          <div className={footer.flex}>
            <Link href={'https://x.com/'} target="_blank"><FaTwitter/></Link>
            <Link href={'https://linkedin.com/'} target="_blank"><FaLinkedin/></Link>
            <Link href={'https://facebook.com/'} target="_blank"><FaFacebook/></Link>
            <Link href={'https://github.com/'} target="_blank"><FaGithub/></Link>
          </div>
        </div>
       
      </div>
      <div className={footer.footer_bottom_end}>
          <span>© 2077 Untitled UI. All rights reserved.</span>
          <div>
          <Link href={'/'}>Terms</Link>
          <Link href={'/'}>Privacy</Link>
          <Link href={'#faqs'}>FAQs</Link>
          </div>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
