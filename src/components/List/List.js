import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import ListItem from '../ListItem/ListItem';

const List = ({data, isLoading}) => {
  const renderItem = ({item}) => <ListItem item={item} />;

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
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default List;
