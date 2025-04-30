import type React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import { Searchbar } from '~/compponents/feature';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          minHeight: '100%',
        }}
      >
        <View className="p-5 flex flex-col gap-2">
          <Text className="text-xl">Canvas</Text>
          <View className="flex-1 ">
            <Searchbar />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
