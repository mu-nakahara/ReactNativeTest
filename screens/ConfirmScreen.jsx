import React from 'react';
import {View, Text, Button} from 'react-native';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

const ConfirmScreen = ({navigation}) => {
  return (
    <View>
      <Text>確認画面</Text>
      <Button title="ホーム" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default withAuthenticator(ConfirmScreen);