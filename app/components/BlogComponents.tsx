"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import blogdata from "../data/blogdata";
import Image from "next/image";
import home from "../styles/home.module.scss";
import { MdOutlineArrowOutward } from "react-icons/md";

const BlogComponents: React.FC = () => {
  return (
    <>
      <div className={home.blogs_title}>
        <div>
          <h3>Blogs</h3>
          <p>Everything about electronic devices.</p>
        </div>
        <div className={home.swiper_button}>
          <button className="swiper-button-prev">←</button>
          <button className="swiper-button-next">→</button>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        loop={true}
        speed={2500}
        pagination={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonials-swiper"
        breakpoints={{
          275: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {blogdata.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className={home.blog_item}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={384}
                height={240}
              ></Image>
              <div className={home.blog_content}>
                <div>
                  <span>{blog.category}</span>
                  8 min read
                </div>
                <h5>{blog.title} <MdOutlineArrowOutward/></h5>
                <p>{blog.description}</p>
              </div>
              <span>{blog.time}</span>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogComponents;
