import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TextLoading } from '../../../general/texts';
import { ORANGE_REDDIT } from '../../../utils/colors';

const Container = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  background-color: #00000040;
  z-index: 999999;
  elevation: 3;
`;

const ContainerIndicator = styled.View`
    background-color: white;
    height: 130px
    width: 130px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingWebView = (props) => {
  const { message } = props;
  return (
    <Container>
      <ContainerIndicator>
        <ActivityIndicator size="large" color={ORANGE_REDDIT} />
        <TextLoading>{message}</TextLoading>
      </ContainerIndicator>
    </Container>
  );
};

LoadingWebView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoadingWebView;
