export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finish developing
  // token:
  // "BQCzANLqPajfuAOG5W_68gNbCJ1buIxf-c_jJIlkR5Go638DpsTyiT6XYfiVc1coBT8Gl8NEBxn3mliirUT82c9rzHdErBCU0IXAHIa3ba6hC4eP2hNFeORlO0zRat5Kkb-XYFD1Pfsxi6YPx9DqRJWiDS9V9LGtrmmIghIDt8SNMaxi",
};

const reducer = (state, action) => {
  console.log(action); // this is a debug tool, save a lot of trouble!!

  //Action -> type, [payload]    payload can be dynamic

  switch (action.type) {
    //when we push something, like user into the datalayer, we dispatch something called
    //an action, the action has two things: type, (here is 'SET_USER', here goes the user, throw them into the datalayer)
    //the reducer's primary job is to listen to actions! it sits there and listen to the actions
    //the listener is in the reducer, here is it, listen to changes and do this...if there is any action not? then default
    case "SET_USER":
      return {
        ...state, //!! ...state keeps whatever is in the current state,
        user: action.user,
      }; // return, this is what the new state will look like, here the type is 'SET_USER', payload is user

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
    //default is if nothing happens, then do this, so when there is nothing happens, the app would not broke
  }
}; //action is we manipulate what the datalayer looks like, state is what the datalayer looks like

export default reducer;
