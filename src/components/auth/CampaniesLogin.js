import React, { Component } from 'react'
import {connect} from 'react-redux'
import {companiesLogin} from '../../store/actions/authActionsCp'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class CompaniesLogin extends Component {
    // constructor(){
        state = {
            email:'',
            password:'',
        }    
    // }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.companiesLogin(this.state);
    // this.props.history('/');
}

  render() {
    const {authError,authCp} = this.props;
    console.log("Company***",authCp)
    if(authCp.uid) return <Redirect to='/'/>
    return (
        <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center"> Company SignIn</h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-2">Login</button>
            <Link to='/companiessignup' className=" lighten-1 ">
            Create a new Account</Link>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </div>
            </form>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    return{
        authError: state.authCp.authError,
        authCp:    state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        companiesLogin: (creds) =>dispatch(companiesLogin(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompaniesLogin);
