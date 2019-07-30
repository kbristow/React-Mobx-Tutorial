import React, {CSSProperties} from 'react';
import {inject, observer} from "mobx-react";
import {StateStores} from "../../stores";
import {TodoStore} from "../../stores/TodoStore";

interface TodoItemBaseProps {
    todo: Todo;
}

interface TodoItemProps extends TodoItemBaseProps {
    todoStore: TodoStore;
    markComplete: (id: string) => void;
    delTodo: (id: string) => void;
}

@inject((stores: StateStores) => {
    return {
        todoStore: stores.todoStore,
    }
})
@observer
class TodoItem extends React.Component<TodoItemBaseProps> {

    get injected() {
        return this.props as TodoItemProps;
    }

    public render(): React.ReactNode {
        const {id, title} = this.injected.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={this.injected.todo.completed} onChange={this.injected.todoStore.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.injected.todoStore.delTodo.bind(this, id)}>X</button>
                </p>

            </div>);
    }

    private getStyle = (): CSSProperties => {
        return {
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        };
    };
}


export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

const btnStyle: CSSProperties = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '6px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
};

export default TodoItem;
