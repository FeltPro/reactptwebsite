import "./works.scss";
import { worksData } from "../../data";
import { useState } from "react";


export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : worksData.length - 1) 
        : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {worksData.map(d => (
                <div key={d.id} className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} 
                            alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" 
                className="arrow left" 
                alt="left-arrow" 
                onClick={()=> handleClick("left")}/>
            <img src="assets/arrow.png" 
                className="arrow right" 
                alt="right-arrow" 
                onClick={()=> handleClick()}
            />
        </div>
    )
}
