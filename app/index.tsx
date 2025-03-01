import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '@/screens/DashboardScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import CourseListScreen from '@/screens/CourseListScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name='Course List'
          component={CourseListScreen}
          options={{
            tabBarLabelPosition: 'beside-icon',
            tabBarShowLabel: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'purple',
            tabBarActiveBackgroundColor:'red',
            tabBarIcon: ({color}) => <Ionicons name='person' size={20} color={color}/>,
            tabBarBadge: 3
            // Tab bar badge is used to show number of notifications
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My Profile'
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}/>
      </Tab.Navigator>
    </>
  )
}