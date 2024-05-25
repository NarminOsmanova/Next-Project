import { StaticImageData } from "next/image";
import tablet from '../../public/tablet.png';
import laptop from '../../public/laptop.svg';
import watch from '../../public/watch.svg';

interface Product {
    id: number;
    image: StaticImageData;
    title:string;
}

const productdata:Product[]=[
    {
        id:1,
        image: tablet,
        title:"Phones",
    },
    {
        id:2,
        image: tablet,
        title:"Tablets",
    },
    {
        id:3,
        image: laptop,
        title:"Laptop",
    },
    {
        id:4,
        image: watch,
        title:"Smartwatch",
    },
    {
        id:5,
        image: watch,
        title:"Game Console",
    },
]
export default productdata