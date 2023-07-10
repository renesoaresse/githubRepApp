import React from 'react';
import {WebView} from 'react-native-webview';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<{params: {html_url: string}}, 'params'>;
};

export const Details = ({route}: Props) => {
  const {html_url} = route.params;

  return <WebView source={{uri: html_url}} />;
};
