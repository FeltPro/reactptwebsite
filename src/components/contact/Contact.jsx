import "./contact.scss"

export default function Contact() {

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="wrapper">
                    <h6>Certificates</h6>
                    <div className="wrapper">
                        <ul>
                            <p>Qualified Personal trainer</p>
                            <p>Level 2 Gym Instructing Qualification (level 3 EQF)</p>
                            <p>Planning and Delivering Personal Training (RQF)</p>
                            <p>Advanced Training Systems (CPD)</p>
                        </ul>
                    </div>
                    <img 
                        src="assets/insured.png"
                        alt="insurance-certificate"
                />
                </div>
            </div>            
            <div className="right">
            <h2>Where to find me</h2>
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.285803637585!2d-2.4801146842601325!3d51.452908829626274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718571514df617%3A0x5b4cd27f45e0afdc!2sWarmley%2C%20Bristol%20BS30%208XT!5e0!3m2!1sen!2suk!4v1634821936232!5m2!1sen!2suk">
                    </iframe>
                </div>
                <div className="split">
                    <div className="address">
                        <p> Unit 2, Brook Business Park</p>
                        <p> Tower Road,</p>
                        <p> Warmely</p>
                        <p> BS30 8XT</p>
                    </div>
                    <div className="warmley-pic">
                    <img
                        src="assets\frameandform.png"
                        alt="location-logo"
                        loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
