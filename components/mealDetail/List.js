import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const List = ({ data }) => {
  return data.map((dataPoint) => 
     (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.item}>{dataPoint}</Text>
      </View>
    ))
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 4,
        marginHorizontal: 24,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#A9552B',
        backgroundColor: '#F2E8D9',
        },
    item: {
        fontSize: 16,
        textAlign: 'center',
    },
});
