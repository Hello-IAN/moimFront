import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";
import { useAppDispatch } from "../../../redux/RootStore";
import { ProfileSlice } from "../../../redux/Slices/Profile";
import { ProfileNavigationProp } from "./types";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const wp = wpSize("100%");
const hp = hpSize("100%");

export const ProfileHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileNavigationProp>();

  const onPressBack = () => {
    //dispatch(ProfileSlice.actions.removeAll());
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: '100%',
            paddingHorizontal:'5%',
            height: hp * 0.06,
          }}
        >
          <Text style={{fontSize: 24, fontWeight: '600', flexShrink: 1, flexWrap:'wrap'}}>
            프로필
          </Text>
      </View>
    </SafeAreaView>
  );
};
export const GuestProfileHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileNavigationProp>();

  const onPressBack = () => {
    //dispatch(ProfileSlice.actions.removeAll());
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styleHeader.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: wp * 0.9,
            paddingTop:"4%",
          }}
        >
          <TouchableOpacity
            onPress={onPressBack}
            style={styleHeader.exitContainer}
          >
            <Text style={{fontSize: 16, fontWeight: '600', flexShrink: 1, flexWrap:'wrap'}}>
              나가기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const EditProfileHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressBack = () => {
    //dispatch(ProfileSlice.actions.removeAll());
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styleHeader.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: wp * 0.9,
          }}
        >
          <TouchableOpacity
            onPress={onPressBack}
            style={styleHeader.searchButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    height: hp * 0.05,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp * 0.9,
  },
  searchButton: {
    paddingBottom: hp * 0.005,
    width: wp * 0.13,
    height: hp * 0.13,
  },

  exitContainer: {
    width: '100%',
    height: '70%'
  },

});
