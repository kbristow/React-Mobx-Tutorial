import {Todo} from "../components/todos/TodoItem";
import {action, observable} from "mobx";
import uuid from "uuid";

export class TodoStore {
    @observable todos: Todo[] = [];

    @action
    public markComplete = (id: string) => {
        const matchingTodo = this.todos.find(todo => todo.id === id);
        if (matchingTodo !== undefined) {
            matchingTodo.completed = !matchingTodo.completed;
        }
    };

    @action
    public delTodo = (id: string) => {
        this.todos = this.todos.filter(todo => {
            return todo.id !== id;
        })
    };

    @action
    public addTodo = async (title: string) => {
        this.todos.unshift({
            id: uuid.v4(),
            completed: false,
            title,
        });
    };
}
