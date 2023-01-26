import { DragEvent, FC, FormEvent, useState } from "react";
import { Text } from "../Text/Text.styled";
import { uploadCatImage } from "../../API/catAPI";
import * as SC from "./ModalUploadInterface.styled";

const noFileName = "No file selected";

export const ModalUploadInterface: FC = () => {
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState(noFileName);
  const [status, setStatus] = useState("idle");

  const onClickFormSelectImg = () => {
    document.getElementById("input-upload")!.click();
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    // const formData = new FormData();
    // formData.append("file", image)
    // let l = [];
    // formData.forEach((e) => l.push(e));
    // console.log(formData);
   
try {
  setStatus("pending");
  // const catUpload = await uploadCatImage(e.target[0].value);
    const catUpload = await uploadCatImage(image);
  console.log(catUpload);
  e.currentTarget.reset();
  setStatus("fulfilled")
} catch (error) {
  setStatus("rejected")
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
      const input = document.getElementById(
        "input-upload"
      )! as HTMLInputElement;
      input.files = file;
      setFileName(`Image File Name: ${file[0].name}`);
      setImage(URL.createObjectURL(file[0]));
    }
  };

  const onChangeInputValue = (e: FormEvent<HTMLInputElement>) => {
    console.log(e);

    const target = e.target as HTMLInputElement;
    const file = target.files;

    if (file) {
      setFileName(`Image File Name: ${file[0].name}`);
      setImage(URL.createObjectURL(file[0]));
    }
  };

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
      {image !== "" && (
        <SC.UploadBtn form="uploadImg" type="submit" btn="seccond" disabled={status==="pending"}>
          upload photo
        </SC.UploadBtn>
      )}
    </SC.Wrapp>
  );
};
