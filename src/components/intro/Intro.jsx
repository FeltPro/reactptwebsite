import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true,
            backDelay:  5000,
            backSpeed: 60,
            strings: ['Personal Trainer', 'Coach' ] })
        
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/lydiaprof.png" alt="profile-pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="top">
                        <h2>Hi, I'm </h2>
                        <h1>LB</h1>
                        <h3><span ref={textRef}></span></h3>
                    </div>
                    <div className="bottom">
                        <p>
                            Welcome to my new personal training website. 
                            Here you’ll find everything you need to know 
                            about about my services and how I can help you on
                            your journey to achieving your fitness goals and improving 
                            your lifestyle change.
                        </p>
                    </div>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="link-icon" />
                </a>
            </div>
        </div>
    )
}
