import "./testimonials.scss";
import { testimonialsData } from "../../data";

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>What LB Fitness provides</h1>
            <div className="container">
                {testimonialsData.map(p => (
                    <div key={p.id} className="card featured">
                        <div className="top">
                            <img
                                className="user" 
                                src={p.img}
                                alt="arrow-pic" />
                        </div>
                        <div className="center">
                            {p.desc}
                        </div>
                        <div className="bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
