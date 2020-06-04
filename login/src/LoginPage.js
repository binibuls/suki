import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
<div>
<div className="dropdown-menu">
  <form className="px-4 py-3">
    <div className="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"></input>
    </div>
    <div className="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"></input>
    </div>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
        <label className="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <div className="dropdown-divider"></div>
  <a clasNames="dropdown-item" href="#">New around here? Sign up</a>
  <a className="dropdown-item" href="#">Forgot password?</a>
</div>
</div>
        );
    }
}

export default LoginPage;