import React from 'react'
import home from '../styles/home.module.scss'
import repairdata from '../data/repairdata'
import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";

const RepairComponents = () => {
  return (
    <div>
      <div className={home.repair_title}>
        <h3>Repair with Us</h3>
        <p>With us, you can have all your electronic devices repaired quickly and safely.</p>
      </div>
      {
        repairdata.map((item)=>(
            <div key={item.id} className={home.repair_item}>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button><MdOutlineArrowOutward /> Start a Repair</button>
                </div>
                <div>
                    <Image src={item.image} alt={item.title} width={608} height={576}></Image>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default RepairComponents
