import { Tabs } from 'expo-router';

import type React from 'react';
import { Text, View } from 'react-native';
import { Routes } from '~/global';
import { Feather } from '@expo/vector-icons';

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
              <View className=" p-0 m-0 whitespace-nowrap min-w-[112px] min-h-14 mt-3 h-full flex flex-col items-center justify-center  w-full">
                <Feather name={route.icon} size={20} color="black" />
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
