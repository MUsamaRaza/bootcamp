import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import StudentLogIn from './components/auth/StudentsLogin'
import StudentSignup from './components/auth/StudentsSignup'
import CompaniesLognin from './components/auth/CampaniesLogin'
import CompaniesSignup from './components/auth/CampaniesSignup'
import AdminLognin from './components/auth/Admin'
import CreateResume from './components/dashboards/Student/CreateResumeStd'
import CreateJobsCp from './components/dashboards/Companies/CreateJobsCompanies'
import Dashboard from './components/dashboards/Student/DashboardStd'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
          <Route exact path="/dashboard"   component={Dashboard}/>
          <Route exact path="/createjobs"   component={CreateJobsCp}/>
          <Route exact path="/student"   component={CreateResume}/>
          <Route exact path="/adminsignin"   component={AdminLognin}/>
          <Route exact path="/studentsignin"   component={StudentLogIn}/>
          <Route exact path="/studentsignup"   component={StudentSignup}/>
          <Route exact path="/companieslogin"   component={CompaniesLognin}/>
          <Route exact path="/companiessignup"   component={CompaniesSignup}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;