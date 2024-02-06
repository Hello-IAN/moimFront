import React, { useCallback } from 'react'
import { View, FlatList, ListRenderItem} from 'react-native'
import { useSelector } from 'react-redux'
import { getStatus, selectHpSize, selectUserReview, selectWpSize, UserReviewType } from '../../../redux/Slices/Profile'
import { WritableDraft } from 'immer/dist/internal'
import { useAppDispatch } from '../../../redux/RootStore'
import { fetchReviewsData } from './handleAsyncThunk'
import { ProfileReviewFlatlistRenderer } from './ProfileReviewFlatListRenderer'
import { profileReviewViewStyles } from '../style/profileStyle'
export const ProfileReviewFlatlist:React.FC = () => {
	const reviewInfo = useSelector(selectUserReview);
	const WP = useSelector(selectWpSize);
	const HP = useSelector(selectHpSize);

	const dispatch = useAppDispatch();
	const status = useSelector(getStatus);
	const randomKey = (id:number)=> { return (id.toString() + Math.random().toString(26).substr(2, 9))};
	const renderItem:ListRenderItem<UserReviewType> = useCallback(({item}) => (<ProfileReviewFlatlistRenderer {...item} />), [])
	const keyExtractor = useCallback((item:UserReviewType)=> randomKey(item.reviewerId), [])
	const getItemLayOut = (data:WritableDraft<UserReviewType[]>| null | undefined , index:number) => ({
		length: HP * 0.05,
		offset: HP * 0.05 * index,
		index,
	});
	const useOnEndReachedInReview = useCallback(() => {
		const pagenumber = reviewInfo.length % 10;
		if (pagenumber !== 0)
			return ;
		console.log('im here');
		if (status === 'idle'){
			dispatch(fetchReviewsData())
		}
	}, [reviewInfo]);
	return (
		<View style={profileReviewViewStyles.reviewFlatListContinaer}>
			<FlatList
			 		horizontal={false}
					showsVerticalScrollIndicator={false}
					data={reviewInfo}
					keyExtractor={keyExtractor}
					renderItem={renderItem}
					//getItemLayout={getItemLayOut}
					//얘는 사실, 닿았을때, 데이터 요청해서 dispatch하는 펑션으로 대응해야함.
					onEndReached={useOnEndReachedInReview}
					onEndReachedThreshold={0.02}
					disableVirtualization={false}
					initialNumToRender={10}
					maxToRenderPerBatch={10}
					windowSize={4}
				>
			</FlatList>
		</View>
	  )
}