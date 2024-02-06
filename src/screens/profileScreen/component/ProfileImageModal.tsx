import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { profileImageModalStyle } from '../style/profileStyle';

export const ProfileImageModal:React.FC<{visible:boolean, setVisible:React.Dispatch<React.SetStateAction<boolean>>, pickImage:()=>Promise<void>, setImage:React.Dispatch<React.SetStateAction<string | null>>}> = ( {visible, setVisible, pickImage, setImage})=> {
	return (
		//<SafeAreaView style={{width: '100%', height: '40%', backgroundColor: 'yellow'}}>
			<Modal transparent={true} 
				visible={visible} 
				presentationStyle={"overFullScreen"}>
				<View style={profileImageModalStyle.mainContainer}>
					<View style={profileImageModalStyle.backBtnOuterContainer}>
						<TouchableOpacity style={profileImageModalStyle.backBtnContainer} 
							onPress={()=>{
								setVisible(false);
								setImage('');
						}}>
							<Text style={profileImageModalStyle.backBtnText}>
								x
							</Text>
						</TouchableOpacity>
					</View>
					<View style={profileImageModalStyle.confirmBtnOuterContainer}>
						<TouchableOpacity style={profileImageModalStyle.confirmBtnContainer} 
							onPress={()=>{
								setVisible(false);
						}}>
							<Text style={profileImageModalStyle.confirmBtnText}>
								O
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			
				<View style={profileImageModalStyle.imageContainer}>
					<View style={profileImageModalStyle.imageViewContainer}>
					<TouchableOpacity style={profileImageModalStyle.cancleBtnContainer} 
						onPress={()=>{
							setImage('')
					}}>
						<View style={profileImageModalStyle.btnInnerContainer}>
							<Text style={profileImageModalStyle.btnStyle}>
								지우기	
							</Text>
						</View>
					</TouchableOpacity>
					<View style={profileImageModalStyle.btnSpace}/>
					<TouchableOpacity style={profileImageModalStyle.pickBtnContainer} onPress={()=>{pickImage()}}>
						<View style={profileImageModalStyle.btnInnerContainer}>
							<Text style={profileImageModalStyle.btnStyle}>
								고르기
							</Text>
						</View>
					</TouchableOpacity>
					</View>
				</View>
			</Modal>
		//</SafeAreaView>
	)
}