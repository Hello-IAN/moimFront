import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { useHomeNavigation } from '../../../navigations/Navigation'
import { useDispatch } from 'react-redux'
import { UISlice } from '../../../redux/Slices/UI'
import { UserEventType } from '../../../redux/Slices/Profile'

import { profileEventViewStyle } from '../style/profileStyle'

export const ProfileEventFlatlistRenderer:React.FC<UserEventType> = React.memo(({...item}) => {

	const { eventId, eventTitle, eventAddress, eventMainImage } = item;
	const prefetchUrl = Image.prefetch(eventMainImage);
	const WP = useSelector((state: RootState)=> state.profile.wpSize);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);

	const naviation = useHomeNavigation<"User">();
	const dispatch = useDispatch();

	const navigateToEvent = ( id: number ) => {
		dispatch(UISlice.actions.setSelectEventId(id));
		naviation.navigate("Event");
	}
	return (
		<View key={eventId} style={profileEventViewStyle.flatListMainContainer}>
				<TouchableWithoutFeedback onPress={() => navigateToEvent(eventId)} >
				<View style={profileEventViewStyle.flatListInnerContainer}>
						<View style={profileEventViewStyle.flatListImageContainer}>
							<Image style={profileEventViewStyle.flatListImageStyle} 
								source={{uri: eventMainImage, cache:'force-cache'} } 
							/>
						</View>
						<View style={profileEventViewStyle.titleContainer}>
							<Text style={profileEventViewStyle.titleText}> 
									{eventTitle}
							</Text>
						</View>
						<View style={profileEventViewStyle.addressContainer}>
									<Text style={profileEventViewStyle.addressText}>
										{eventAddress}
									</Text>
						</View>
					</View>
					</TouchableWithoutFeedback>
							{/* 	//클릭 가능하면, 이벤트페이지로 네비게이트
								//네비게이트 찍기전에 디스패치로 이벤트 아이디 디스패치해서 변경해줘야함.
							//네비게이트 기능 어떻게 할지 생각 */}
	</View>
		)
})