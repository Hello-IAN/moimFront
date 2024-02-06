import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import { useSelector } from 'react-redux'
import { selectHpSize, selectUserReview, selectWpSize } from '../../../redux/Slices/Profile'

export const ProfileReviewScrollView:React.FC = () =>{
	const WP = useSelector(selectWpSize);
	const HP = useSelector(selectHpSize);
	const item = useSelector(selectUserReview);
	const reviewCount = item.length
	const limitIndex = reviewCount > 5 ? 5 : reviewCount;

	const reviews = item?.slice(0, limitIndex);
	return (
		<ScrollView contentContainerStyle={{
            paddingBottom: HP * 0.04,
            paddingTop: HP * 0.01,
            flexGrow: 1,
          }}scrollEnabled={false} showsVerticalScrollIndicator={false}>
			<View>
			 {reviews.map((item, index) => 
				<View key={index} style={{}}>
					<View style={{flexDirection:'row'}}>
						<Text style={{
							fontSize: 16,
							color: "rgba(0,0,0,1)",
							fontWeight: "bold",
							marginVertical:'1.5%',
							}}> 
						{item.reviewerNickName} 
						</Text>
						<Text style={{
							fontSize: 14,
							color: "rgba(0,0,0,1)",
							fontWeight: "400",
							marginVertical:'2%',
							marginRight:'5%'
							}}> 
						{` | ${item.reviewerLatestDate}`} 
						</Text>
					</View>
					<View style={{flexDirection:"column", flexWrap:'wrap',}}>
						<Text style={{
							fontSize: 18,
							color: "rgba(0,0,0,0.8)",
							fontWeight: "400",	
							marginVertical:'0.75%'}}>
							{item.reviewerContent}
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
				</View>
			)}
			</View>
	</ScrollView>
	)
}