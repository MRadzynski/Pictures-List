import React from 'react';

import {View} from 'react-native';

import CustomButton from '../CustomButton/CustomButton';

import {styles} from './Footer.styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <CustomButton>Refresh list</CustomButton>
      <CustomButton>Sort by author</CustomButton>
      <CustomButton>Sort by id</CustomButton>
    </View>
  );
};

export default Footer;
