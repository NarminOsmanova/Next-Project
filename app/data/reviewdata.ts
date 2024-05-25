import { StaticImageData } from "next/image";
import img from '../../public/client1.png'
import img2 from '../../public/client2.jpg'

interface Review {
    id: number;
    image: StaticImageData;
    fullname: string;
    position:string;
    description: string;
}

const reviewdata:Review[]=[
    {
        id:1,
        image: img,
        fullname:"Annie Stanley",
        position:"Head of Design, Layers",
        description:"“iFixhere has saved us thousands of hours of work. We’re able to spin up”",
    },
    {
        id:2,
        image:img2,
        fullname:"Kelly Williams",
        position:"Head of Design, Layers",
        description:"“iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.”",
    },
    {
        id:3,
        image:img,
        fullname:"Annie Stanley",
        position:"Head of Design, Layers",
        description:"“iFixhere has saved us thousands of hours of work. We’re able to spin up”",
    },
    {
        id:4,
        image: img2,
        fullname:"Kelly Williams",
        position:"Head of Design, Layers",
        description:"“iFixhere has saved us thousands of hours of work.”",
    },
]
export default reviewdata;