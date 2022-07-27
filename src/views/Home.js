import "./Home.css"
import { useState } from "react";

function Home(props) {

    const [tasks, setTasks] = useState([{name:"Exercise",consistency:"0100000"}]);
    const taskItems = tasks.map((elem,index)=>{
        return(
            <div className="task-item">
                <div className="task-name">
                    {elem.name}
                </div>
                
            </div>
        )
    })


    return (
        <div className="main">
            <div className="title">
                Consistency Tracker
            </div>
            <div className="tracker">
                <div className="week">Sample date</div>
                <div className="add"> Add  </div>
                <div className="task-header">
                    <div>Task</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>

                </div>
                <div className="tasks">
                    {taskItems}
                </div>
            </div>
        </div>
    )
}

export default Home;