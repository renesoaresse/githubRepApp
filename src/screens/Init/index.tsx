import React, {useState} from 'react';
import {
  TextInput,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import api from '../../services/api';
import {RootState} from '../../store/store';
import {setRepositories} from '../../store/slices/repository';

type Props = {
  navigation: StackNavigationProp<any>;
};

export const Init = ({navigation}: Props) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const repositories = useSelector(
    (state: RootState) => state.repository.repositories,
  );
  console.log('🚀 ~ file: index.tsx:28 ~ Init ~ repositories:', repositories);

  const searchRepos = async () => {
    const {data} = await api.get(`/search/repositories?q=${text}&per_page=1`);
    dispatch(setRepositories(data.items));
  };

  return (
    <View style={{alignContent: 'center', justifyContent: 'center'}}>
      <TextInput
        value={text}
        onChangeText={setText}
        onBlur={searchRepos}
        onSubmitEditing={searchRepos}
        style={{borderWidth: 1}}
      />
      <FlatList
        data={repositories}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailsScreen', {
                  html_url: item.owner.html_url,
                })
              }>
              <Image
                source={{uri: item.owner.avatar_url}}
                style={{width: 52, height: 52, borderRadius: 25}}
              />
              <Text>{item.name}</Text>
              <Text>{item.owner.login}</Text>
              <Text>{item.stargazers_count}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};
