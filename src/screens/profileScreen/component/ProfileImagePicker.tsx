import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ProfileImageModal } from './ProfileImageModal';
import { imagePickerStyle } from '../style/profileStyle';

export const ProfileImagePicker:React.FC<{ image:string|null, setImage:React.Dispatch<React.SetStateAction<string | null>>}>= ( {image, setImage} ) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState<ImagePicker.PermissionStatus | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  /* 첫 접근 시 카메라, 파일 퍼미션 확인 */
  useEffect(() => {
    (async () => {
	  const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
	  if (galleryStatus.status === 'granted' || galleryStatus.status === 'denied')
	  	setHasGalleryPermission(galleryStatus.status);
    })();
  }, []);

  /* 라이브 러리 접근->image 형식만 허용 -> 편집 허용-> 비율 1:1 -> 퀄리티 1 -> 찾으면 이미지에 찾은 파일 path 저장*/
  const pickImage = async () => {
	  const result = await ImagePicker.launchImageLibraryAsync({
		  mediaTypes: ImagePicker.MediaTypeOptions.Images,
		  allowsEditing: true,
		  aspect: [1, 1],
		  quality: 0.1,
	  })
	  if (!result.canceled) {
		  const imageUri = result?.assets?.[0].uri
		  setImage(imageUri);
	  }
  }
  /* 권한 없음 */
  if (hasGalleryPermission === null) {
    return <View />;
  }
  /* 권한 거절 */
  if (hasGalleryPermission === 'denied') {
    return <Text>No access to gallary</Text>;
  }
  return (
    <View style={imagePickerStyle.mainContainer}>
		<ProfileImageModal visible={visible} setVisible={setVisible} pickImage={pickImage} setImage={setImage}/>
		<View style={imagePickerStyle.imageContainer}>
			{!image ? 
				!visible && 
				<Text style={imagePickerStyle.pickTitle}>
					프로필 이미지 선택
				</Text> : 
				<Image source={{uri: image}} 
					style={imagePickerStyle.imageStyle} 
					resizeMode='contain'
				/>}
		</View>
		<View style={imagePickerStyle.plusBtnContainer}>
			<TouchableOpacity style={imagePickerStyle.plustBtnStyle} 
				onPress={()=>{
						setVisible(true)
						console.log('모달 열기')
			}}>
				<View style={imagePickerStyle.plustBtnTextContainer}>
					{visible ?
					 	'' :
						<Text style={imagePickerStyle.plustBtnText}>
							+
						</Text>
					}
				</View>
			</TouchableOpacity>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	viewContainer:{
		flex: 1,
	},
	cameraContainer:{
		flex: 1,
		flexDirection: 'row',
	},
	fixedRatio: {
		flex: 1,
		aspectRatio: 1,
	},
	text: {
		fontSize: 24,

	},
	camera: {
		flex: 1,
		height: 400,
		width: '100%'
	},
	buttonContainer: {
		flex: 1,
	},
	button: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center'
	}
 }); 
