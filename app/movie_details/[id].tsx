import { useLocalSearchParams } from 'expo-router';
import type React from 'react';
import { Text, View } from 'react-native';

const Details: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex flex-col w-full h-full gap-2 justify-center items-center">
      <Text>Details Screen - {id}</Text>
    </View>
  );
};

export default Details;
