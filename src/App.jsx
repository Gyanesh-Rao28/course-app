import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Register from './components/student/Register';
import Login from './components/student/Login';
import CourseList from './components/course/CourseList';
import CourseDetail from './components/course/CourseDetail';
import StudentDashBoard from './components/student/DashBoard';
import Navbar from './components/Navbar';
import Test from './components/test/Test';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          {/* home */}
          <Route exact path="/test">
            <Test />
          </Route>

          {/* home */}
          
          <Route exact path="/">
            <CourseList />
          </Route>

          {/* logins */}

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/course/:courseId">
            <CourseDetail />
          </Route>
          <Route exact path="/StudentDashBoard">
            <StudentDashBoard />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
