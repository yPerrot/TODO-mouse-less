import React, { FC } from 'react';

interface propsNewTask {

}

const NewTask:FC<propsNewTask> = (props) => {
    return (
        <input placeholder="New Task ..."/>
    )
};

export default NewTask;