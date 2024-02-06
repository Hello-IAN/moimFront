import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { profileUserViewStyles } from '../style/profileStyle'

export const ProfileNickNameComponent:React.FC = () => {
	const userNickName = useSelector((state: RootState) => state.profile.userInfo.nickName);

	return (
			<Text style={profileUserViewStyles.nickNameText}>
				{userNickName}
			</Text>
	)
}