"use client";
import React, { useState } from "react";
import faqdata from "../data/faqdata";
import home from "../styles/home.module.scss";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FaqComponents = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className={home.faqs_title} id="faqs">
        <h3>Frequently Asked Questions</h3>
        <p>Everything you need to know about</p>
      </div>
      <div className={home.faq_accordion}>
        {faqdata.map((item, index) => (
          <div key={item.id} className={home.accordion_item}>
            <div className="accordion-title" onClick={() => handleClick(index)}>
              <p>{item.title}</p>
              <span>{openIndex === index ? <CiCircleMinus/> : <CiCirclePlus/>}</span>
            </div>
            {openIndex === index && <span>{item.description}</span>}
          </div>
        ))}
      </div>
      <div className={home.faqs_end}>
        <div>
          <p>Still have questions?</p>
          <span>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </span>
        </div>
        <button className="btn">Get in touch</button>
      </div>
    </div>
  );
};

export default FaqComponents;
