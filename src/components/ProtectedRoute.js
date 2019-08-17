import React, { useContext, Component } from "react";
import { Route } from "react-router-dom";
import Context from "../context";

export default ({ component: Component, ...rest }) => {
  const { state } = useContext(Context);

  return (
    <Route
      render={props =>
        !!state.currentUser ? (
          <Component />
        ) : (
          <div className="alert alert-warning">This is a protected route</div>
        )
      }
      {...rest}
    />
  );
};
