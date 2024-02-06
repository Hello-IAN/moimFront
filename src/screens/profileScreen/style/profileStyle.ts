import { StyleSheet } from "react-native"

export const ProfileViewStyles = StyleSheet.create({
	parentContainer: {
		width: '90%',
		height: '100%',
		marginHorizontal:'5%',
	},	
	userContainer: {
		flex:1.3
	},
	eventContainer: {
		flex:1.5,
	},
	reviewContainer: {
		flex:1.8
	},
	eventTitleText: {
		fontSize: 20,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		flexWrap:'wrap',
		marginVertical:'3%'
	},
	errContainer: {
		width: '90%',
		height: '100%',
		marginHorizontal:'5%', 
		justifyContent:'center', 
		alignItems:'center'
	},
	errText: {
		fontSize: 40,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		flexWrap:'wrap',
	}
})

export const profileUserViewStyles = StyleSheet.create({
	mainContainer: {
		flexDirection:'row', 
		flex:1, 
		flexWrap:'wrap',
		height: '100%',
	},
	imageContainer: {
		width: '23%', 
		flexWrap:'nowrap', 
		height: '40%', 
		justifyContent:'center' 
	},
	hostInfoContainer: {
		flexDirection: 'row', 
		width: '70%', 
		height: '40%',
	},
	hostInfoInnerContainer: {
		marginBottom: '10%', 
		flexDirection: 'column', 
		width:'80%'
	},
	hostInfoTitle: {
		fontSize: 20,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		flexWrap:'wrap', 
		marginVertical:'5%'
	},
	editBtnContainer: {
		width: '30%'
	},
	hostInfoContentContainer: {
		flexDirection:'row', 
		flexWrap: 'wrap', 
		marginTop: '3%', 
		height: '50%'
	},
	contentInnerContainer: {
		width: '28%', 
		marginTop:'5%'
	},
	hostInfoContentTitle: {
		fontSize: 20,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		flexWrap:'wrap'
	},
	contentTextContainer: {
		width: '72%'
	},
	nickNameText: {
		fontSize: 18,
		height:'100%',
		fontWeight: "400",
		flexWrap:'wrap'
	},
	profileEditBtnContainer: {
		width:'100%',
		paddingVertical:'1%',
		borderRadius:50,
		borderWidth:2,
		borderColor:'rgba(0,0,0,0.7)',
		justifyContent:'center',
		alignItems:'center'
	}
	,
	profileEditBtnText: {
		fontSize: 14, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	}
})

export const profileUserTitleStyles = StyleSheet.create({
	titleMainContainer: {
		flexDirection: 'row', 
		width: '100%'
	},
	titleContentContainer: {
		width: '72%', 
		marginRight:'3%'
	},
	titleContentText: {
		fontSize: 18, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	},
	moreBtnContainer: {
		width: '25%', 
		justifyContent:'flex-start'
	},
	moreBtnStyle: { 
		paddingVertical:'1%',
		borderRadius:50,
		borderWidth:2,
		borderColor:'rgba(0,0,0,0.7)',
		justifyContent:'center',
		alignItems:'center'
	},
	moreBtnText: {
		fontSize: 14, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	}
})
export const profileReviewViewStyles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		marginVertical:'2%'
	},
	mainContainerInnerContainer: {
		width:'100%', 
		flexDirection:'row', 
		flexWrap:'nowrap', 
		height:'10%'
	},
	reviewTitleContainer: {
		width:'25%', 
		flexDirection:'row'
	},
	tilteText: {
		fontSize: 20,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		flexWrap:'wrap'
	},
	reviewContentContainer: {
		width:'75%', 
		flexDirection:'row', 
		justifyContent:'flex-end'
	},
	contentBtnContainer: { 
		borderRadius:50,
		borderWidth:2,
		borderColor:'rgba(0,0,0,0.7)',
		justifyContent:'center',
		alignItems:'center'
	},
	btnText: {
		fontSize: 14, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	},
	contentContainer: {
		width:'100%', 
		flexDirection:'column', 
		height:'100%'
	},
	reviewFlatListContinaer: {
		flex: 1,
	},
	flatListInnerContainer: {
		flexDirection:'row', 
	},
	flatListNicknameText: {
		fontSize: 16,
		color: "rgba(0,0,0,1)",
		fontWeight: "bold",
		marginVertical:'1.5%',
	},
	flatListDateText: {
		fontSize: 14,
		color: "rgba(0,0,0,1)",
		fontWeight: "400",
		marginVertical:'2%',
		marginRight:'5%'
	},
	flatListContentContainer: {
		flexDirection:"column", 
		flexWrap:'wrap',
	},
	contentContainerInnerText: {
		fontSize: 18,
		color: "rgba(0,0,0,0.8)",
		fontWeight: "400",	
		marginVertical:'2%'
	},
	reviweDoseNotExistText: {
		marginTop: "20%", 
		color:'rgba(0,0,0,0.4)',
		fontSize: 30, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		textAlign:'center'
	}

})

