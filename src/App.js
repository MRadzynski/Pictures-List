import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {refreshList, sortByAuthor, sortById} from './utils/listActions';
import {getPictures} from './utils/getPictures';
import dataFormatter from './utils/dataFormatter';

import Searchbar from './components/Searchbar/Searchbar';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);
  const [sortType, setSortType] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPictures(setData, setCopiedData, setLoading);
  }, []);

  useEffect(() => {
    dataFormatter(data, sortType, query, setCopiedData);
  }, [sortType, query]);

  return (
    <View style={{flex: 1, padding: 8, paddingBottom: 0}}>
      <Searchbar query={query} setQuery={setQuery} />
      <List style={{flex: 7}} data={copiedData} isLoading={isLoading} />
      <Footer
        style={{flex: 1}}
        refreshList={() =>
          refreshList(setData, setCopiedData, setLoading, setQuery)
        }
        setSortType={setSortType}
      />
    </View>
  );
};

export default App;
