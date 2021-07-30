import React from 'react';
import {View} from 'react-native';

import CustomButton from '../CustomButton/CustomButton';

import {styles} from './Footer.styles';

const Footer = ({refreshList, setSortType}) => {
  return (
    <View style={styles.container}>
      <CustomButton onPress={refreshList}>Refresh list</CustomButton>
      <CustomButton onPress={() => setSortType('author')}>
        Sort by author
      </CustomButton>
      <CustomButton onPress={() => setSortType('id')}>Sort by id</CustomButton>
    </View>
  );
};

export default Footer;
