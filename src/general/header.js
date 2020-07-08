import React from 'react';
import { Header, Left, Right, Body } from 'native-base';
import PropTypes from 'prop-types';
import { BLUE_DARK } from '../utils/colors';
import { TitleHeader } from '../general/texts';


const HeaderTest = ({
  title,
  colorBase,
}) => (
  <Header
    androidStatusBarColor={BLUE_DARK}
    style={{
      backgroundColor: colorBase,
      marginHorizontal: 12,
      borderBottomWidth: 0,
      elevation: 0,
    }}>
    <Left
      style={{
        flex: 1,
      }}>
      <TitleHeader>{title}</TitleHeader>
    </Left>
    <Body />
    <Right/>
  </Header>
);

HeaderTest.propTypes = {
  title: PropTypes.string.isRequired,
  colorBase: PropTypes.string.isRequired,
};
  
export default HeaderTest;
