import myImage from "./imgs/avt.JPG";
import AnimatePage from "./AnimatedPage";

function Info(){
    return (
        <AnimatePage>
            <div className='todo-app shadow' >
                <h1 className="info-title">React Note App</h1>
                <div className="img-wrap">
                    <img src={myImage} alt="" className="img-avt"/>
                </div>
                <ul className="info-content">
                    <p className="info-name info-content">
                        <li >Student: Sang Le</li>
                    </p>
                   <p className="info-uni info-content">
                        <li >HCMUS - Computer Science</li>
                    </p>
                    <p className="info-email info-content">
                        <li >lhsang64.contact@gmail.com</li>
                    </p>
                </ul>
            </div>
        </AnimatePage>
    )
}

export default Info