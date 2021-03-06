/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Card from '../components/Card';
import style from '../../assets/style';
import sales from '../../assets/properties.json';

const Home = function() {
  return (
    <SafeAreaView style={style.home}>
        <FlatList
          data={sales.properties}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  );
};

export default Home;
