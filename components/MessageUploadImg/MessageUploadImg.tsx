import { FC } from "react";
import { useStore } from "../../Store/Store";
import { Text } from "../Text/Text";
import ErrorIcon from "../../public/error.svg";
import SuccessIcon from "../../public/success.svg";
import * as SC from "./MessageUploadImg.styled";

interface IProps {
  uploadStatus: boolean;
}

export const MessageUploadImg: FC<IProps> = ({ uploadStatus }) => {
  const {lightTheme} = useStore();

  const Icon = uploadStatus ? SuccessIcon : ErrorIcon;
  const message = uploadStatus
    ? "Thanks for the Upload - Cat found!"
    : "No Cat found - try a different one";
  return (
    <SC.messageWrapp upload={uploadStatus} lightTheme={lightTheme}>
      <Icon width={20} height={20} fill="currentColor" />
      <Text fs="sm" color="textSecondary">
        {message}
      </Text>
    </SC.messageWrapp>
  );
};
