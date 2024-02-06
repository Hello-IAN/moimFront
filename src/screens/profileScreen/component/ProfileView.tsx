import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/RootReducer';
import { getStatus } from '../../../redux/Slices/Profile';
import { ProfileViewStyles } from '../style/profileStyle';
import ProfileEventView from './ProfileEventView';
import { ProfileReviewBasicView } from './ProfileReviewBasicView';
import ProfileUserView from './ProfileUserView'
  
export const ProfileView: React.FC = (userid) => {
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	const status = useSelector(getStatus);
	return (
		status === ('idle' || 'end') ?
	    <SafeAreaView style={ProfileViewStyles.parentContainer}>      		
			<View style={ProfileViewStyles.userContainer}> 
				<ProfileUserView />
			</View>
			<View >
				<Text style={ProfileViewStyles.eventTitleText}>
					이벤트
				</Text>
			</View>
			<View style={ProfileViewStyles.eventContainer}> 
				<ProfileEventView />
			</View>
			<View style={ProfileViewStyles.reviewContainer}> 
				<ProfileReviewBasicView />
			</View>
    	</SafeAreaView> : 
		status === 'err' ? 
			<View style={ProfileViewStyles.errContainer}>
				<Text style={ProfileViewStyles.errText}> 서버가 아파요.. </Text>
			</View> :
		<></>
  )
}
const styles = StyleSheet.create({
	userContainer: {
		flex:1.3
	},
	eventContainer: {
		flex:1.5,
	},
	reviewContainer: {
		flex:1.8
	}
})

