import { DragEvent, FC, FormEvent, MouseEvent, useState } from "react";
import { Text } from "../Text/Text.styled";
import Image from "next/image";
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

  const omDragOverForm = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onDropImg = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files;
    const type = file["0"].type;
    console.log(file);
    if (
      file.length &&
      (type === "image/png" || type === "image/jpeg")
    ) {
      const input = document.getElementById(
        "input-upload"
      )! as HTMLInputElement;
      input.files = file;
      setFileName(file[0].name);
      setImage(URL.createObjectURL(file[0]));
    }
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
    <SC.Wrapp>
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
        onDragOver={omDragOverForm}
        onDrop={onDropImg}
      >
        <SC.PreviewBox img={image}>
          {image === "" && (
            <SC.PreviewTextWrapp>
              <Text center="center" color="textSecondary">
                <SC.PreviewTextAccent>Drag here</SC.PreviewTextAccent> your file
                or <SC.PreviewTextAccent>Click here</SC.PreviewTextAccent> to
                upload
              </Text>
            </SC.PreviewTextWrapp>
          )}
          {image !== "" && <SC.PreviewImg src={image} fill alt={fileName} />}
        </SC.PreviewBox>
        <SC.InputUpload
          id="input-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChangeInputValue}
        />
      </SC.Form>
      <Text center="center" color="textSecondary">
        {fileName}
      </Text>
      <SC.UploadBtn form="uploadImg" type="submit" btn="seccond">
        upload photo
      </SC.UploadBtn>
    </SC.Wrapp>
  );
};
