import axios from "axios";

export const axiosAuth = axios.create({
	baseURL: 'http://54.180.201.67:3000'
})

export const getAuth = async () => {
	const response = await axiosAuth.get('/auth/login/google');
	console.log(response.data.url)
	return response.data;
}

export const getRedirectAuth = async () => {
	const response = await axiosAuth.get('/auth/redirect/google-login');
	return response.data;
}