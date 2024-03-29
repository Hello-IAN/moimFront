import { Axios, AxiosError, AxiosInstance } from "axios";
import { useState, useEffect } from "react";
import { UserProfileObj } from "src/redux/Slices/Profile";


type methodLiteral = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

interface configObj {
	axiosInstance: AxiosInstance,
	method: string,
	url: string,
	requestConfig: Object,
}
export const useAxios = async (configObj: configObj) => {
	const {
			axiosInstance,
			method,
			url,
			requestConfig,
		} = configObj;
		try {
			const literalMethod = method.toLowerCase() as methodLiteral;
			const res = await axiosInstance[literalMethod](url, {
				...requestConfig
				});
				return res.data
		} catch (err) {
			const errMsg = err as AxiosError;
			console.log(errMsg)
		}
}