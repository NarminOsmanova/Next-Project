import { Metadata } from 'next';
import React from 'react'
import WhyComponents from '../components/WhyComponents';
import home from '../styles/home.module.scss';

export const metadata: Metadata = {
    title: "About",
    description: "About page",
  };

const page = () => {
  return (
    <div className={home.why}>
      <WhyComponents/>
    </div>
  )
}

export default page
