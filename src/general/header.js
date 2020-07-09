import React from 'react';
import { Header, Left, Right, Body, Icon } from 'native-base';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { BLUE_DARK, WHITE } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { TitleHeader } from '../general/texts';

const iconStyle = {
  color: WHITE,
  fontSize: 22,
};

const flexStyle = {
  flex: 1,
};

const ContainerBack = styled.TouchableOpacity`
  padding-horizontal: 7px;
  padding-vertical: 4px;
`;

const HeaderTest = ({ title, colorBase, backBtn }) => {
  const navigation = useNavigation();
  return (
    <Header
      androidStatusBarColor={BLUE_DARK}
      style={{
        backgroundColor: colorBase,
        marginHorizontal: 12,
        borderBottomWidth: 0,
        elevation: 0,
      }}>
      <Left style={flexStyle}>
        {backBtn ? (
          <ContainerBack onPress={() => navigation.goBack()}>
            <Icon type="FontAwesome5" style={iconStyle} name="arrow-left" />
          </ContainerBack>
        ) : null}
      </Left>
      <Body style={flexStyle}>
        <TitleHeader>{title}</TitleHeader>
      </Body>
      <Right />
    </Header>
  );
};

HeaderTest.defaultProps = {
  backBtn: false,
};

HeaderTest.propTypes = {
  backBtn: PropTypes.bool,
  title: PropTypes.string.isRequired,
  colorBase: PropTypes.string.isRequired,
};

export default HeaderTest;
