import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";
import UserPage from "./components/userPage";

function App() {
    return (
        <>
        <NavBar/>
        <Switch>
        <Route path="/users" component={Users}/>
        <Route path="/users/:id" component={UserPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Main} />
        </Switch>
        </>
    );
}

export default App;
