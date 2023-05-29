import React, { useEffect, useState } from "react";
import "../App.css";
import Larrow from "../asset/arrow_Left.png";
import Rarrow from "../asset/arrow_Right.png";
import axios from 'axios';


// import LeftArrow from "./eachpart/LeftArrow";
// import ShowImage from "./eachpart/ShowImage";
// import RightArrow from "./eachpart/RightArrow";

// function MainBox(){
//     return (
//             <div class="top">
//                 <LeftArrow/>
//                 <ShowImage/>
//                 <RightArrow/>
//             </div>x
//     )
// }


import allImage from "./ImageData";

// function MainBox(){
//     const [current,setCurrent] = useState(0)
//     const lengthImageData = allImage.length-1;

//     const previousSlide = () =>{
//         setCurrent(current-1)
//         if(current == 0){
//             setCurrent(lengthImageData)
//         }
//     }

//     const nextSlide = () =>{
//         setCurrent(current+1)
//         if(current == lengthImageData){
//             setCurrent(0)
//         }
//     }

//     console.log(current)
 
//     return(
//         <div className="top">   
//             <img className="leftarrow" src={Larrow} onClick={previousSlide}/>
//             <img className="rightarrow" src={Rarrow} onClick={nextSlide}/>
//             {allImage.map((data,index) => {
//                 return(
//                         <div className={index == current ? "active":"slide" }>
//                             {index === current && 
//                                 (
//                                     <div>
//                                         <img className="image-box" src={data.image}/>
//                                         <p className="image-text">{data.title}</p>
//                                     </div>
//                                 )
//                             }
//                         </div>
//                 )})
//             }
            
//         </div>
//     )
// }

function MainBox() {
    const [current, setCurrent] = useState(0);

    const [data, setData] = useState({ users: [] });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:4000/getimage');
            setData({ users: result.data });
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);

    const lengthImageData = data.users.length - 1;

    const previousSlide = () => {
        setCurrent(current - 1);
        if (current === 0) {
        setCurrent(lengthImageData);
        }
    };

    const nextSlide = () => {
        setCurrent(current + 1);
        if (current === lengthImageData) {
        setCurrent(0);
        }
    };

    useEffect(() => {
        console.log(data.users);
    }, [data]);
    return(
        <div className="top">   
            <img className="leftarrow" src={Larrow} onClick={previousSlide}/>
            <img className="rightarrow" src={Rarrow} onClick={nextSlide}/>
            {data.users.map((exdata,index) => {
                return(
                        <div className={index == current ? "active":"slide" }>
                            {index === current && 
                                (
                                    <div>
                                        <img className="image-box" src={exdata.location}/>
                                        <p className="image-text">{exdata.definition}</p>
                                    </div>
                                )
                            }
                        </div>
                )})
            }
        </div>
    );
}

export default MainBox;