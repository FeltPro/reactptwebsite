import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons" 


export default function Topbar({ menuOpen, menuClose }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"className="logo">L<span>B</span><span>F</span>ITNESS <span>G</span>OALS.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+44(8482)4982</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>lb@gmail.co.uk</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> menuClose(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
