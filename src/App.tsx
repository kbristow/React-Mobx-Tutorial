import React from 'react';
import './App.css';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/pages/About";

interface AppBaseProps {
}

class App extends React.Component<AppBaseProps> {

    public render(): React.ReactNode {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path={"/"} render={() => (
                            <React.Fragment>
                                <AddTodo/>
                                <Todos/>
                            </React.Fragment>
                        )}/>
                        <Route path={"/about"} component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
