import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    onChange = (event) => {
         var target  = event.target;
         var name = target.name;
         var value = target.type === 'checkbox' ? target.checked : target.value;
         this.setState({
             [name]: value
         })
    }
    onLogin = (event) => {
        event.preventDefault();
        var {userName, password} = this.state;
        if(userName === 'admin' && password === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                userName: userName,
                password: password,
            }));
        }
   }
    render() {
            var {userName, password} = this.state;
            var user = localStorage.getItem('user');
            var { location } = this.props;
            if(user !== null) {
                return <Redirect to={
                    {
                        pathname: '/products',
                        state: {
                            from: location
                        }
                    }
                }/>
            }
            return (
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onLogin}>
                            <legend>Login</legend>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="userName" 
                                value={userName}
                                onChange={this.onChange}
                                placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                value={password}
                                onChange={this.onChange}
                                 name="password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            )
    }
}

export default Login;
