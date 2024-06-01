import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>IoT検証アプリ</Text>
      <Button title="ホーム" onPress={() => navigation.navigate('Home')} />
      {/* //<Button title="検索" onPress={() => navigation.navigate('Search')} /> */}
      {/* <Button title="確認" onPress={() => navigation.navigate('Confirm')} /> */}
    </SafeAreaView>
  );
};

export default LoginScreen;
