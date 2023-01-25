import { FC, FormEvent, useState } from "react";
import { Text } from "../Text/Text.styled";
// import { Button } from "../Button/Button";
import * as SC from "./ModalUploadInterface.styled";

const noFileName = "No file selected";

export const ModalUploadInterface: FC = () => {
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState(noFileName);

  const onClickFormSelectImg = () => {
    document.getElementById("input-upload")!.click();
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.reset();
  };

  const onChangeInputValue = (e: FormEvent<HTMLInputElement>) => {
    console.log(e);

    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <>
      <SC.Title>Upload a .jpg or .png Cat Image</SC.Title>
      <Text center="center" color="textSecondary">
        Any uploads must comply with the
        <SC.Linck
          href="https://thecatapi.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          upload guidelines
        </SC.Linck>
        or face deletion.
      </Text>
      <SC.Form
        id="uploadImg"
        onClick={onClickFormSelectImg}
        onSubmit={submitForm}
      >
        <SC.PreviewBox>dsds</SC.PreviewBox>
        <SC.InputUpload
          id="input-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChangeInputValue}
        />
      </SC.Form>
      <SC.UploadBtn form="uploadImg" type="submit" btn="seccond">
        upload photo
      </SC.UploadBtn>
      <Text center="center" color="textSecondary">
        No file selected
      </Text>
    </>
  );
};
