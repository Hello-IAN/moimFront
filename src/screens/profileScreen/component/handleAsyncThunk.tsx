import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../../redux/RootReducer";
import { getEventInfo, getReviewInfo } from "../api/axiosAPIs";
import { AxiosError } from "axios";

export const fetchEventsData = createAsyncThunk('userProfile/fetchEvents', async (_, {getState, rejectWithValue }) => {
	const eventPagesCount = (getState() as RootState).profile.userEvent.length;
	const pageNumber = eventPagesCount % 10 === 0 ? eventPagesCount / 10 + 1 : -1
	//겟 보내봐야 업데이트가 된지 확인할 수 있음
	//profile에서 payload없으면, 스테이트 한번 리턴해서 업데이트해주고
	//그래야 다시 들어왔을때 이 구문에서 끝남.
	//그 이후엔 useOnReached함수에서도 0이 아니게 업데이트 되기때문에
	//더이상 get 요청 안하게됨.
	if (pageNumber === -1)
		return ;
	const reqUid = (getState() as RootState).profile.userInfo.id;
	const AccessToken = (getState() as RootState).global.AccessToken;
	try {
		const eventsData = await getEventInfo(reqUid, pageNumber, AccessToken);
		return eventsData.events;
	} catch (err) {
		const errObj = err as any as AxiosError;
		if (!errObj.response) {
			throw err;
		}
		return rejectWithValue(errObj.response?.data)
	}
})
export const fetchReviewsData = createAsyncThunk('userProfile/fetchReviews', async (_, { getState, rejectWithValue }) => {
	const ReviewPagesCount = (getState() as RootState).profile.userReview.length;
	const pageNumber = ReviewPagesCount % 10 === 0 ? ReviewPagesCount / 10 + 1  : -1
	if (pageNumber === -1)
		return ;
	const reqUid = (getState() as RootState).profile.userInfo.id;
	const AccessToken = (getState() as RootState).global.AccessToken;
	try {
		const reviewsData = await getReviewInfo(reqUid, pageNumber, AccessToken);
		return reviewsData;
	} catch (err) {
		const errObj = err as any as AxiosError;
		if (!errObj.response) {
			throw err;
		}
		return rejectWithValue(errObj.response?.data)
	}
})

export const fetchProfileData = createAsyncThunk('userProfile/PostProfile', async (_, { getState, rejectWithValue }) => {
	const reqUid = (getState() as RootState).profile.userInfo.id;
	const AccessToken = (getState() as RootState).global.AccessToken;
	try {
		const reviewsData = await getReviewInfo(reqUid, pageNumber, AccessToken);
		return reviewsData;
	} catch (err) {
		const errObj = err as any as AxiosError;
		if (!errObj.response) {
			throw err;
		}
		return rejectWithValue(errObj.response?.data)
	}
})

