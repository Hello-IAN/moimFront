import React from 'react'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../../../redux/Slices/Profile'
import { RootState } from '../../../redux/RootReducer'

export const ProfileImageComponent:React.FC = ( ) => {
	const userPhoto = useSelector(selectUserInfo).profileImage;
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	return (
			<Image style={{borderRadius: 50, width: WP * 0.18, height: WP * 0.18}} source={!userPhoto ? require('../../../assets/basicProfile.png') 
				: {uri : userPhoto}} resizeMode='contain' /> 
  )
}

export default ProfileImageComponent
