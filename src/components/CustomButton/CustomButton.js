import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './CustomButton.styles';

const CustomButton = ({onPress, children}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomButton;
