import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import TimelineScreen from '../screens/TimelineScreen';
import DairyScreen from "../screens/DairyScreen";
import PhotoScreen from "../screens/PhotoScreen";
import SettingScreen from "../screens/SettingScreen";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Dairy"
        component={DairyScreen}
        options={{
          title: '哥宝的话',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          title: '时间线',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-timer" />,
        }}
      />
      <BottomTab.Screen
        name="Photo"
        component={PhotoScreen}
        options={{
          title: '照片',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-photos" />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '设置',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Setting':
      return '设置';
    case 'Photo':
      return '照片';
    case 'Timeline':
      return '时间线';
    case 'Dairy':
      return '哥宝的话';
  }
}
