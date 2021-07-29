import React from 'react';

import {View} from 'react-native';

import CustomButton from '../CustomButton/CustomButton';

import {styles} from './Footer.styles';

const Footer = ({buttonActions}) => {
  const {refreshList, sortByAuthor, sortById} = buttonActions;

  return (
    <View style={styles.container}>
      <CustomButton onPress={refreshList}>Refresh list</CustomButton>
      <CustomButton onPress={sortByAuthor}>Sort by author</CustomButton>
      <CustomButton onPress={sortById}>Sort by id</CustomButton>
    </View>
  );
};

export default Footer;
