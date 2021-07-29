import React, {useState, useEffect} from 'react';

import {View} from 'react-native';

import {refreshList, sortByAuthor, sortById} from './utils/listActions';
import {getPictures} from './utils/getPictures';

import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPictures(setData, setLoading);
  }, []);

  const buttonActions = {
    refreshList: () => refreshList(setData, setLoading),
    sortByAuthor: () => sortByAuthor(setData),
    sortById: () => sortById(setData),
  };

  return (
    <View style={{flex: 1, padding: 8, paddingBottom: 0}}>
      <List style={{flex: 7}} data={data} isLoading={isLoading} />
      <Footer style={{flex: 1}} buttonActions={buttonActions} />
    </View>
  );
};

export default App;
