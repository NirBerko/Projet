import React, { useState } from "react";

import { Checkbox, Input, Button, Icon } from 'semantic-ui-react'

import "./index.scss";

interface ITask {
    label: string;
}

export const SubTasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {
            label: ''
        }
    ]);

    const onChangeLabel = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        tasks[index] = {
            ...tasks[index],
            label: e.target.value
        };

        setTasks([...tasks]);
    };

    const onKeyUp = (index: number) => (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            tasks.splice(index + 1, 0, { label: '' });
            setTasks([...tasks])
        }
    };

    const deleteTask = (index: number) => {
        tasks.splice(index, 1);
        setTasks([...tasks])
    };

    return (
        <div className="b-SubTasks">
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Checkbox disabled={true} />
                        <Input type="text"
                               onChange={onChangeLabel(index)}
                               onKeyUp={onKeyUp(index)}
                               autoFocus
                               placeholder="Type your label here"
                               value={task.label} />
                        {tasks.length > 1 ? (
                            <Button icon
                                    circular
                                    color="red"
                                    size="tiny"
                                    onClick={() => deleteTask(index)}>
                                <Icon name="delete" />
                            </Button>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    )
};

SubTasks.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut debitis doloribus dolorum expedita facilis harum incidunt minima minus natus odit officia, officiis quibusdam";
