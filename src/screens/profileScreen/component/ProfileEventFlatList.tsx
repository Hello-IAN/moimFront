import React, { useCallback } from 'react'
import { View, FlatList, ListRenderItem} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/RootReducer'
import { getStatus, selectUserEvent, UserEventType } from '../../../redux/Slices/Profile'
import { ProfileEventFlatlistRenderer } from './ProfileEventFlatListRenderer'
import { WritableDraft } from 'immer/dist/internal'
import { useAppDispatch } from '../../../redux/RootStore'
import { fetchEventsData } from './handleAsyncThunk'
import { profileEventViewStyle } from '../style/profileStyle'

export const ProfileEventFlatlist:React.FC = () => {
	const eventInfo = useSelector(selectUserEvent);
	const dispatch = useAppDispatch();
	const status = useSelector(getStatus);
	const HP = useSelector((state: RootState)=> state.profile.hpSize);
	const randomKey = (id:number)=> { return (id.toString() + Math.random().toString(26).substr(2, 9))};
	const renderItem:ListRenderItem<UserEventType> = useCallback(({item}) => (<ProfileEventFlatlistRenderer {...item} />), [])
	const keyExtractor = useCallback((item:UserEventType)=> randomKey(item.eventId), [])
	const getItemLayOut = (data:WritableDraft<UserEventType[]>| null | undefined , index:number) => ({
		length: HP * 0.05,
		offset: HP * 0.05 * index,
		index,
	});
	//itemDivider 의존성 어디다 걸지 고민해야함. 2023.05.16
	const itemDivider = useCallback((index:number)=>{return <View style={{marginHorizontal:10}}></View>},[eventInfo])
	const useOnEndReachedInEvent = useCallback(() => {
		const pagenumber = eventInfo.length % 10;
		if (pagenumber !== 0)
			return ;
		if (status === 'idle'){
			dispatch(fetchEventsData())
		}
	}, []);

	return (
		<View style={profileEventViewStyle.eventMainContainer}>
			<FlatList
				horizontal
				//showsHorizontalScrollIndicator={false}
				data={eventInfo}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				//getItemLayout={getItemLayOut}
				//얘는 사실, 닿았을때, 데이터 요청해서 dispatch하는 펑션으로 대응해야함.
				onEndReached={useOnEndReachedInEvent}
				onEndReachedThreshold={0.06}
				disableVirtualization={false}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				windowSize={3}
				ItemSeparatorComponent={itemDivider}
			>
			</FlatList>
		</View>
  )
}