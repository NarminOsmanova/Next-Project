import React from 'react'
import RepairComponents from '../components/RepairComponents'
import home from '../styles/home.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Repair",
  description: "Repair page",
};

const page = () => {
  return (
    <div className={home.repair}>
      <RepairComponents/>
    </div>
  )
}

export default page
