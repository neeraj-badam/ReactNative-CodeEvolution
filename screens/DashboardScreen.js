import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';

// Two types of navigation we can achieve, one is using props and the other one is useNavigation hook
export default function DashboardScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title="Open Drawer"
        onPress={ () => navigation.toggleDrawer() }
      />
      <Button title="Open Settings"
        onPress={ () => navigation.jumpTo('Settings') }
      />
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