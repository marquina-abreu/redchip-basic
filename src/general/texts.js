import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { WHITE, BLUE_DARK } from '../utils/colors';

export const TitleHeader = styled.Text`
  font-weight: bold;
  font-size: ${Dimensions.get('window').width > 410 ? '21px' : '20px'};
  color: ${WHITE};
`;

export const TextLoading = styled.Text`
  font-size: ${Dimensions.get('window').width > 410 ? '13px' : '11px'};
  font-weight: bold;
  position: absolute;
  bottom: 20px;
  color: ${BLUE_DARK};
`;
