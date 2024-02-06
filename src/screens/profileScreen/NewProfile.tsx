import { AxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState, } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import {View, TextInput, } from 'react-native'
import { GuestProfileHeader, ProfileHeader } from './component/Header';
import { isContentValid, isDuplicate, isNicknameValid } from './component/isValid';
import { ProfileImagePicker }from './component/ProfileImagePicker';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/RootReducer'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import useImageConvert from './hooks/ImageConvert';
import { editUserInfo } from './api/axiosAPIs';
import { ProfileNavigationProp } from './component/types';
import { editProfileStyle } from './style/profileStyle';

export const NewProfile: React.FC = () => {
	/* 에러 발생하면 에러로 옮겨야함 */
	const navigator = useNavigation<ProfileNavigationProp>(); 
	const AT = useSelector((state:RootState) => state.global.AccessToken);
	const contentRef = useRef(null);
	const errRef = useRef(null);
	const isFocused = useIsFocused();
	const curId = useSelector((state:RootState) => state.global.userId);
	const originProfile = useSelector((state: RootState)=>state.profile.userInfo);
	const [nickName, setNickName] = useState<string | undefined>('');
	const [content, setContent] = useState<string | undefined>('');
	const [imgUrl, setImagUrl] = useState<string | null>('');
	const [nickNameMsg, setNickNameMsg] = useState<string>('닉네임은 한글, 영어로 12글자까지 입력할 수 있습니다.')
	const [contentMsg, setContentMsg] = useState<string>('소개글은 150글자까지 입력할 수 있습니다.')
	const [vaildNickName, setValidNickName] = useState<boolean>(false);
	const [dupNickName, setDupNickName] = useState<boolean>(false);
	const [vaildContent, setValidContent] = useState<boolean>(false);

	const [nickNameLen, setNickNameLen] = useState<string>('0/12');

	const [contentLen, setContentLen] = useState<string>('0/150');

	/* const userInfo = {
		userNickName: originProfile.nickName,
		userProfilePhoto: originProfile.profileImage,
		userTitle: originProfile.title
	} */

	const handleOnChangeNickName = useCallback((text:string | undefined)=>(setNickName(text)),[nickName]);
	const handleOnChangeContent = useCallback((text:string | undefined)=>(setContent(text)), [content]);
	
	const handleDuplicteCheck = useCallback(()=>{
		if (nickName && vaildNickName) {
			const result = isDuplicate(nickName, setNickName, setNickNameMsg);
			!result ? setDupNickName(false) : setDupNickName(true)
		} else {
			setNickNameMsg('닉네임이 유효하지 않아요.')
		}
	},[nickName, vaildNickName]);

	const handleRemoveContent = useCallback(()=> (setContent('')), [content])

	useEffect(() => {
		setNickNameLen(`${nickName?.length.toString()}/12`)
		if (nickName) {
			const isValid = isNicknameValid(nickName, setNickName, setNickNameMsg);
			!isValid ? setValidNickName(false) : setValidNickName(true);
			!vaildNickName ? setDupNickName(false) : setDupNickName(true);
		}
	}, [nickName])

	useEffect(() => {
		setContentLen(`${content?.length.toString()}/150`)
		if (content) {
			const isValid = isContentValid(content, setContent, setContentMsg);
			!isValid ? setValidContent(false) : setValidContent(true);
		}
	}, [content])
	const onSaveProfileCliked = () => {
		if (originProfile) {
			
		}
		if (vaildNickName && vaildContent) {
			
		}
		//해당 항목들 초기화
		//navigate to home screen.

	}
	const handleOnPress = useCallback(()=>{
		//post ver.
		if (nickName && vaildNickName && dupNickName)
			HandleOnSubmit()
		else
			console.log('nickname은 필수지롱.')
			
	},[dupNickName, vaildNickName])

	const HandleOnSubmit = useCallback( async ()=> {
		let Img = '';
		//workFlow
		//data DTO에 현재 상태들 업데이트
		//image 경우 convert후의 URL 담아야함.

		//->완성된 DTO를 config 인자로 axios call
		//->return 결과에 따라 실패시 RT담아 재전송(은 사실 Axios영역에서 처리)
		//->결과 받으면 HOME으로 이동 
		//->Reject라면 현재화면에서 stay,
		//UID를 어떻게 확인..?
		//if, Global Slice has UID, and RT,
		//get a data from that slice and just send.
		//1. edit에서는 닉네임 + 사진 + 닉네임 중 변경이 없어도 전송이 될수있음.
		//2. new에서 다른 건 없어도 nickname은 반드시 확인해야함.
		//
		if (!nickName)
			return ;
		const userName = 'something';
		const userNickName = nickName;
		const userTitle = vaildContent? content : '';
		const userProfilePhoto = imgUrl ? await useImageConvert(imgUrl, curId, AT) : '';
		const DTO = {userName, userNickName, userProfilePhoto, userTitle}
		try {
			const result = await editUserInfo(curId, AT, DTO)
			return () => navigator.replace("Home");
		} catch (err) {
			const errMsg = err as AxiosError;
			console.log(errMsg)
		}
		setDupNickName(false);
		setValidNickName(false);
		//api instance에 DTO 던지기,
	},[nickName, content, curId])

	return (
		
		<View style={editProfileStyle.mainContainer}>
			<View style={editProfileStyle.headerContainer}>
				<GuestProfileHeader />
			</View>
			<SafeAreaView style={editProfileStyle.innerContainer}>
				<ProfileImagePicker image={imgUrl} setImage={setImagUrl}/>
				<View style={editProfileStyle.nickNameContainer}>
					<View style={editProfileStyle.nickNameTitleContainer}>
						<Text style={editProfileStyle.nickNameTitleText}>
							닉네임
						</Text>
					</View>
					<View style={editProfileStyle.lenContainer}>
						<Text style={editProfileStyle.lenText}>
							{nickNameLen}
						</Text>
					</View>
					<View style={editProfileStyle.btnContainer}>
						<TouchableOpacity onPress={handleDuplicteCheck}>
							<Text style={editProfileStyle.dupBtnText}>중복 확인</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={editProfileStyle.nickNameInputContainer}>
					<TextInput style={editProfileStyle.nickNameInputStyle}
						value={nickName}
						placeholder='닉네임' 
						onChangeText={handleOnChangeNickName}
						autoCapitalize='none'/>
				</View >
				<View style={editProfileStyle.nickNameMsgContainer}>
					<Text style={editProfileStyle.nickNameMsgStyle}>
						{nickNameMsg}
					</Text>
				</View>
				<View style={editProfileStyle.contentContainer}>
					<View style={editProfileStyle.contentTitleContainer}>
						<Text style={editProfileStyle.contentText}>
							소개글
						</Text>
					</View>
					<View style={editProfileStyle.lenContainer}>
						<Text style={editProfileStyle.lenText}>
							{contentLen}
						</Text>
					</View>
					<View style={editProfileStyle.btnContainer}>
						<TouchableOpacity onPress={handleRemoveContent}>
							<Text style={editProfileStyle.clearBtnText}>다지우기</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={editProfileStyle.contentInputContainer}>
					<TextInput style={editProfileStyle.contentInputStyle} 
						multiline={true} 
						value={content} 
						placeholder='소개글' 
						onChangeText={handleOnChangeContent}
						/>
				</View>
				<View style={editProfileStyle.contentMsgContainer}>
					<Text style={editProfileStyle.contentMsgText}>
						{contentMsg}
					</Text>
				</View>
				<View style={editProfileStyle.confirmBtnContainer}>
					<View style={editProfileStyle.confirmBtnStyle}>
						<TouchableOpacity onPress={handleOnPress} style={{}}>
							<Text style={editProfileStyle.confirmBtnText}>
								전송
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	)
}