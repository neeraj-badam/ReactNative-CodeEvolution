import { View, Text, StyleSheet } from 'react-native';
import Box from '@/components/Box';

export default function App(){
  // Styles don't get inherited from parent tag, but if there is same child tag, then it the styles get inherited
  return (
    // <View style={{backgroundColor: 'plum', flex: 1}}> </View>
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: '#8e9b00', paddingVertical: 100, alignSelf: 'flex-start'}}> Box 1 </Box>
      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}> Box 2 </Box>
      <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'center' }}> Box 3 </Box>
      <Box style={{ backgroundColor: '#ab9156', alignSelf: 'stretch' }}> Box 4 </Box>
      <Box style={{ backgroundColor: '#6b0803', alignSelf: 'auto' }}> Box 5 </Box>
      <Box style={{ backgroundColor: '#1c4c56' }}> Box 6 </Box>
      <Box style={{ backgroundColor: '#b95f21' }}> Box 7 </Box> */}
      {/* <Box style={{ backgroundColor: '#8e9b00', alignItems: 'flex-end'}}> Box 1 </Box>
      <Box style={{ backgroundColor: '#b65d1f', alignItems: 'flex-start'}}> Box 2 </Box>
      <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'flex-start' }}> Box 3 </Box>
      <Box style={{ backgroundColor: '#ab9156'}}> Box 4 </Box>
      <Box style={{ backgroundColor: '#6b0803'}}> Box 5 </Box>
      <Box style={{ backgroundColor: '#1c4c56'}}> Box 6 </Box>
      <Box style={{ backgroundColor: '#b95f21'}}> Box 7 </Box> */}
      {/* <Box style={{ backgroundColor: '#8e9b00', flexShrink: 1}}> Box 1 Shrink </Box>
      <Box style={{ backgroundColor: '#b65d1f', flexShrink: 3}}> Box 2 Shrink </Box>
      <Box style={{ backgroundColor: '#1c4c56', flexBasis: 140, flex: 1}}> Box 3 </Box>
      <Box style={{ backgroundColor: '#ab9156', height: 140, flex: 1}}> Box 4 </Box>
      <Box style={{ backgroundColor: '#6b0803'}}> Box 5 </Box>
      <Box style={{ backgroundColor: '#1c4c56'}}> Box 6 </Box>
      <Box style={{ backgroundColor: '#b95f21'}}> Box 7 </Box> */}
      <Box style={{ backgroundColor: '#8e9b00', top: 75, left: 75}}> Box 1 Shrink </Box>
      <Box style={{ backgroundColor: '#b65d1f'}}> Box 2 Shrink </Box>
      <Box style={{ backgroundColor: '#1c4c56'}}> Box 3 </Box>
      <Box style={{ backgroundColor: '#ab9156', top: 100, left: 100, position: 'absolute'}}> Box 4 </Box>
      <Box style={{ backgroundColor: '#6b0803'}}> Box 5 </Box>
      <Box style={{ backgroundColor: '#1c4c56'}}> Box 6 </Box>
      <Box style={{ backgroundColor: '#b95f21'}}> Box 7 </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    // flexDirection: 'row',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    // justifyContent: 'flex-start',
    alignItems: 'flex-end'
    */
  // flex: 1,
  // flexDirection: 'row',

  /*
    height: 300,
    flexWrap: 'wrap',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    alignContent: 'stretch',
  */
    /* 
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    height: 300,
    flexWrap: 'wrap',
    rowGap: 20,
    columnGap: 20,
    gap : 100,
    flexBasis: 'auto'
    */
   /*
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    */

    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
});