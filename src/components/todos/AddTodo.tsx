import * as React from "react";
import {inject, observer} from "mobx-react";
import {StateStores} from "../../stores";
import {TodoStore} from "../../stores/TodoStore";

export interface AddTodoBaseProps {
}

interface AddTodoProps extends AddTodoBaseProps {
    todoStore: TodoStore;
}

@inject((stores: StateStores) => {
    return {
        todoStore: stores.todoStore,
    }
})
@observer
class AddTodo extends React.Component<AddTodoBaseProps> {

    public state = {
        title: "",
    };

    get injected() {
        return this.props as AddTodoProps;
    }

    public render(): React.ReactNode {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text" name="title" placeholder="Add Todo ..." style={{flex: 10}} value={this.state.title}
                       onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex: 1}}/>
            </form>
        )
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[event.target.name]: event.target.value});
    };

    private onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        await this.injected.todoStore.addTodo(this.state.title);
        this.setState({title: ""});
    }
}


export default AddTodo;
