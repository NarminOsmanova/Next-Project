import React from 'react'
import ContactComponents from '../components/ContactComponents'
import home from '../styles/home.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

const page = () => {
  return (
    <div className={home.contact}>
     <ContactComponents/>
    </div>
  )
}

export default page
