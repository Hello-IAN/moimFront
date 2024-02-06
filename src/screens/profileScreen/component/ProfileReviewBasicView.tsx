import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'
import { getStatus, selectUserReview } from '../../../redux/Slices/Profile'
import { imagePickerStyle, profileReviewViewStyles } from '../style/profileStyle'
import { ProfileReviewFlatlist } from './ProfileReviewFlatList'
import { ProfileReviewScrollView } from './ProfileReviewScrollView'


export const ProfileReviewBasicView = () => {
	const [isShowMore, setisShowMore] = useState(false);
	const ReviewInfo = useSelector(selectUserReview);
	const ReviewCount = ReviewInfo.length;
	const status = useSelector (getStatus);
	return (
		<SafeAreaView style={profileReviewViewStyles.mainContainer}>
			<View style={profileReviewViewStyles.mainContainerInnerContainer}>
				<View style={profileReviewViewStyles.reviewTitleContainer}>
					<Text style={profileReviewViewStyles.tilteText}>
						리뷰
					</Text>
				</View>
				<View style={profileReviewViewStyles.reviewContentContainer}>
					{ReviewCount > 5 ? 
					<View style={{height:'100%', width:'25%'}}>
						<TouchableOpacity style={profileReviewViewStyles.contentBtnContainer} onPress={()=>{
							!isShowMore ? setisShowMore(true) : setisShowMore(false)
							}}>
								<Text style={profileReviewViewStyles.btnText}>
									{isShowMore ? '그만보기' : '더보기'}
								</Text>
						</TouchableOpacity> 
					</View> : <></>}
				</View>
			</View>	
			<View style={profileReviewViewStyles.contentContainer}>
				{status === ('idle' || 'end') && ReviewCount === 0 ? <Text style={profileReviewViewStyles.reviweDoseNotExistText}> 리뷰가 없습니다. </Text> 
				: status === ('idle' || 'end')&& ReviewCount < 5 ? <ProfileReviewScrollView />
				: status === ('idle' || 'end') && ReviewCount > 5 && isShowMore === false
				?  <ProfileReviewScrollView />	
				: <ProfileReviewFlatlist />}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		color:'gray'
	}
})