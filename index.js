/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Amplify初期化
import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

// Amplify日本語化
import {I18n} from 'aws-amplify/utils';
I18n.setLanguage('ja');

AppRegistry.registerComponent(appName, () => App);
