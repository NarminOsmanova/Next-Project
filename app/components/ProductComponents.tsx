import React from 'react'
import productdata from '../data/product'
import Image from 'next/image'
import home from '../styles/home.module.scss'

const ProductComponents:React.FC = () => {
  return (
    <div className={home.product_items}>
      {productdata.map((item)=>(
        <div key={item.id}>
        <Image src={item.image} alt='' width={28} height={28}></Image>
        <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductComponents
