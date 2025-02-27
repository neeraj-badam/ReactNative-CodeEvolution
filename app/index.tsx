import { SafeAreaView, StyleSheet, Text, TextInput, StatusBar, Switch, View} from 'react-native';
import { useState } from 'react';

export default function App(){
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={`email@example.com`}
        // secureTextEntry
        // keyboardType='email-address'
        // autoCorrect={false}
        // autoCapitalize='none'
      />
      <TextInput
        style={[styles.input, styles.multiLineText]}
        placeholder={`Message`}
        multiline
      />
      <Text style={styles.text}> My Name is {name} </Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}> Dark Mode </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode( (prevState) => !prevState)}
          trackColor={{ false: 'orange', true: 'violet' }}
          thumbColor={`yellow`}
        />
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});