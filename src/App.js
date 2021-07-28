/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <View style={{flex: 1, padding: 8, paddingBottom: 0}}>
      <List style={{flex: 7}} />
      <Footer style={{flex: 1}} />
    </View>
  );
};

export default App;
