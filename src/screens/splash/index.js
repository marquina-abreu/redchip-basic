import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { Container, ImgLogo } from './styles';
import RnLogo from '../../assets/images/rnntaive.png';

const SplashScreen = () => {
  const spinValue = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  });

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Container>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <ImgLogo source={RnLogo} />
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
