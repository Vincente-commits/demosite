import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  route: "",
  isSignedIn: false,

  user: {
    id: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    routeChange: (state, action) => {
      state.route = action.payload;
      //   window.location.pathname = action.payload;
    },
    loadUser: (state, action) => {
      state.user.id = action.payload.id;

      //set cookie
      var inHalfADay = 0.5;
      var userid = state.user.id;
      Cookies.set("id", userid, {
        expires: inHalfADay,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { routeChange, loadUser } = loginSlice.actions;

export default loginSlice.reducer;
