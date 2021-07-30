import React from 'react';

import {View, TextInput} from 'react-native';

import {styles} from './Searchbar.styles';

const Searchbar = ({query, setQuery}) => {
  const handleChange = e => {
    setQuery(e);
  };

  return (
    <View>
      <TextInput
        style={styles.textField}
        placeholder="Search by author"
        value={query}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Searchbar;
