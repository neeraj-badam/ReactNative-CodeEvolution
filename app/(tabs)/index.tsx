import { View, StatusBar } from 'react-native';

export default function App(){
  
  return (
    <View style={{flex: 1, backgroundColor:'plum', padding: 60}}>
      {/* The StatusBar is specific to Android devices, backgroundColor works for Android and remaining props work for both iOS and Android */}
      <StatusBar backgroundColor='green' barStyle='light-content' hidden={false}/>
      
    </View>
  );
}