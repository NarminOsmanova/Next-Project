'use client'
import Image from "next/image";
import home from "./styles/home.module.scss";
import ContactComponents from "./components/ContactComponents";
import BlogComponents from "./components/BlogComponents";
import WhyComponents from "./components/WhyComponents";
import FaqComponents from "./components/FaqComponents";
import ReviewComponents from "./components/ReviewComponents";
import ProductComponents from "./components/ProductComponents";
import RepairComponents from "./components/RepairComponents";
import { FiTool } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className={home.flex}>
        <div>
          <h1>Instant and Reliable Electronics Repair Near You!</h1>
          <button className="btn">
            <FiTool/> Start a Repair
          </button>
        </div>
        <div>
          <Image src={"/phone.png"} width={576} height={628} alt="" />
        </div>
      </section>
      <section className={home.product}>
        <ProductComponents/>
      </section>
      <section className={home.repair}>
        <RepairComponents/>
      </section>
      <section className={home.why}>
        <WhyComponents/>
      </section>
      <section className={home.review}>
        <ReviewComponents/>
      </section>
      <section className={home.faqs}>
        <FaqComponents/>
      </section>
      <section className={home.blogs}>
        <BlogComponents />
      </section>
      <section className={home.contact}>
        <ContactComponents />
      </section>
    </>
  );
}
