import React from 'react'
import { View, Text, } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { ProfileImageComponent } from './ProfileImageComponent'
import { ProfileNickNameComponent } from './ProfileNickNameComponent'
import { ProfileTitleComponent } from './ProfileTitleComponent'
import { ProfileEditAuth } from './ProfileEditAuth'
import { getStatus } from '../../../redux/Slices/Profile'
import { profileUserViewStyles } from '../style/profileStyle'

export const ProfileUserView:React.FC = () => {
	const userInfo = useSelector((state: RootState) => state.profile.userInfo);
	const currUser = useSelector((state: RootState) => state.global.userId);
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	const status = useSelector(getStatus);
	const photo = userInfo.profileImage;
	return (
			
			<View style={profileUserViewStyles.mainContainer}> 
        			<View style={profileUserViewStyles.imageContainer}>
						<ProfileImageComponent />
					</View>
					<View style= {profileUserViewStyles.hostInfoContainer}>
						<View style={profileUserViewStyles.hostInfoInnerContainer}>
							<Text style={profileUserViewStyles.hostInfoTitle}>
								호스트
							</Text>
							<ProfileNickNameComponent />
						</View>
						<View style={profileUserViewStyles.editBtnContainer}>
							<ProfileEditAuth />
						</View>
			</View>
			<View style={profileUserViewStyles.hostInfoContentContainer}> 
					<View style={profileUserViewStyles.contentInnerContainer}>
						<Text style={profileUserViewStyles.hostInfoContentTitle}>
									프로필 소개
						</Text>
					</View>		
					<View style={profileUserViewStyles.contentTextContainer}>
						<ProfileTitleComponent />
					</View>
				</View>
			</View>
  )
}

export default ProfileUserView