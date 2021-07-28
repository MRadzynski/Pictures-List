import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';

import ListItem from '../ListItem/ListItem';

import {getPictures} from '../../utils/getPictures';

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPictures(setData, setLoading);
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color="#00b0ff" size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <ListItem item={item} />}
        />
      )}
    </View>
  );
};

export default List;
