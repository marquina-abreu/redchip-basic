import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import HeaderTest from '../../general/header';
import PropTypes from 'prop-types';
import { ContainerBase } from '../../general/containers';
import LoadingWebView from './components/loadingFloat';
import { BLUE_DARK } from '../../utils/colors';
import { URL_REDDIT } from '../../utils/functions';

const DetailScreen = ({ route }) => {
  const detailPost = route.params?.detailP ?? URL_REDDIT;
  const [loading, setLoading] = useState(true);
  return (
    <ContainerBase>
      <HeaderTest backBtn colorBase={BLUE_DARK} title="Detail" />
      {loading && <LoadingWebView message="Loading post" />}
      <WebView
        onNavigationStateChange={(data) =>
          setLoading(data && !data.loading ? false : true)
        }
        source={{ uri: detailPost }}
      />
    </ContainerBase>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      detailP: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailScreen;
