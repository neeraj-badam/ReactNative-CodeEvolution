import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Two types of navigation we can achieve, one is using props and the other one is useNavigation hook
export default function HomeScreen(
  { navigation, route}

) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text>
        {route.params?.result}
      </Text>

      <Button title='Go to About' onPress={ () => navigation.navigate('About', {
        name: 'Damal',
      }) }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  }
});