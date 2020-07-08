import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {WHITE} from '../utils/colors';

export const TitleHeader = styled.Text`
    font-weight: bold;
    font-size: ${Dimensions.get('window').width > 410 ? '21px' : '20px'};
    color: ${WHITE};
`;