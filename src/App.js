import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); //pour? info, if we need to grab something from the datalayer, we put it in {}
  //dispatch is like a gun, we use it to shoot the datalayer, we can update it ....

  // we can pull things from datalayer using const[{}, dispatch] = useDataLayerValue()

  //Run code based on a given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // setToken(_token);
      //they do _ standard to mean standard token

      spotify.setAccessToken(_token); //this is given the access token to the spotify API, this is the magic key for you to talk between react and spotify API

      //getMe() will get the user then dispatch will pop the user into the datalayer
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("4yd5bwzqj4788tbMBhkdwY").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    } // console.log("I have a token", token);
  }, []);

  // console.log("😊", user);
  // console.log("💜", token);

  //we do {} inside of return is how we write JS in return JXS?
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

      {/* Spotify Logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
