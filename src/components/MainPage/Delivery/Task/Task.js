import React from 'react';
import './Task.css';


const Task = (props) => {
    return (
        <div className="task">
            <div className="task__ava">
                <img src={props.img ? props.img : "https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568228-stock-illustration-female-face-avatar-round-flat.jpg"} />
            </div>
            <div className="task__descr">
                <h3 className="task__title">
                    {props.title}
                </h3>
                <div className="task__text">
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default Task;
