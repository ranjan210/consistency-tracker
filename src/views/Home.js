import "./Home.css"
import { useState } from "react";

function Home(props) {
    const [tasks, setTasks] = useState([{ halfTask: "Do 1 set of 1 exercise", fullTask: "Full Exercise", consistency: [0, 1, 0, 1, 1, 1, 2] }]);
    const [isOverlay, setOverlay] = useState(false);
    const [currTasks, setCurrTasks] = useState({ halfTask: "", fullTask: "" });
    const [isEdit, setEdit] = useState(false);


    const addTask = () => {
        let newTasks = tasks;
        const taskObj = { halfTask: currTasks.halfTask, fullTask: currTasks.fullTask, consistency: [0, 0, 0, 0, 0, 0, 0], id: newTasks.length }
        newTasks.push(taskObj);
        setTasks(newTasks)
        setOverlay()
    }

    const editHalfTask = (val, key) => {
        let newTasks = tasks;
        for (let i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id == key) {
                newTasks[i].halfTask = val
                break
            }
        }

        setTasks(newTasks);
    }

    const editFullTask = (val, key) => {
        let newTasks = tasks;
        for (let i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id == key) {
                newTasks[i].fullTask = val
                break
            }
        }

        setTasks(newTasks);
    }

    const changeHalfTask = (e) => {
        e.preventDefault()
        const task = e.target.value
        const currFullTask = currTasks.fullTask;
        const taskObj = { halfTask: task, fullTask: currFullTask }
        setCurrTasks(taskObj)

    }

    const changeFullTask = (e) => {
        e.preventDefault()
        const task = e.target.value
        const currHalfTask = currTasks.halfTask;
        const taskObj = { halfTask: currHalfTask, fullTask: task }
        setCurrTasks(taskObj)

    }

    const switchOverlay = () => {
        const currOverlay = !isOverlay
        setOverlay(currOverlay)
    }

    const taskItems = tasks.map((elem, index) => {
        return (
            <div className="task-item" key={elem.id}>
                <input className="task-name" onChange={(e) => { editHalfTask(e.target.value, elem.id) }} defaultValue={elem.halfTask}>
                </input>
                <input className="task-full" defaultValue={elem.fullTask} onChange={(e) => { editFullTask(e.target.value, elem.id) }}>
                </input>
                {elem.consistency.map((day, index) => {
                    return (
                        <div>{day}</div>
                    )
                })}
            </div>
        )
    })



    return (
        <div className="main">

            {isOverlay && <div className="overlay">
                <button className="overlay-button" onClick={switchOverlay}>Close</button>
                <div className="add-task">
                    Half Task:<br></br>
                    <input className="task-desc" onChange={changeHalfTask}></input>
                    Full Task:<br></br>
                    <input className="task-desc" onChange={changeFullTask}></input>
                    <button className="add-button" onClick={addTask}>Add</button>

                </div>
            </div>}

            <div className="title">
                Consistency Tracker
            </div>
            <div className="tracker">
                <div className="week">Sample date</div>
                <div className="buttons">
                    <div className="add"> <button onClick={switchOverlay}>Add Task</button>   </div>
                    <div className="add"> <button onClick={switchOverlay}>Edit Task</button>   </div>
                </div>


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