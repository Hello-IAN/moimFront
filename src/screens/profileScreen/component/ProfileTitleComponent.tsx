import React, { useState } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { profileUserTitleStyles } from '../style/profileStyle'

export const ProfileTitleComponent:React.FC = () => {
	const userTitle = useSelector((state: RootState) => state.profile.userInfo.title);
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	const testData = userTitle + 'qweqweqweqweqweqwkeqwopekqwopekqwopekopqwekpqekopqwekpoqwkepoqwkeopqwekopqwkepoqwekopqwkeopqwkeopqwkeopqwkepoqwkeopqwekqopwe';

	const [isToggle, setIsToggle] = useState(false);
	return (
		<View style={profileUserTitleStyles.titleMainContainer}>
			<View style={profileUserTitleStyles.titleContentContainer}>
				{testData.length >= 100 && !isToggle 
				? <Text style={profileUserTitleStyles.titleContentText}>{testData.slice(0, 20)+'...'}</Text> 
				: <ScrollView showsVerticalScrollIndicator={false}>
					<Text style={profileUserTitleStyles.titleContentText}>
						{testData}
					</Text>
				</ScrollView> }
			</View>
			<View style={profileUserTitleStyles.moreBtnContainer}>
				{testData.length >= 100
				? 
				<TouchableOpacity style={profileUserTitleStyles.moreBtnStyle} onPress={()=>{
					!isToggle ? setIsToggle(true) : setIsToggle(false)
					}}>
						<Text style={profileUserTitleStyles.moreBtnText}>
							{isToggle ? '그만보기' : '더보기'}
						</Text>
				</TouchableOpacity>
				: <></>}
			</View>
		</View>
	);
}
