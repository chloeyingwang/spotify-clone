import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* we are using a link because we are sending the user to spotify, and they sign in for the spotify service and they will send them back */}
    </div>
  );
}

export default Login;
