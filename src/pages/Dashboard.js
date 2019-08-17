import React, { useContext } from "react";
import Context from "../context";

export default () => {
  const { state } = useContext(Context);

  return !!state.currentUser ? (
    <h1>Dashboard route</h1>
  ) : (
    <div className="alert alert-warning">This is a protected route</div>
  );
};
