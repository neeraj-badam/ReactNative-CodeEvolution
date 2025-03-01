import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useLayoutEffect } from 'react';

export default function AboutScreen({navigation, route}) {
    console.log( route.params );
    const {name} = route.params;

    useLayoutEffect( () => {
        // We can also use useEffect, but it takes a slight delay in updating that
        navigation.setOptions({
            title: name
        })
    }, [ navigation, name ] );

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {style:{color:'black'}}]}>AboutScreen {name} </Text>
        <Button title='Update Name' onPress={ () => navigation.setParams({
            name: 'Code Evolution',
        }) }/>
        <Button
            title='Go Back with data'
            onPress={() => 
            {
                navigation.goBack();
                navigation.navigate('Home',{
                    result: 'Data from About', 
                })
            }
            }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 16,
  }
});