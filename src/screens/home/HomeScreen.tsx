import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MoimHeader } from "./components/MoimHeader";
import { Spacer } from "../../components/Spacer";
import { HomeEventList } from "./components/HomeEventList";
import { HomeHashtagList } from "./components/HomeHashtagList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useHomeNavigation } from "../../navigations/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../../redux/Slices/Global";
import { RootState } from "src/redux/RootReducer";

export const HomeScreen: React.FC = () => {
//  const homenavigation = useNavigation();
  
  //const isLoggined = useSelector((state:RootState) => state.global.isLogin);
  const homenavigation = useHomeNavigation<"Home">();
  const dispatch = useDispatch();
  const testAuth = {
    userId: 37,
    AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM3fQ.pnKTQYYMCFMk6SsK2KhiUj1_7cGxyG8MGGFkhlMukwI",
  }
  const onPressEvent = useCallback(() => {
    homenavigation.navigate("Event" as never);
  }, [homenavigation]);
  const onPressHashtag = useCallback((hashtag: number) => {
    homenavigation.navigate("HashTag");
  }, [homenavigation]);
  dispatch(GlobalSlice.actions.addAuth(testAuth));
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <MoimHeader showBackButton={false} />
      <Spacer size={20} />
      <ScrollView>
        <HomeHashtagList onPressHashtag={onPressHashtag} />
        <HomeEventList onPressEvent={onPressEvent} />
      </ScrollView>
    </View>
  );
};
