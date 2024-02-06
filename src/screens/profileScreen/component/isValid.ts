import { AxiosError } from 'axios';
import React from 'react'
import { axiosProfileInstance } from '../api/axios';
import { NICKNAME_REGEX, CONTENT_REGEX, INSULT_REGEX, SINGLELETTER_REGEX } from '../regexFilter';

export const isNicknameValid = (nickname:string, setNickName:React.Dispatch<React.SetStateAction<string | undefined>>, setNickNameMsg:React.Dispatch<React.SetStateAction<string>>)=> {
	const basicFilterResult = NICKNAME_REGEX.test(nickname);
	if (!basicFilterResult) {
		if (nickname?.length > 12) {
			setNickNameMsg('닉네임이 너무 길어요!');
			setNickName(nickname.slice(0,12));
			return false;
		}
		setNickNameMsg('유효하지 않은 문자가 들어있어요!');
		return false
	}
	const insaltFilterResult = INSULT_REGEX.test(nickname);
	if (insaltFilterResult) {
		setNickNameMsg('욕설은 포함할 수 없어요!');
		return false
	}
	return true
}

export const isDuplicate = async (nickname:string | undefined, setNickName:React.Dispatch<React.SetStateAction<string | undefined>>, setNickNameMsg:React.Dispatch<React.SetStateAction<string>>)=> {
	/* 자음 확인 */
	if (!nickname) {
		setNickNameMsg('닉네임을 입력해주세요');
		return (false);
	}
	const singleLetterFilter = SINGLELETTER_REGEX.test(nickname);
	if (singleLetterFilter) {
		setNickNameMsg('자음은 닉네임이 될 수 없어요!');
		return (false);
	}
	try {
		const result = await axiosProfileInstance.get(`user/verify/nickname/${nickname}`);
		if (result?.data?.isValid) {
			setNickNameMsg('사용할 수 있는 닉네임이에요!');
			return (true)
		} 
		setNickNameMsg('중복된 닉네임이에요!');
		return (false);
	} catch (error) {
		const errMsg = error as AxiosError;
		console.log(errMsg);
		return false
	}
}

export const isContentValid = (content:string, setContent:React.Dispatch<React.SetStateAction<string | undefined>>, setContentMsg:React.Dispatch<React.SetStateAction<string>>)=> {
	const basicFilterResult = CONTENT_REGEX.test(content);
	if (!basicFilterResult) {
		if (content?.length > 150){
			setContentMsg('소개글이 너무 길어요!')
			setContent(content.slice(0,150))
			return false
		}
		setContentMsg(`유효하지 않은 문자가 들어있어요!`)
		return false
	} 
	const insaltFilterResult = INSULT_REGEX.test(content);
	if (insaltFilterResult) {
		setContentMsg('욕설은 포함할 수 없어요!');
		return false
	}
	return true
}