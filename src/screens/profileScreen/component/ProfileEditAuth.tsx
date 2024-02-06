import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { selectUserInfo } from '../../../redux/Slices/Profile'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigationProp, } from './types'
import { profileUserViewStyles } from '../style/profileStyle'


export const ProfileEditAuth:React.FC = () => {
	const navigator = useNavigation<ProfileNavigationProp>();
	
	//둘중 하나를 글로벌 Uid로 봐야함.
	const InfoUid = useSelector(selectUserInfo).id;
	const reqUid = useSelector((state:RootState) => state.ui.SelectUserId);
	
	//추후에 버전 업데이트하고 Push하는 방향으로 코드 수정 해야함.
	//2023.05.11 23:32Pm
	const handleOnPress = useCallback(() => {
		navigator.push("Edit")
	},[navigator]);
	return (
		/* InfoUid === reqUid ? 
		<View style={profileUserViewStyles.profileEditBtnContainer}>
			<TouchableOpacity onPress={handleOnPress}>
				<Text style={profileUserViewStyles.profileEditBtnText}>프로필편집</Text>
			</TouchableOpacity> 
		</View> : <></> */
		<View style={profileUserViewStyles.profileEditBtnContainer}>
			<TouchableOpacity onPress={handleOnPress}>
				<Text style={profileUserViewStyles.profileEditBtnText}>프로필편집</Text>
			</TouchableOpacity> 
		</View>
	) 
}