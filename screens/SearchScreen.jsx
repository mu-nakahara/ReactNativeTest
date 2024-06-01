import React from 'react';
import {View, Text, Button} from 'react-native';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>検索画面</Text>
      <Button title="ホーム" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default withAuthenticator(SearchScreen);