export const profileImageModalStyle = StyleSheet.create({
	mainContainer: {
		height: '10.3%', 
		flexDirection:'row', 
		paddingHorizontal:'2%', 
		backgroundColor:'white'
	},
	backBtnOuterContainer: {
		width:'50%', 
		justifyContent:'flex-end'
	},
	backBtnContainer: {
		marginLeft:'10%', 
		width:'10%'
	},
	backBtnText: {
		color:'rgba(0,0,0,0.4)',
		fontSize: 40, 
		fontWeight: '600', 
		flexShrink: 1,
	},
	confirmBtnOuterContainer: {
		width:'50%', 
		alignItems:'flex-end',
		justifyContent:'flex-end'
	},
	confirmBtnContainer: {
		marginRight:'5%', 
		width:'14%'
	},
	confirmBtnText: {
		color:'rgba(0,0,0,0.4)',
		fontSize: 34, 
		fontWeight: '600', 
		flexShrink: 1,
	},
	imageContainer: {
		height: '37%',  
		flexDirection:'column-reverse', 
		width:'100%'
	},
	imageViewContainer: {
		flexDirection:'row', 
		height:'25%'
	},
	cancleBtnContainer: {
		width:'45%', 
		flexDirection:'row', 
		marginLeft:'2.5%'
	},
	btnInnerContainer: {
		width:'100%',
		justifyContent:'center'
	},
	btnStyle: {
		color:'rgba(0,0,0,0.7)', 
		paddingHorizontal: '5%', 
		fontSize: 20, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		textAlign:'center', 
		textAlignVertical:'top'
	},
	btnSpace: {
		width:'5%'
	},
	pickBtnContainer: {
		width:'45%', 
		flexDirection:'row', 
		marginRight:'2.5%'
	},
	
})

export const imagePickerStyle = StyleSheet.create({
	mainContainer: {
		width:'100%', 
		height:'40%', 
		flexWrap:'nowrap'
	},
	imageContainer: {
		width:'100%', 
		height:'80%'
	},
	pickTitle: {
		paddingHorizontal: '5%', 
		color:'rgba(0,0,0,0.4)',
		fontSize: 30, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		textAlign:'center'
	},
	imageStyle: {
		width:'100%', 
		height:'100%'
	},
	plusBtnContainer: {
		width:'100%',
		height:'20%'
	},
	plustBtnStyle: {
		width:'100%',
		height: '100%',
		flexDirection:'row'
	},
	plustBtnTextContainer: {
		width:'100%'
	}, 
	plustBtnText: {
		paddingHorizontal: '5%', 
		color:'rgba(0,0,0,0.4)',
		fontSize: 40, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		textAlign:'center'
	}

})
export const profileEventViewStyle = StyleSheet.create({
	outerContainer: {
		height:'100%'
	},
	eventMainContainer: {
		flexGrow:0, 
		height:'100%', 
		width:'100%'
	},
	flatListMainContainer: {
		backgroundColor:'white', 
		maxHeight:200, 
		maxWidth:150, 
		flexWrap:'wrap', 
		justifyContent:'center'
	},
	flatListInnerContainer: {
		width:'100%', 
		justifyContent:'center'
	},
	flatListImageContainer: {
		height:'50%', 
		width:'100%', 
		justifyContent:"center"
	},
	flatListImageStyle: {
		width:160, 
		height:160, 
		resizeMode:'contain'
	},
	titleContainer: {
		height:'25%',
		width:'100%', 
		justifyContent:'center', 
		alignItems:'center', 
		flexShrink:1
	},
	titleText: {
		fontSize: 20,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold",
		alignItems:'center',
		paddingTop:'10%'
	},
	addressContainer: {
		width:'100%', 
		height:'20%', 
		justifyContent:'center',
		alignItems:'center'
	},
	addressText: {
		fontSize: 14,
		color: "rgba(0,0,0,0.4)",
		fontWeight: "bold"
	}
})

