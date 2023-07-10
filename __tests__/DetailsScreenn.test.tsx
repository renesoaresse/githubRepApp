import React from 'react';
import {render} from '@testing-library/react-native';

import {Details} from '../src/screens';

jest.mock('react-native-webview', () => {
  const {View} = require('react-native');
  return {
    WebView: (props: any) => {
      return <View testID="mockWebView" {...props} />;
    },
  };
});

describe('Details', () => {
  it('renders WebView with correct source', () => {
    const html_url = 'https://github.com';
    const {getByTestId, toJSON} = render(
      <Details
        route={{
          key: 'test',
          name: 'Details',
          params: {html_url},
        }}
      />,
    );

    const webView = getByTestId('mockWebView');
    expect(webView.props.source).toEqual({uri: html_url});

    expect(toJSON()).toMatchSnapshot();
  });
});
