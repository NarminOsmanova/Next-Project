import React from "react";
import home from "../styles/home.module.scss";
import { FaRegEnvelope } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const ContactComponents = () => {
  return (
    <>
      <div className={home.contact_left}>
        <div className={home.contact_left_top}>
          <span>Contact us</span>
          <h3>Get in touch</h3>
          <p>
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>
        <div className={home.contact_left_first}>
          <span>
            <FaRegEnvelope />
          </span>
          <p>Email</p>
          <span>Our friendly team is here to help.</span>
          <span>hi@test.com</span>
        </div>
        <div className={home.contact_left_second}>
          <span>
            <GrLocation />
          </span>
          <p>6 different states</p>
          <span>Las Vegas, Chicago, New York, Seattle, California</span>
          <span>
            See All Locations <MdOutlineArrowOutward />
          </span>
        </div>
      </div>
      <div className={home.contact_right}>
        <div>
          <label htmlFor="">Full name</label>
          <input type="text" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="" placeholder="you@company.com" id="" />
        </div>
        <div>
          <label htmlFor="">Phone number (Optional)</label>
          <input type="tel" placeholder="+1 (xxx) xxx-xxxx" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea name="" id="" rows={10}></textarea>
        </div>
        <div>
          <input type="checkbox" name="" id="agree" />
          <label htmlFor="agree">
            You agree to our friendly <Link href={"#"}>privacy policy</Link>.
          </label>
        </div>
        <button className="btn">Send message</button>
      </div>
    </>
  );
};

export default ContactComponents;
