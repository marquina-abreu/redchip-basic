import styled from 'styled-components/native';
import {ORANGE_REDDIT, COLOR_BASE_TAB, BLUE_DARK} from '../../utils/colors';

export const tabStyle = {
  backgroundColor: COLOR_BASE_TAB,
  borderTopWidth: 0,
  elevation: 0,
};
  
export const tabUnderline = {
  backgroundColor: ORANGE_REDDIT,
  height: 5,
};

export const contentFlex = {
  flexDirection: 'row',
};

export const ImgReddit = styled.Image`
  width: ${(props)=> !props.exists ? '35px' : '115px'};
  height: ${(props)=> !props.exists ? '35px' : '115px'};
  resize-mode: center;
`;

export const ContentInfo = styled.View`
  width: 80%;
  padding-horizontal: 10px;
  justify-content: space-around;
`;

export const ContainerImg = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerFlat = styled.View`
  margin-horizontal: 10px;
`;

export const TextEmpty = styled.Text`
 font-size: 23px;
 text-align: center;
 color: ${BLUE_DARK};
`;

export const TextChiper = styled.Text`
 font-size: ${(props) => props.sizeText}px;
 text-align: left;
 font-weight: ${(props) => props.boldActive ? 'bold' : '500'};
 color: ${BLUE_DARK};
`;
