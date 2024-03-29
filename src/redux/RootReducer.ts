import { combineReducers } from "redux";
import { authSlice } from "./Slices/Auth";
import { EventSlice } from "./Slices/Event";
import { postEventSlice } from "./Slices/EventPost";
import { GlobalSlice } from "./Slices/Global";
import { ProfileSlice } from "./Slices/Profile"
import { ProfilePostSlice } from "./Slices/ProfilePost";
import { UISlice } from "./Slices/UI";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  eventPost: postEventSlice.reducer,
  event: EventSlice.reducer,
  global: GlobalSlice.reducer,
  profile: ProfileSlice.reducer,
  profilePost: ProfilePostSlice.reducer,
  ui: UISlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
