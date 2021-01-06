//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

// use other people's api and bring back the user

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "277bfe84e71e4237b11a8b4ee81c405f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// this step will get the user the correct permission to do things on spotify

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=lily go to the first one split it at the = sign
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      // go into the inital and for the access token decode it and pass it
      return initial;
    }, {});
  // give it an empty object which is what the inital should start with
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
