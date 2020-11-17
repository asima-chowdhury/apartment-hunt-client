import React, { createContext, useState } from 'react';
import './App.scss';
import './styles/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import NotMatch from './pages/NotMatch/NotMatch';
import HomeDetails from './pages/HomeDetails/HomeDetails';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingList from './pages/Admin/BookingList/BookingList';
import AddHouse from './pages/Admin/AddHouse/AddHouse';
import MyRent from './pages/Customer/MyRent/MyRent';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/homeDetails/:homeId">
            <HomeDetails />
          </Route>

          <PrivateRoute path="/bookingList">
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path="/addHouse">
            <AddHouse/>
          </PrivateRoute>
          <PrivateRoute path="/myRent">
            <MyRent/>
          </PrivateRoute>

          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
