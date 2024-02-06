import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { UserReviewType } from '../../../redux/Slices/Profile'
import { profileReviewViewStyles } from '../style/profileStyle'
export const ProfileReviewFlatlistRenderer:React.FC<UserReviewType> = React.memo(({...item}) => {

	const { reviewerId, reviewerContent, reviewerLatestDate, reviewerNickName } = item;
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	return (
				<View key={reviewerId} style={{marginTop: HP * 0.010,}}>
						<View style={profileReviewViewStyles.flatListInnerContainer}>
							<Text style={profileReviewViewStyles.flatListNicknameText}> 
							{reviewerNickName} 
							</Text>
							<Text style={profileReviewViewStyles.flatListDateText}> 
							{` | ${reviewerLatestDate}`} 
							</Text>
						</View>
						<View style={profileReviewViewStyles.flatListContentContainer}>
							<Text style={profileReviewViewStyles.contentContainerInnerText}>
								{reviewerContent}
							</Text>
						</View>
						<View style={{
								marginVertical:HP * 0.006, 
								marginLeft:WP * 0.024, 
								marginRight:WP * 0.024, 
								borderBottomColor: "rgba(0,0,0,0.2)",
								borderBottomWidth: 1.2,
								flexWrap: 'wrap'
						}}/>
						{/* 	//클릭 가능하면, 이벤트페이지로 네비게이트
							//네비게이트 찍기전에 디스패치로 이벤트 아이디 디스패치해서 변경해줘야함.
						//네비게이트 기능 어떻게 할지 생각 */}
			</View>
		)
})