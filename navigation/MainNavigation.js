import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// SCREENS
import CountryListScreen from './../screens/CountryListScreen';
import MyMapScreen from './../screens/MyMapScreen';
import MyListScreen from './../screens/MyListScreen';
import ShareScreen from './../screens/ShareScreen';

// STYLE CONSTANTS
import { colorAqua, colorDarkGrey } from './../styles/Constants';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case 'Countries':
                iconName = 'toggle-on';
                break;
              case 'My Map':
                iconName = 'map-o';
                break;
              case 'My List':
                iconName = 'list';
                break;
              case 'Sharing':
                iconName = 'slideshare';
            }

            return <FontAwesome name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: colorAqua,
          tabBarInactiveTintColor: colorDarkGrey,
        })}
      >
        <Tab.Screen name='Countries' component={CountryListScreen} />
        <Tab.Screen name='My Map' component={MyMapScreen} />
        <Tab.Screen name='My List' component={MyListScreen} />
        <Tab.Screen name='Sharing' component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
