import { StaticImageData } from 'next/image';
import img from '../../public/blogpicture.jpg';

interface Blog {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    category:string;
    time: string;
  }
  
const blogdata :Blog[]=[
    {
        id:1,
        image:img,
        title:"UX review presentations",
        description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
        category:"Tech news",
        time:"20 Jan 2022"
    },
    {
        id:2,
        image:img,
        title:"UX review presentations",
        description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
        category:"Phones",
        time:"20 Jan 2022"
    },
    {
        id:3,
        image:img,
        title:"UX review presentations",
        description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
        category:"Releases",
        time:"20 Jan 2022"
    },
    {
        id:4,
        image:img,
        title:"UX review presentations",
        description:"How do you create compelling presentations that wow your colleagues and impress your managers?",
        category:"Tech news",
        time:"20 Jan 2022"
    },
]
export default blogdata