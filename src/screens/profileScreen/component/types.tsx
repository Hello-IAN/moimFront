import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../../navigations/TabbarNavigation";
import { HomeStackParam } from "../../../navigations/HomeNavigation";
import { profileNavParam } from "src/navigations/ProfileNavigation";

export type ProfileNavigationProp = CompositeNavigationProp<
			BottomTabNavigationProp<RootTabParamList, "프로필">,
			NativeStackNavigationProp<profileNavParam>
>;

export type ProfileNavigatorProp = NativeStackNavigationProp<HomeStackParam>


export type postUserProfile = {
	userName: string,
	userNickName: string,
	userProfilePhoto: string | undefined,
	userTitle: string | undefined
}
export type putUserProfile = {
	userNickName: string,
	userProfilePhoto: string | undefined,
	userTitle: string | undefined
}

export type imageInfo = {
	image: string | ArrayBuffer,
	imageId: string,
	userId: number
}

type messageLiteral = "Success" | "Failure"
export type S3Response= {
	message: messageLiteral
	url: string | undefined
}

export type blobResponse = {
	_data: {
		__collector: Object,
		blobId: string,
		name: string,
		offset: number,
		type: string
	}
}