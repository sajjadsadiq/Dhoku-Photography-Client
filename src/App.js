import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/AdminDashboard/Dashboard/Dashboard";
import AddService from "./components/AdminDashboard/AddService/AddService";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import User from "./components/UserLimited/User/User";
import OrderList from "./components/AdminDashboard/OrderList/OrderList";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import Navbar from "./components/Shared/Footer/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/user">
          <User/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard/addservice">
          <AddService />
        </Route>
        <Route path="/orderlist/dashboard">
          <OrderList/>
        </Route>
        <Route path="/makeAdmin/dashboard">
          <MakeAdmin/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
