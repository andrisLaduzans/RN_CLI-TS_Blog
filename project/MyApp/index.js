import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './src/root/Root';

AppRegistry.registerComponent(appName, () => Root);

