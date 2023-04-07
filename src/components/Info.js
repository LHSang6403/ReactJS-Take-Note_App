import myImage from "./imgs/avt.JPG";

function Info(){
    return (
        <div className='todo-app shadow' >
            <h2>React Note App</h2>
            <div>
                <img src={myImage} alt="" className="img-avt"/>
            </div>
            <p>
                <h1>Student: Hoang-Sang Le</h1>
                <h1>HCMUS - Computer Science</h1>
                <h1>lhsang64.contact@gmail.com</h1>
            </p>
        </div>
    )
}

export default Info