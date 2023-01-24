import { FC } from "react";
import { Text } from "../Text/Text.styled";
// import { Button } from "../Button/Button";
import * as SC from "./ModalUploadInterface.styled";



export const ModalUploadInterface: FC = () => {
  
  const sd = document.getElementById("input-upload")!;
  console.log(sd
  );
  return (<>
    <SC.Title>Upload a .jpg or .png Cat Image</SC.Title>
    
    <Text center="center" color="textSecondary" >Any uploads must comply with the <SC.Linck href="https://thecatapi.com/privacy" target="_blank" rel="noopener noreferrer">upload guidelines</SC.Linck> or face deletion.</Text>
    {/* <SC.PreviewBoxBtn>sjdfhjkshdfjkshfjkshjkfghdf</SC.PreviewBoxBtn> */}
    <SC.PreviewBoxWrapp onClick={()=> sd.click()}>
      <SC.PreviewBox>dsds</SC.PreviewBox>
      <SC.InputUpload id="input-upload" type="file" accept="image/png, image/jpeg"   onChange={e => console.log(e)} />
  </SC.PreviewBoxWrapp>
    <SC.UploadBtn btn="seccond" onClick={() => console.log("d")}>upload photo</SC.UploadBtn>
  <Text center="center" color="textSecondary">No file selected</Text>
  </>)
}