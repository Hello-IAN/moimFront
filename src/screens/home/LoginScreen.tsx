
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MoimHeader } from "./components/MoimHeader";
import { Spacer } from "../../components/Spacer";
import { HomeEventList } from "./components/HomeEventList";
import { HomeHashtagList } from "./components/HomeHashtagList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as WebBrowser from 'expo-web-browser';
import { useHomeNavigation } from "../../navigations/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { GlobalSlice } from "../../redux/Slices/Global";
import { RootState } from "src/redux/RootReducer";
import { getAuth, getRedirectAuth } from "./api/aixos";
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session'
import Constants from 'expo-constants';
import { Colors } from "react-native/Libraries/NewAppScreen";

WebBrowser.maybeCompleteAuthSession();

const EXPO_REDIRECT_PARAMS = { useProxy: true, projectNameForProxy: '@test/moimapp' };
const NATIVE_REDIRECT_PARAMS = { native: "moimapp://" };
const REDIRECT_PARAMS = Constants.appOwnership === 'expo' ? EXPO_REDIRECT_PARAMS : NATIVE_REDIRECT_PARAMS;
const redirectUri = AuthSession.makeRedirectUri(REDIRECT_PARAMS);

export const LoginScreen: React.FC = () => {
	const [auth, setAuth] = useState();
	const [token, setToken] = useState(null);
	
	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: "GOOGLE_GUID.apps.googleusercontent.com",
		androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
		iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
		webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
		redirectUri
	})

	useEffect(() => {
		if (response?.type === 'success') {
			const { authentication } = response;
			console.log(authentication);
		}
		const auth = getAuth();
		setAuth(auth);
	}, [response])
	
	
	const _handlePressButtonAsync = async () => {
		let result = await WebBrowser.openBrowserAsync(`http://54.180.201.67:3000/auth/login/google`);
		console.log(result);
	  };
  
	return (
		auth ? 
			<View style={{backgroundColor:"black", flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
		</View> : 
		<View style={{flex:1, alignItems:'center', justifyContent: 'center'}} >
			<Button disabled={!request} title="Google Login" onPress={()=>{
				promptAsync(REDIRECT_PARAMS);
			}} />
		</View>
	)
}

export default LoginScreen