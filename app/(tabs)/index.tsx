import { View, Text, StyleSheet } from 'react-native';

export default function App(){
  // Styles don't get inherited from parent tag, but if there is same child tag, then it the styles get inherited
  return (
    <View style={styles.container}>
      {/* BoxShadow Doesn't work with Android Devices, To make it work we use elevation in androidShadow */}
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance <Text style={styles.boldText}>in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBox, styles.boxShadow]}>
        <Text style={{backgroundColor:'pink', borderRadius:50}}> LightBlue Box </Text>
      </View>
      <View style={[styles.lightgreeenBox, styles.box, styles.androidShadow]}>
        <Text> LightGreen Box </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60
  },
  darkMode: {
    backgroundColor: 'black',
    color: 'white',
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 50,
  },
  lightblueBox: {
    backgroundColor: 'lightblue',
  },
  lightgreeenBox: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    shadowColor: 'red',
    elevation: 10,
  }
});