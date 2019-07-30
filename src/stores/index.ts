import {TodoStore} from "./TodoStore";

export interface StateStores {
    todoStore: TodoStore,
}

export const stores: StateStores = {
    todoStore: new TodoStore()
};
