import styled from 'styled-components';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { AppContainer } from '../AppContainer/AppContainer';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  /* body & {
    overflow: hidden;
  } */
`;

export const ModalContainer = styled(AppContainer)`
/* position: relative; */
`

export const ModalBox = styled.div`
margin-left: auto;
  /* position: absolute;
  top: 0;
  right: 0; */
  /* transform: translate(-50%, -50%); */
 
  /* display: flex; */
  /* justify-content: end; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: ${p => p.theme.space[7]}px;
  width: 680px;
  height: 100vh;
  /* height: 600px; */
  /* max-height: 1200px; */
  border-radius: ${p => p.theme.radii.m};
  background-color: ${p => p.theme.colors.bgPrimary};
`;


export const ButtonCloseModal = styled(ButtonIcon)`
  margin-left: auto;

`
// export const ButtonCloseModal = styled.button`
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 30px;
//   height: 30px;
//   border: ${p => p.theme.borders.none};
//   border-radius: ${p => p.theme.radii.round};
//   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
//   background-color: ${p => p.theme.colors.bgSecondary};
//   cursor: pointer;

//   &:hover,
//   :focus {
//     background-color: ${p => p.theme.colors.accent};
//   }

//   &:active {
//     box-shadow: none;
//   }
// `;
