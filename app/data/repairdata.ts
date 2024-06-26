import { StaticImageData } from "next/image";
import phone from '../../public/phones.png'
import tablet from '../../public/tablets.png'
import laptop from '../../public/laptop.png'
import watch from '../../public/watch.png'
import game from '../../public/game.png'

interface Repair {
    id: number;
    image: StaticImageData;
    title:string;
    description:string;
}
const repairdata:Repair[] = [
    {
        id:1,
        image:phone,
        title:"Phones",
        description:"At “iFixHere”, we specialize in providing fast, reliable, and affordable smartphone repairs. Whether you own an Apple, Samsung, or any other phone brand, our experts are here to bring your device back to life. With years of experience and a commitment to quality, we understand your phone's unique needs and deliver top-notch solutions. Trust us for a seamless repair experience and get your smartphone working like new again."
    },
    {
        id:2,
        image:tablet,
        title:"Tablets",
        description:"We specialize in tablet repairs that are fast, reliable, and affordable. Our expert technicians are dedicated to reviving your device, whether it's an iPad, Samsung Galaxy Tab, or any tablet brand. With years of experience and a commitment to quality, we understand the intricacies of tablet technology. Trust us for a seamless repair experience, and see your tablet perform like new again.",
    },
    {
        id:3,
        image:laptop,
        title:"Laptop",
        description:"Your Laptops meet their revival experts! We've mastered the art of laptop repair, seamlessly combining speed, reliability, and affordability. Whether it's a sleek MacBook, a dependable Dell, or any laptop brand in between, our seasoned technicians are dedicated to rejuvenating your device. Entrust us with your laptop, and witness its triumphant return to peak performance!"
    },
    {
        id:4,
        image:watch,
        title:"Smartwatch",
        description:"We're your smartwatch repair aficionados, offering swift, reliable, and budget-friendly solutions. Whether it's an Apple Watch, a Samsung Galaxy Watch, or any other smartwatch brand, our expert technicians are devoted to bringing life back to your device. With extensive hands-on experience and an unwavering commitment to excellence, we decode the intricate world of smartwatches."
    },
    {
        id:5,
        image:game,
        title:"Game Console",
        description:"Our skilled technicians are dedicated to breathing new life into your gaming world. With years of hands-on experience and an unwavering commitment to quality, we understand the complexities of game console technology. Place your trust in us for a seamless repair experience, and get back to gaming at full throttle!."
    },
]
export default repairdata;