import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UserInterfaceIdiom } from "expo-constants";
import { useSelector } from "react-redux"
import { RootState } from "../../RootReducer"
import { useAppDispatch } from "../../RootStore";
import { authSlice } from "../../Slices/Auth";
import { GlobalSlice } from "../../Slices/Global";


const baseQuery = fetchBaseQuery({
	baseUrl:'http://54.180.201.67:3000',
	credentials:'include',
	prepareHeaders: (headers) => {
		const token = useSelector((state:RootState) => state.auth.AccessToken);
		if (token) {
			headers.set("autoriztion", `Bearer ${token}`)
		}
		return headers
	}
})

const baseQueryWithReAuth = async(args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	const dispatch = useAppDispatch();

	if (result?.error.originalStatus === 403) {
		console.log('sending refresh token');
		// send refresh token to get new access token;
		// 아마 이 부분 로직이 다를 것임. secure에서 꺼내서, 요청 한번 더 해야함
		const refreshResult = await baseQuery('/refresh', api, extraOptions);
		console.log(refreshResult);
		if (refreshResult?.data) {
			const user = useSelector((state:RootState) => state.auth.userId);
			//store the new token
			//아마 서버에서 리프레시 + 엑세스 리턴하는 거라서 엑세스만 따로 취급해야함.
			const newAccessToken:string = refreshResult.data.AccessToken;
			//const newRefreshToken:string = refreshResult.data.RefreshToken;
			//set refreshToken to secure store.

			const authObj = {
				userId: user,
				AccessToken: newAccessToken
			}
			dispatch(authSlice.actions.setCredentials(authObj));
			// retry to origin request.
			result = await baseQuery(args, api, extraOptions)
		} else {
			//logout logic
			dispatch(authSlice.actions.logOut);

		}
	}

	return result
}
export const apiSlice = createApi({
	baseQuery:baseQueryWithReAuth,
	endpoints: builder => ({})
})
