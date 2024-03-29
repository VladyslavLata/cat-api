import styled from "styled-components";
import { Button } from "../Button/Button";
import Image from "next/image";
import bgPreviewImg from "../../public/Vector.webp";
import bgPreviewImgMobile from "../../public/VectorMobile.webp";
import bgPreviewImgDarck from "../../public/bgPreviewImgDescDarck.webp";
import bgPreviewImgDarckMobile from "../../public/bgPreviewImgMobDarck.webp";

export const Wrapp = styled.div`
  width: 100%;
  @media (min-width: 375px) and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    width: 335px;
  }
`;

export const Title = styled.h2<{lightTheme:boolean}>`
  margin-top: ${(p) => p.theme.space[7]}px;
  margin-bottom: ${(p) => p.theme.space[7]}px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.text};
  color: ${(p) => p.lightTheme ? p.theme.colors.textPrimary : p.theme.colors.bgAccentSecondary};
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px){
    font-size: ${p=>p.theme.fontSizes.xl};
  }
`;

export const Linck = styled.a`
  color: ${(p) => p.theme.colors.testAccentPrimary};
`;

export const Form = styled.form<{ uploadStatus: boolean | null, lightTheme: boolean }>`
  position: relative;
  width: 100%;
  height: 170px;
  padding: ${(p) => `${p.theme.space[3]}px ${p.theme.space[7]}px`};
  margin-top: ${(p) => p.theme.space[7]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
  background-color: ${(p) =>
    p.uploadStatus === false
      ? (p.lightTheme ? p.theme.colors.bgAccentPrimary : p.theme.colors.bgDarkThemeAccentTransparent)
      : (p.lightTheme ? p.theme.colors.bgSecondary : p.theme.colors.bgDarkThemeTransparentSecondary)};
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='rgba(251, 224, 220, 1)' stroke-width='2' stroke-dasharray='10%2c 10' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: ${(p) => p.theme.radii.m};
  cursor: pointer;

  @media (min-width: 768px) {
    height: 350px;
    padding: ${(p) => `${p.theme.space[7]}px ${p.theme.space[10]}px`};
    margin-top: ${(p) => p.theme.space[10]}px;
    margin-bottom: ${(p) => p.theme.space[7]}px;
  }

  @media (min-width: 768px) {
    height: 320px;
  }
`;

export const PreviewBox = styled.div<{ img: string, lightTheme:boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.img === "" ? (p.lightTheme ? bgPreviewImgMobile.src : bgPreviewImgDarckMobile.src) : "none"});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${(p) => p.theme.radii.s};

  @media (min-width: 768px) {
    background-image: url(${(p) => p.img === "" ? (p.lightTheme ? bgPreviewImg.src : bgPreviewImgDarck.src) : "none"}) ;
  }
`;

export const PreviewImg = styled(Image)`
  object-fit: scale-down;
`;

export const PreviewTextWrapp = styled.div`
  @media (max-width: 767px) {
    width: 200px;
  }
`;

export const PreviewTextAccent = styled.span<{ lightTheme:boolean }>`
  color: ${(p) => p.lightTheme ? p.theme.colors.textPrimary : p.theme.colors.testAccentSecondary};
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;


export const InputUpload = styled.input`
  display: none;
`;

export const UploadBtn = styled(Button)`
  margin-top: ${(p) => p.theme.space[7]}px;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:disabled {
    background-color: ${(p) => p.theme.colors.bgAccentPrimaryTransparent};
    color: ${(p) => p.theme.colors.testAccentSecondary};
  }
`;
