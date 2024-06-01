// Home.js
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, Button} from 'react-native';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = context => [context.user];
const SignOutButton = () => {
  const {user, signOut} = useAuthenticator(userSelector);
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ホーム</Text>
      <Button title="検索" onPress={() => navigation.navigate('Search')} />
      <Button title="確認" onPress={() => navigation.navigate('Confirm')} />
      <SignOutButton />
    </View>
  );
};

export default withAuthenticator(Home);

// style definition
const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  todo: {marginBottom: 15},
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});