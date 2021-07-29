import React from 'react';

import {View, Text, Image} from 'react-native';
import {styles} from './ListItem.styles';

const ListItem = ({item}) => {
  // console.log('item');
  return (
    <View style={styles.container}>
      <Image source={{uri: `${item.download_url}`}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.author}>{item.author}</Text>
        <Text>url: {item.url}</Text>
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{item.id}</Text>
      </View>
    </View>
  );
};

export default ListItem;
