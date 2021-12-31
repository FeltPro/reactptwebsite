import "./about.css";

const About = () => {
    return (
      <div className="a" id="about">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src="assets\thumbnail_5935-BL-0788.jpg" alt="about-pic"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Here to help you achieve your fitness goals
        </p>
        <p className="a-desc">
          Through delivering personal training sessions, 
          I take great pleasure in helping clients achieve 
          their goals and enjoyed being able to pass on my 
          knowledge and experiences to others. 
          I decided to start my own business 
          (LB Fitness goals). LB Fitness Goals will encourage 
          all clients to achieve and maintain a healthy lifestyle 
          through fun and challenging experiences during personal 
          training sessions.    
        </p>
      </div>
    </div>
  );
};

export default About


