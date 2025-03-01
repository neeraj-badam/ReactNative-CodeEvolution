import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import AboutScreen from '@/screens/AboutScreen';
import { Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'

      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a51ae'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          // color: 'red',
        },
        headerRight: () => (
          <Pressable
            onPress={
              () => alert('Button Pressed')
            }
          >
            <Text style={{color: 'white', fontSize: 16}}>
              Menu
            </Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: '#e8e4f3'
        }
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Welcome Home',
          headerStyle: {
            backgroundColor: '#6a51ae'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color: 'red',
          },
          headerRight: () => (
            <Pressable
              onPress={
                () => alert('Button Pressed')
              }
            >
              <Text style={{color: 'white', fontSize: 16}}>
                Menu
              </Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: '#e8e4f3'
          }
        }}/>
        <Stack.Screen 
          name="About"
          component={AboutScreen} initialParams={{
            name:`Guest`
          }}
          />

          {/*
          If we want to change the header name on the application this is one way and another option is 
          options={
            ({route}) => ({
              title: route.params.name
            })
          }
          />
            */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
