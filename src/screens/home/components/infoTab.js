import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { Card } from 'native-base';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ContentInfo,
  ImgReddit,
  TextChiper,
  ContainerAuthor,
  ContainerFlat,
  contentFlex,
  ContainerImg,
  ContainerFooter,
} from '../styles';
import { screensName } from '../../../utils/constants';
import { ContainerContent } from '../../../general/containers';
import { getData } from '../../../utils/services';
import { ORANGE_REDDIT } from '../../../utils/colors';
import EmptyData from './emptyInfo';
import ImgEmpty from '../../../assets/images/imageNotFound.png';
import {
  waitTimeOut,
  handleAlert,
  listTypeImg,
  URL_REDDIT,
} from '../../../utils/functions';

const InfoTab = (props) => {
  const { active: tabActive, labelTab, navigation } = props;
  const [infoData, setInfoData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [afterData, setAfterData] = useState(null);
  const [refreshing, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (infoData.length === 0) {
      getInfo(labelTab);
    }
  }, [tabActive, infoData, labelTab]);

  const renderItems = ({ item, index }) => {
    const createdDate = item.data.created_utc * 1000;
    const existsImg = item.data.thumbnail
      ? listTypeImg.includes(item.data.thumbnail.split('.').pop())
      : null;
    const imageReddit = {
      uri: item.data.thumbnail,
    };
    const postDetail = `${URL_REDDIT}${item.data.permalink}`;
    return (
      <ContainerFlat
        onPress={() =>
          navigation.navigate(screensName.DETAIL, { detailP: postDetail })
        }
        key={index}>
        <Card style={contentFlex}>
          <ContainerImg>
            <ImgReddit
              exists={existsImg}
              source={existsImg ? imageReddit : ImgEmpty}
            />
          </ContainerImg>
          <ContentInfo>
            <TextChiper boldActive sizeText={17}>
              {item.data.title}
            </TextChiper>
            <TextChiper sizeText={13}>
              {createdDate && moment(createdDate).fromNow()}
            </TextChiper>
            <TextChiper sizeText={13}>
              Comments: {item.data.num_comments}
            </TextChiper>
            <TextChiper sizeText={13}>Score: {item.data.score}</TextChiper>
            <ContainerAuthor>
              <TextChiper boldActive sizeText={14}>
                By: <TextChiper sizeText={14}>{item.data.author}</TextChiper>
              </TextChiper>
            </ContainerAuthor>
          </ContentInfo>
        </Card>
      </ContainerFlat>
    );
  };

  /**
   * reloadData, function to reload new information from said labelTab,
   * leaving 1 second of waiting, to execute the request, for better performance
   *
   * @param {string} labelTab - labelTab value of the tab screen
   * @param {boolean} moreData - moreData value boolean if you want to bring more data
   */
  const getInfo = (labelTab, moreData = false) => {
    getData(`${labelTab}.json${moreData ? '?after=' + afterData : ''}`)
      .then((res) => {
        setInfoData(
          moreData ? [...infoData, ...res.data.children] : res.data.children,
        );
        setAfterData(res.data.after);
        setLoading(false);
        setRefresh(false);
        if (res.data.after) {
          setLoadingMore(true);
        } else {
          setLoadingMore(false);
        }
      })
      .catch((err) => {
        setRefresh(false);
        setLoading(false);
        setLoadingMore(false);
        return handleAlert('Error', err.message);
      });
  };

  /**
   * reloadData, function to reload new information from said labelTab,
   * leaving 1 second of waiting, to execute the request, for better performance
   *
   */
  const reloadData = useCallback(() => {
    setRefresh(true);
    waitTimeOut(1300).then(() => getInfo(labelTab));
  }, [refreshing, labelTab]);

  return (
    <ContainerContent>
      {loading ? (
        <ActivityIndicator color={ORANGE_REDDIT} size="large" />
      ) : infoData.length > 0 ? (
        <FlatList
          data={infoData}
          renderItem={renderItems}
          onEndReached={() =>
            loadingMore ? getInfo(labelTab, true) : console.log('no more data')
          }
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              progressBackgroundColor={ORANGE_REDDIT}
              tintColor={ORANGE_REDDIT}
              refreshing={refreshing}
              onRefresh={reloadData}
            />
          }
          ListFooterComponent={
            loadingMore ? (
              <ContainerFooter>
                <ActivityIndicator color={ORANGE_REDDIT} size="large" />
              </ContainerFooter>
            ) : null
          }
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <EmptyData textEmpty={labelTab} />
      )}
    </ContainerContent>
  );
};

InfoTab.propTypes = {
  active: PropTypes.number.isRequired,
  labelTab: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default InfoTab;
