import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { rootReducer, RootState } from "../RootReducer";
import { fetchEventsData, fetchReviewsData } from "../../screens/profileScreen/component/handleAsyncThunk";
import { wrappingEventData, responseData, wrappingReviewData } from "../../screens/profileScreen/component/wrappingData";
import { AxiosPromise, AxiosResponse } from "axios";

export interface UserInfoType {
  id: number;
  name: string;
  nickName: string;
  profileImage: string;
  title: string;
}

export interface UserEventType {
	eventId: number;
	eventTitle: string;
	eventAddress: string;
	eventMainImage: string;
}

export interface UserReviewType {
	reviewerId: number;
	reviewerNickName: string;
	reviewerLatestDate: string;
	reviewerContent: string;
}

export interface UserProfileObj {
	userInfo: UserInfoType;
	userEvent: UserEventType[];
	userReview: UserReviewType[];
	wpSize: number;
	hpSize: number;
	status: string;
}

const initialState: UserProfileObj = {
	userInfo: {
		id: 0,
		name: '',
		nickName: '',
		profileImage: '',
		title: '',
	},
	userEvent: [],
	userReview: [],
	wpSize: 0,
	hpSize: 0,
	status: 'loading',
}

export const ProfileSlice = createSlice({
	name: 'userProfile',
	initialState: initialState,
	reducers: {
		addUserInfo(state, action:PayloadAction<UserInfoType>) {
			state.userInfo = action.payload;
		},
		addUserEvent(state, action:PayloadAction<UserEventType[]>) {
			state.userEvent = [...state.userEvent, ...action.payload];
		},
		addUserReview(state, action:PayloadAction<UserReviewType[]>) {
				state.userReview = [...state.userReview, ...action.payload];
		},
		addWpSize(state, action:PayloadAction<number>) {
			state.wpSize = action.payload;
		},
		addHpSize(state, action:PayloadAction<number>) {
			state.hpSize = action.payload;
		},
		changeState(state, action:PayloadAction<string>) {
			state.status = action.payload;
			console.log(state.status);
		},
		removeUserEvent(state, action:PayloadAction<number>) {
			state.userEvent.filter(event => event.eventId !== action.payload)
		},
		removeUserReview(state, action:PayloadAction<number>) {
			state.userReview.filter(event => event.reviewerId !== action.payload)
		},
		removeAll(state) {
			state = initialState;
			return initialState;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchEventsData.pending, (state) => {
			})
			.addCase(fetchReviewsData.pending, (state) => {
			})
			.addCase(fetchEventsData.fulfilled, (state, action:PayloadAction<responseData["events"]>) => {
				if (action.payload.length === 0) {
					state.status = 'end';
					return (state)
				}
				const wrappingData = wrappingEventData(action.payload)
				state.userEvent = state.userEvent.concat(wrappingData);
			})
			.addCase(fetchReviewsData.fulfilled, (state, action:PayloadAction<responseData["reviews"]>) => {
				if (action.payload.length === 0) {
					state.status = 'end';
					return (state)
				}
				const wrappingData = wrappingReviewData(action.payload)
				state.userReview = state.userReview.concat(wrappingData);
			})
			.addCase(fetchEventsData.rejected, (state, action) => {
				if (action.meta.requestStatus === 'rejected')
				state.status = 'failure'
			})
			.addCase(fetchReviewsData.rejected, (state, action) => {
				if (action.meta.requestStatus === 'rejected')
				state.status = 'failure'
			})
			
	}
})
export const selectUserInfo = (state:WritableDraft<RootState>) => state.profile.userInfo;
export const selectProfile = (state:WritableDraft<RootState>) => state.profile;
export const selectUserEvent = (state:WritableDraft<RootState>) => state.profile.userEvent;
export const selectUserReview = (state:WritableDraft<RootState>) => state.profile.userReview;
export const getStatus = (state: WritableDraft<RootState>) => state.profile.status;
export const selectWpSize = (state: WritableDraft<RootState>) => state.profile.wpSize;
export const selectHpSize = (state: WritableDraft<RootState>) => state.profile.hpSize;


