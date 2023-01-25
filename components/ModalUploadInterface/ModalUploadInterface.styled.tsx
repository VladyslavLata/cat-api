import styled from "styled-components";
import { Button } from "../Button/Button";

export const Title = styled.h2`
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[7]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p=>p.theme.colors.textPrimary};
`

export const Linck = styled.a`
  color: ${p=>p.theme.colors.testAccentPrimary};
`

export const Form = styled.form`
  width:300px;
  height: 200px;
  padding: 20px;
  border: 1px solid red;
`

export const PreviewBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`

export const PreviewBoxBtn = styled.button`
  
`

export const InputUpload = styled.input`
  /* display: none; */
`

export const UploadBtn = styled(Button)`
margin-top: ${p=>p.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
`