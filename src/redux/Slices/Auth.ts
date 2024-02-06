import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
	userId: number,
	AccessToken: string,
}

const initialState = {
	userId: 0,
	AccessToken: '',
	isLogin: false,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setCredentials: (state, action:PayloadAction<Auth>) => {
			const { userId, AccessToken } = action.payload
			state.userId = userId
			state.AccessToken = AccessToken
			if (userId && AccessToken)
				state.isLogin = true
		},
		logOut: (state, action) => {
			state = initialState;
		}
	},
})
