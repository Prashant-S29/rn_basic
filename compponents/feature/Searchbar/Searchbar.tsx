import type React from 'react';
import { useState } from 'react';

// native components
import { Text, TextInput, View } from 'react-native';
import { search } from '~/assets/icons';

export const Searchbar: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <View
      className="block items-center   h-12 justify-start gap-2 border flex-row rounded-lg "
      style={{
        paddingLeft: 15,
        borderRadius: 7,
        borderColor: '#9ca3af',
      }}
    >
      {/* <Text className="w-fit text-left">Searchbar</Text> */}
      {search}
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value={value}
        onChangeText={(text) => setValue(text)}
        className="w-full  "
      />
    </View>
  );
};
