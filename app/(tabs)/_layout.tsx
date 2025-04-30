import { Tabs } from 'expo-router';
import type React from 'react';
import { Text, View } from 'react-native';
import { Routes } from '~/global';

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {Routes.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="min-w-fit whitespace-nowrap">
                <Text>{route.label}</Text>
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
