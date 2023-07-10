import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {Init} from '../src/screens';
import {RepositoryStateInterface, RepositoryInterface} from '../src/types';

const mockData: RepositoryInterface[] = [
  {
    id: 1,
    name: 'Repo 1',
    stargazers_count: 100,
    owner: {
      login: 'User 1',
      avatar_url: 'https://dummyimage.com/300/09f/fff.png',
      html_url: 'https://dummyimage.com/300/09f/fff.png',
    },
  },
  {
    id: 2,
    name: 'Repo 2',
    stargazers_count: 200,
    owner: {
      login: 'User 2',
      avatar_url: 'https://dummyimage.com/500/09f/fff.png',
      html_url: 'https://dummyimage.com/500/09f/fff.png',
    },
  },
];

jest.mock('react-native-webview', () => ({
  default: () => jest.fn(),
}));

describe('InitScreen', () => {
  let store: RepositoryStateInterface;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        repository: () => ({repositories: mockData}),
      },
    });
  });

  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Init navigation={{navigate: jest.fn()}} />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a list of repos', () => {
    const {getAllByTestId} = render(
      <Provider store={store}>
        <Init navigation={{navigate: jest.fn()}} />
      </Provider>,
    );

    const repoItems = getAllByTestId('buttom-navigation-repo');
    expect(repoItems).toHaveLength(mockData.length);
  });

  it('navigates to repo details when a repo is selected', () => {
    const navigate = jest.fn();
    const {getAllByTestId} = render(
      <Provider store={store}>
        <Init navigation={{navigate}} />
      </Provider>,
    );

    const firstRepo = getAllByTestId('buttom-navigation-repo')[0];
    fireEvent.press(firstRepo);

    expect(navigate).toHaveBeenCalledWith('Details', {
      html_url: mockData[0].owner.html_url,
      title: mockData[0].name,
    });
  });

  it('renders "Nenhum repositórios encontrado" when repositories list is empty', () => {
    const noneStore = configureStore({
      reducer: {
        repository: () => ({repositories: []}),
      },
    });

    const {queryByTestId} = render(
      <Provider store={noneStore}>
        <Init navigation={{navigate: jest.fn()}} />
      </Provider>,
    );

    const listEmptyComponent = queryByTestId('none-repo');
    expect(listEmptyComponent).toBeTruthy();
  });
});
