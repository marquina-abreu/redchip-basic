import React, { useState } from 'react';
import { Text } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import { tabStyle, tabUnderline } from './styles';
import HeaderTest from '../../general/header';
import { ContainerBase } from '../../general/containers';
import { BLUE_DARK } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import InfoTab from './components/infoTab';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  return (
    <ContainerBase>
      <HeaderTest colorBase={BLUE_DARK} title="RedChiper" />
      <Tabs
        edgeHitWidth={0}
        initialPage={0}
        onChangeTab={({ i }) => {
          setIndex(i);
        }}
        tabBarUnderlineStyle={tabUnderline}
        tabContainerStyle={tabStyle}>
        <Tab
          heading={
            <TabHeading style={tabStyle}>
              <Text>NEW</Text>
            </TabHeading>
          }>
          <InfoTab labelTab="new" active={index} navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={tabStyle}>
              <Text>TOP</Text>
            </TabHeading>
          }>
          <InfoTab labelTab="top" active={index} navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={tabStyle}>
              <Text>HOT</Text>
            </TabHeading>
          }>
          <InfoTab labelTab="hot" active={index} navigation={navigation} />
        </Tab>
      </Tabs>
    </ContainerBase>
  );
};

export default HomeScreen;
