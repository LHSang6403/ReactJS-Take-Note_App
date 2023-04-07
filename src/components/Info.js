import myImage from "./imgs/avt.JPG";

function Info(){
    return (
        <div className='todo-app shadow' >
            <h2>React Note App</h2>
            <div className="img-wrap">
                <img src={myImage} alt="" className="img-avt"/>
            </div>
            <ul className="info-content">
                <p className="info-name info-content">
                    <li >Student: Hoang-Sang Le</li>
                </p>
                <p className="info-uni info-content">
                    <li >HCMUS - Computer Science</li>
                </p>
                <p className="info-email info-content">
                    <li >lhsang64.contact@gmail.com</li>
                </p>
            </ul>
                
        </div>
    )
}

export default Info