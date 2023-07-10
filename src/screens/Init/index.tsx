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

  const searchRepos = async () => {
    if (!text) {
      dispatch(setRepositories([]));
      return;
    }
    const {data} = await api.get(`/search/repositories?q=${text}&per_page=30`);
    dispatch(setRepositories(data.items));
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 16,
        flex: 1,
      }}>
      <TextInput
        value={text}
        onChangeText={setText}
        onBlur={searchRepos}
        onSubmitEditing={searchRepos}
        placeholder="Busca por repositórios"
        style={{
          backgroundColor: '#7676801F',
          borderRadius: 8,
          paddingHorizontal: 8,
          paddingVertical: 7,
          height: 36,
        }}
      />
      <FlatList
        data={repositories}
        style={{marginTop: 25}}
        renderItem={({item}) => (
          <TouchableOpacity
            testID="buttom-navigation-repo"
            style={{marginBottom: 17}}
            onPress={() =>
              navigation.navigate('Details', {
                html_url: item.owner.html_url,
                title: item.name,
              })
            }>
            <View
              style={{
                alignContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Image
                source={{uri: item.owner.avatar_url}}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 25,
                  backgroundColor: '#D9D9D9',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#EBEBEB',
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'black',
                      textTransform: 'capitalize',
                      marginBottom: 2,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      color: '#48484A',
                      textTransform: 'capitalize',
                    }}>
                    {item.owner.login}
                  </Text>
                </View>
                <Text style={{fontWeight: '400', color: '#48484A'}}>
                  {item.stargazers_count} stars
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={() => (
          <View testID="none-repo">
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                fontSize: 32,
              }}>
              Nenhum repositórios encontrado
            </Text>
          </View>
        )}
      />
    </View>
  );
};
