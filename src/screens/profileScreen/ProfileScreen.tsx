import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useAppDispatch } from "../../redux/RootStore";
import { ProfileHeader } from './component/Header'
import {
	widthPercentageToDP as wpSize,
	heightPercentageToDP as hpSize,
  } from "react-native-responsive-screen";
import { ProfileSlice } from "../../redux/Slices/Profile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/RootReducer";
import { UISlice } from "../../redux/Slices/UI";
import { GetProfileInfo } from "./component/GetProfileInfo";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProp } from "./component/types";


export const ProfileScreen:React.FC = () => {
  const navigator = useNavigation<ProfileNavigationProp>();

  const navigationToHome = () => {
    navigator.navigate("Home");
  }
  const isLogin = useSelector((state:RootState)=>state.global.isLogin);
  //const navigator = useHomeNavigation<"User">()
  const currentUid = useSelector((state:RootState) => state.global.userId);
  const dispatch = useAppDispatch();
  if (!currentUid) {
    dispatch(UISlice.actions.setSelectUserId(0));
    navigationToHome();
  }
  //반드시 로그인 창으로 가게 해야함 -> 추후에 정리
  const reqUid = useSelector((state:RootState) => state.ui.SelectUserId); 
  if (!reqUid) {
    dispatch(UISlice.actions.setSelectUserId(0));
    navigationToHome();
  }
  
  useLayoutEffect(() => {
    const wp = wpSize("100%");
    const hp = hpSize("100%");
    dispatch(ProfileSlice.actions.addWpSize(wp));
    dispatch(ProfileSlice.actions.addHpSize(hp));
  }, []);


	useEffect(() => {
		dispatch(ProfileSlice.actions.changeState('loading'))
	}, [])
  
  return (
    !reqUid || !currentUid 
    ? 
    <></>
    :
    <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, }}>
          <ProfileHeader />
        </View>
 {/*        <ProfileUserFileterLogic />
        <ProfileEventFileterLogic />
        <ProfileReviewFileterLogic /> */}
        <View style={{flex: 11, }} >
          <GetProfileInfo/>
        </View>
    </View>
  );
};
export default ProfileScreen