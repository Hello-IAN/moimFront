import { postProfileImage } from '../api/axiosAPIs';
import { blobResponse, imageInfo, S3Response } from '../component/types';


const useImageConvert = ( orgImage:string, curUserId:number, accessToken:string ) => {
    const imageConvertTobinary = (blobUrl:Blob) => {
      return new Promise<string|ArrayBuffer|null>(resolve => {
        const fileRef = new FileReader();
        const dataURL = fileRef.readAsDataURL(blobUrl);
        try {
          fileRef.onload = () => {
            const result = fileRef.result;
            resolve(result)
          }
        } catch (error) {
          console.error(error)
        }
      })
    }
  
    const postImageToServer = async () => {
      try {
        const imageUrl = await fetch(orgImage);
         const blobUrl:Blob = await imageUrl.blob();
         const dataBin = await imageConvertTobinary(blobUrl);
         if (!dataBin)
          return ;
        
        const date = Date.now();
        const image = dataBin.slice(23);
        const imageId:string = (blobUrl as object as blobResponse)._data.blobId;
        const userId = curUserId;
        const imageInfo:imageInfo = {image, imageId, userId}
        const resUrl:S3Response = await postProfileImage(accessToken, imageInfo);
        if (resUrl?.url)
          return (resUrl.url)
        /* 
        const response = await axios.post(IMAGE_UPLOAD_URL, {
          image: dataBin.slice(23),
          imageId: blobId,
          userId: curUserId
          //2023.05.16
          })
          const responseObj = JSON.parse(response.request._response); */
          //2023.05.16,,리턴 어떻게 할지
          //현재 생각하는 구조, 기존의 post-> instance -> useAxios로 구분,
          //image를 결국 url로 리턴해야하는데, 현재 구조에서 뭐가 제일 최선일지 고민해보기.
          //property추가를 최대한 하지 말아야하는데, 어떤 식으로 하는게 베스트일지...
          //이 아래에서 {}로 각 데이터들 리턴하는 것 | 여기서 바로 axios call하는 것. 둘중 하나 생각해봐야함.
      } catch (error) {
        console.error("UploadFail:", error)
      }
    }
    const url = postImageToServer()
    if (!url)
      return '';
    return url
}

export default useImageConvert;