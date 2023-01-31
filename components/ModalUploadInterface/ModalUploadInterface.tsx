import { DragEvent, FC, FormEvent, useState } from "react";
import { Text } from "../Text/Text.styled";
import { MessageUploadImg } from "../MessageUploadImg/MessageUploadImg";
import { uploadCatImage } from "../../API/catAPI";
import * as SC from "./ModalUploadInterface.styled";

const noFileName = "No file selected";

export const ModalUploadInterface: FC = () => {
  // const [image, setImage] = useState("");
  const [fileCat, setFileCat] = useState<null | File>(null);
  // const [fileName, setFileName] = useState(noFileName);
  const [uploadStatus, setUploadStatus] = useState<boolean | null>(null);
  const [status, setStatus] = useState("idle");

  const input = () => {
    return document.getElementById("input-upload")! as HTMLInputElement;
  };

  // console.log(fileCat);
  // console.log(status);

  const onClickFormSelectImg = () => {
    input().click();
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement; 

    if (!fileCat) {
      return;
    }

    try {
      setStatus("pending");
      if (uploadStatus === false) {
        setUploadStatus(null);
      }
      const catUpload = await uploadCatImage(fileCat);
      console.log(catUpload);
      setFileCat(null);
      // setFileName(noFileName);
      setStatus("fulfilled");
      setUploadStatus(true);
      form.reset();
    } catch (error) {
      setStatus("rejected");
      setUploadStatus(false);
    } 
  };

  const omDragOverForm = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onDropImg = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files;
    const type = file["0"].type;
    console.log(file);
    if (file.length && (type === "image/png" || type === "image/jpeg")) {
      input().files = file;
      // setFileName(`Image File Name: ${file[0].name}`);
      // setImage(URL.createObjectURL(file[0]));
      setFileCat(file[0]);
      setUploadStatus(null);
    }
  };

  const onChangeInputValue = (e: FormEvent<HTMLInputElement>) => {
    console.log(e);
    const target = e.target as HTMLInputElement;
    const file = target.files;

    if (file && file.length) {
      // setFileName(`Image File Name: ${file[0].name}`);
      // setImage(URL.createObjectURL(file[0]));
      setFileCat(file[0]);
      setUploadStatus(null);
    } 
  };

  const imageCatURL = fileCat ? URL.createObjectURL(fileCat) : "";
  const imageName = fileCat ? `Image File Name: ${fileCat.name}` : noFileName;

  return (
    <SC.Wrapp>
      <SC.Title>Upload a .jpg or .png Cat Image</SC.Title>
      <Text center="center" color="textSecondary">
        Any uploads must comply with the&nbsp;
        <SC.Linck
          href="https://thecatapi.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          upload guidelines
        </SC.Linck>
        &nbsp;or face deletion.
      </Text>
      <SC.Form
        id="uploadImg"
        onClick={onClickFormSelectImg}
        onSubmit={submitForm}
        onDragOver={omDragOverForm}
        onDrop={onDropImg}
        uploadStatus={uploadStatus}
      >
        <SC.PreviewBox img={imageCatURL}>
          {imageCatURL === "" && (
            <SC.PreviewTextWrapp>
              <Text center="center" color="textSecondary">
                <SC.PreviewTextAccent>Drag here</SC.PreviewTextAccent> your file
                or <SC.PreviewTextAccent>Click here</SC.PreviewTextAccent> to
                upload
              </Text>
            </SC.PreviewTextWrapp>
          )}
          {imageCatURL !== "" && (
            <SC.PreviewImg src={imageCatURL} fill alt={imageName} />
          )}
        </SC.PreviewBox>
        <SC.InputUpload
          id="input-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChangeInputValue}
        />
      </SC.Form>
      <Text center="center" color="textSecondary">
        {imageName}
      </Text>
      {imageCatURL !== "" && (
        <SC.UploadBtn
          form="uploadImg"
          type="submit"
          btn="seccond"
          disabled={status === "pending"}
        >
          upload photo
        </SC.UploadBtn>
      )}
      {uploadStatus !== null && <MessageUploadImg uploadStatus={uploadStatus} />}
    </SC.Wrapp>
  );
};
