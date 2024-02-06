import React from 'react'
import { SafeAreaView} from 'react-native'
import { ProfileEventFlatlist } from './ProfileEventFlatList'
import { profileEventViewStyle } from '../style/profileStyle'


const ProfileEventView:React.FC = () => {
	return (
		<SafeAreaView style={profileEventViewStyle.outerContainer}>
			<ProfileEventFlatlist />
		</SafeAreaView>
  )
}

export default ProfileEventView