export const editProfileStyle = StyleSheet.create({
	mainContainer: {
		flex:1, 
		backgroundColor:'white',
	},
	headerContainer: {
		flex:1,
		marginHorizontal:'5%'
	},
	innerContainer: {
		flex:5, 
		width:'100%', 
		paddingHorizontal:'5%'
	},
	nickNameContainer: {
		width: '100%', 
		height:'5%', 
		flexWrap:'wrap', 
		alignItems:'center', 
		justifyContent:'center'
	},
	nickNameTitleContainer: {
		width:'15%',
	},
	nickNameTitleText: {
		fontSize: 20, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		width:'100%'
	},
	lenContainer: {
		width:'65%'
	},
	lenText: {
		paddingHorizontal:'2%', 
		fontSize: 14, 
		fontWeight: '200', 
		flexShrink: 1, 
		flexWrap:'wrap'
	},
	btnContainer: {
		width:'20%',
		paddingVertical:'1%',
		borderRadius:50,
		borderWidth:2,
		borderColor:'rgba(0,0,0,0.7)',
		justifyContent:'center',
		alignItems:'center'
	},
	dupBtnText: {
		fontSize: 14, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	},
	nickNameInputContainer: {
		width: '100%', 
		height:'6%', 
		marginTop:'3%',
		flexWrap:'nowrap'
	},
	nickNameInputStyle: {
		backgroundColor:'rgba(0,0,0,0.07)',
		fontSize: 20, 
		fontWeight: '400', 
		flexShrink: 1, 
		textAlign:'center', 
		textAlignVertical:'top', 
		minHeight:'6%'
	},
	nickNameMsgContainer: {
		width: '100%', 
		height:'5%', 
		flexWrap:'wrap', 
		justifyContent:'center',
		alignItems:'center'
	},
	nickNameMsgStyle: {
		fontSize: 14, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		color:'rgba(0,0,0,0.65)'
	},
	contentContainer: {
		width: '100%', 
		height:'5%', 
		flexWrap:'wrap', 
		alignItems:'center', 
		justifyContent:'center', 
		marginTop:'1.5%'
	},
	contentTitleContainer: {
		width:'15%',
		justifyContent:'center',
	},
	contentText: {
		fontSize: 20, 
		fontWeight: '400', 
		flexShrink: 1, 
		flexWrap:'wrap'
	},
	clearBtnText: {
		paddingVertical:'2%', 
		paddingHorizontal:'5%', 
		fontSize: 14, 
		fontWeight: '400', 
		flexWrap:'wrap'
	},
	contentInputContainer: {
		width: '100%', 
		height:'20%', 
		flexWrap:'nowrap', 
		marginTop:'3%'
	},
	contentInputStyle: {
		backgroundColor:'rgba(0,0,0,0.07)',
		paddingTop: '5%',
		paddingHorizontal: '5%',
		fontSize: 16,
		fontWeight: '600',
		flexShrink: 1,
		flexWrap:'wrap',
		textAlign:'center',
		textAlignVertical:'top', 
		minHeight:'20%'
	},
	contentMsgContainer: {
		width: '100%', 
		height:'5%', 
		flexWrap:'wrap', 
		justifyContent:'center', 
		alignItems:'center'
	},
	contentMsgText: {
		fontSize: 14, 
		fontWeight: '600', 
		flexShrink: 1, 
		flexWrap:'wrap', 
		textAlign:'center', 
		color:'rgba(0,0,0,0.65)'
	},
	confirmBtnContainer: {
		alignItems:'center', 
		justifyContent:'center', 
		width:'100%', 
		height:'10%'
	},
	confirmBtnStyle: {
		alignItems:'center', 
		justifyContent:'center',
		width:'50%',
		height:'80%',
		paddingVertical:'1%',
		borderRadius:80,
		borderWidth:2,
		borderColor:'rgba(0,0,0,0.7)'
	},
	confirmBtnText: {
		fontWeight:"600", 
		fontSize:24, 
		color:'rgba(0,0,0,0.7)'
	}
})
