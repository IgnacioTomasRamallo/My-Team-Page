import Img1 from "../assets/img/photo1.png";
import Img2 from "../assets/img/photo2.png";
import Img3 from "../assets/img/photo3.png";
import Img4 from "../assets/img/photo4.png";
import Img5 from "../assets/img/photo5.png";
import Img6 from "../assets/img/photo6.png";

const personas = [
    {
    id:1,
    name:'Bill Mahoney',
    img: Img1,
    job:'Product Owner',
    },
    {
    id:2,
    name:'Saba Cabrera',
    img: Img2,
    job:'Art Director',
    margin:'margin',
    },
    {
    id:3,
    name:'Shae Le',
    img: Img3,
    job:'Tech Lead',
    },
    {
    id:4,
    name:'Skylah Lu',
    img: Img4,
    job:'Ux Designer',
    },
    {
    id:5,
    name:'Griff Richards',
    img: Img5,
    job:'Developer',
    },
    {
    id:6,
    name:'Stan John',
    img: Img6,
    job:'Developer',
    }
];

export const personaInfo = () =>{
    return new Promise((resolve) =>{
        resolve(personas)
    })
};