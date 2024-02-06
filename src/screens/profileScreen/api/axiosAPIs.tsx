import { axiosImageInstance, axiosProfileInstance } from "./axios";
import { imageInfo, postUserProfile, putUserProfile } from "../component/types";
import { useAxios } from "../hooks/useAxiosHook";


export const getUserInfo = async (reqUid:number, AccessToken:string) => {
	const userInfo = await useAxios({
			axiosInstance: axiosProfileInstance,
			method: 'GET',
			url: `/user/${reqUid}`,
			requestConfig: {
				headers: {
					'Authorization': `Bearer ${AccessToken}`,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			}
	});
	return (userInfo);
}

export const editUserInfo = async (reqUid:number, AccessToken:string, info:putUserProfile) => {
	const userInfo = await useAxios({
			axiosInstance: axiosProfileInstance,
			method: 'PUT',
			url: `/user/${reqUid}`,
			requestConfig: {
				headers: {
					'Authorization': `Bearer ${AccessToken}`,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: info
			}
	});
	return (userInfo);
}

export const postUserInfo = async (AccessToken:string, info:postUserProfile) => {
	const userInfo = await useAxios({
			axiosInstance: axiosProfileInstance,
			method: 'POST',
			url: `/user`,
			requestConfig: {
				headers: {
					'Authorization': `Bearer ${AccessToken}`,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: info
			}
	});
	return (userInfo);
}

export const getEventInfo = async (reqUid:number, pageNumber:number, AccessToken:string) => {
	const requestUri = `/user/${reqUid}/event/host?page=${pageNumber}&pageSize=${10}&sortByViews=${false}&sortByEventStartDate=${false}&includeEndEvent=${true}`;
	const eventInfo = await useAxios({
			axiosInstance: axiosProfileInstance,
			method: 'GET',
			url: requestUri,
			requestConfig: {
				headers: {
					'Authorization': `Bearer ${AccessToken}`,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			}
	});
	return eventInfo;
}

export const getReviewInfo = async (reqUid:number, pageNumber:number, AccessToken:string) => {
	const requestUri = `/review/user/host/${reqUid}?page=${pageNumber}&pageSize=${10}&sortByEventDate=${true}&sortByEventRating=${false}`;
	const reviewInfo = await useAxios({
			axiosInstance: axiosProfileInstance,
			method: 'GET',
			url: requestUri,
			requestConfig: {
				headers: {
					'Authorization': `Bearer ${AccessToken}`,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			}
		});
	return reviewInfo
}

export const postProfileImage = async (AccessToken:string, info:imageInfo) => {
	const image = await useAxios({
		axiosInstance: axiosImageInstance,
		method:'post',
		url:'/',
		requestConfig: info
		})
	return image;
}

export const deleteProfileImage = async (imageUrl: string) => {
	const image = await useAxios({
		axiosInstance: axiosImageInstance,
		method:'delete',
		url:'/',
		requestConfig: imageUrl
	})
	return image
}