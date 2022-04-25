import React, { FC } from 'react';
import './task.scss';

    type TaskProps = {
        id: string;
        text: string;
        done: boolean;
    }

const Task: FC<TaskProps> = ({
  id, text, done,
}) => (
  <div id={id} className="task">
    <span>{text}</span>
  </div>
);

export default Task;
