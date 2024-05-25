import React from 'react'
import BlogComponents from '../components/BlogComponents'
import home from '../styles/home.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

const page = () => {
  return (
    <div className={home.blogs}>
      <BlogComponents/>
    </div>
  )
}

export default page
