import React from "react";
import home from '../styles/home.module.scss'
import Image from "next/image";

const WhyComponents = () => {
  return (
    <>
      <div className={home.why_title}>
        <h3>Why Here?</h3>
        <p>
          Our unwavering commitment to tech excellence ensures flawless repairs.
          Opt for – where Speed, Reliability, and Affordability Meet!
        </p>
      </div>
      <div className={home.why_body}>
        <div className={home.why_left}>
          <div>
            <h2>30 Min</h2>
            <p>Quick Repair</p>
            <span>
              Our Speedy Repair Guarantee! We&apos;ll have your device back in action
              in under 30 minutes.
            </span>
          </div>
          <div>
            <h2>11 Years</h2>
            <p>Years of Experience</p>
            <span>
              With over 11 years of industry experience, our proven expertise
              guarantees exceptional tech repairs and unmatched service quality!
            </span>
          </div>
        </div>
        <div className={home.why_right}>
          <div>
          <Image src={'/icon1.png'} alt="icon" width={72} height={72}></Image>
            <p>Warranty for Repair</p>
            <span>
            Ensuring flawless device performance, we stand confidently behind our work.
            </span>
          </div>
          <div>
            <Image src={'/icon2.png'} alt="icon" width={72} height={72}></Image>
            <p>Professional Technicians</p>
            <span>
            Our Professional Technicians: Your devices in safe hands! We resolve issues with expertise.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyComponents;
