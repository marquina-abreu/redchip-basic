/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { Card } from 'native-base';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ContentInfo,
  ImgReddit,
  TextChiper,
  ContainerFlat,
  contentFlex,
  ContainerImg,
} from '../styles';
import { ContainerContent } from '../../../general/containers';
import { getData } from '../../../utils/services';
import { ORANGE_REDDIT } from '../../../utils/colors';
import EmptyData from './emptyInfo';
import ImgEmpty from '../../../assets/images/imageNotFound.png';
import { waitTimeOut, handleAlert, listTypeImg } from '../../../utils/functions';

const NewsTab = props => {
  const { active: tabActive } = props;
  const [newsData, setNewsData] = useState([]);
  const [refreshing, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tabActive === 0 && newsData.length === 0) {
      getData('new.json')
        .then(res => {
          setNewsData(res.data);
          console.log('DATA response ',res);
          setLoading(false);
        })
        .catch(err => console.log('error fetch ',err));
    }
  },[tabActive, newsData]);

  const renderItems = ({ item, index }) => {
    const createdDate = item.data.created * 1000;
    const existsImg = item.data.thumbnail ? listTypeImg.includes(item.data.thumbnail.split('.').pop()) : null;
    const imageReddit = {
      uri: item.data.thumbnail,
    };
    return (
      <ContainerFlat key={index}>
        <Card style={contentFlex}>
          <ContainerImg>
            <ImgReddit exists={existsImg} source={existsImg ? imageReddit : ImgEmpty} />
          </ContainerImg>
          <ContentInfo>
            <TextChiper boldActive sizeText={17}>{item.data.title}</TextChiper>
            <Text>{createdDate && moment(createdDate).fromNow()}</Text>
            <TextChiper sizeText={13}>Comments: {item.data.num_comments}</TextChiper>
            <TextChiper sizeText={13}>Score: {item.data.score}</TextChiper>
            <View style={{
              flexDirection: 'row-reverse',
            }}>
              <TextChiper boldActive sizeText={14}>By: <TextChiper sizeText={14}>{item.data.author}</TextChiper></TextChiper>
            </View>
          </ContentInfo>
        </Card>
      </ContainerFlat>
    );
  };

  const reloadData = useCallback(() => {
    setRefresh(true);
  }, [refreshing]);

  return(
    <ContainerContent>
      {
        loading ? (
          <ActivityIndicator color={ORANGE_REDDIT} size="large" />
        ) : (
          newsData && newsData.children.length > 0 ? (
            <FlatList
              data={newsData.children}
              renderItem={renderItems}
              refreshControl={
                <RefreshControl
                  progressBackgroundColor={ORANGE_REDDIT}
                  tintColor={ORANGE_REDDIT}
                  refreshing={refreshing}
                  onRefresh={reloadData}
                />
              }
              keyExtractor={(item, index) => index.toString()}
            />
          ): (
            <EmptyData textEmpty="news" />
          )
        )
      }
    </ContainerContent>
  );
};

NewsTab.propTypes = {
  active: PropTypes.number.isRequired,
};

export default NewsTab;
