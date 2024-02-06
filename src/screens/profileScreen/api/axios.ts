import axios from "axios";

export const axiosProfileInstance = axios.create({
	baseURL: 'http://15.164.155.153:3000/',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
export const axiosImageInstance = axios.create({
    baseURL: "https://o42pxi2cvxow5wbrqck7msmnsa0xlduk.lambda-url.ap-northeast-2.on.aws",
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
export const axiosEventInstase = axios.create({
	baseURL: 'http://54.180.201.67:3000/user',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
export const getEvent = async (uri: string, At:string)=> {
	const res = await axiosProfileInstance.get(uri, { headers: {	
	'Authorization': `Bearer ${At}`,
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	}});
	return res.data;
}
export const getReview = async (uri: string, At:string)=> {
	const res = await axiosProfileInstance.get(uri, { headers: {	
	'Authorization': `Bearer ${At}`,
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	}});
	return res.data;
}
