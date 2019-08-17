import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../context";

export default () => {
  const { state, dispatch } = useContext(Context);

  const user = {
    userId: 123,
    name: "Dioni M.",
    email: "me@dioni.com"
  };

  const signIn = () => {
    dispatch({ type: "LOGIN_USER", payload: user });
  };

  const logOut = () => {
    dispatch({ type: "LOGIN_USER", payload: null });
  };

  console.log(state.currentUser);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-brand" href="#">
        Navbar
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            {!state.currentUser ? (
              <button onClick={signIn} className="btn btn-outline-light ml-4">
                Sign In
              </button>
            ) : (
              <button onClick={logOut} className="btn btn-outline-light ml-4">
                Log Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
