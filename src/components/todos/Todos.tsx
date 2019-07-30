import React from 'react';
import TodoItem from "./TodoItem";
import {TodoStore} from "../../stores/TodoStore";
import {inject, observer} from "mobx-react";
import {StateStores} from "../../stores";


interface TodosBaseProps {
}

interface TodosProps {
    todoStore: TodoStore;
}

@inject((stores: StateStores) => {
    return {
        todoStore: stores.todoStore,
    }
})
@observer
class Todos extends React.Component<TodosBaseProps> {

    get injected() {
        return this.props as TodosProps;
    }

    public render(): React.ReactNode {
        return this.injected.todoStore.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo}/>
        ));
    }
}

export default Todos;
