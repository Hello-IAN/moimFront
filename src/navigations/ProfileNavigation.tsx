import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/home/HomeScreen";
import { EventScreen } from "../screens/Event/Event";
import { HashtagScreen } from "../screens/hashtagScreen/HashtagScreen";
import { ProfileScreen } from "../screens/profileScreen/ProfileScreen";
import { PostEventScreen } from "../screens/EventPost/PostEventScreen";
import { SearchScreen } from "../screens/searchScreen/SearchScreen";
import { NewProfile } from "../screens/profileScreen/NewProfile";
import { EditProfile } from "../screens/profileScreen/EditProfileScreen";
export type profileNavParam = {
	Home: undefined,
	Profile: undefined,
	Edit: undefined,
	Event: undefined,
	Search: undefined,
	HashTag: undefined,
}

const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen:React.FC = () => {
	return (
		<ProfileStack.Navigator screenOptions={{headerShown:false}}>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} />
			<ProfileStack.Screen name="Edit" component={EditProfile} />
			<ProfileStack.Screen name="Event" component={EventScreen} />
			<ProfileStack.Screen name="Search" component={SearchScreen} />
			<ProfileStack.Screen name="Hash" component={HashtagScreen} />
			<ProfileStack.Screen name="Home" component={HomeScreen} />
		</ProfileStack.Navigator>
	)
}