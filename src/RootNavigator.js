import {StackNavigator} from 'react-navigation';
import MainScene from './scenes/Main';
import MenuScene from './scenes/Menu';
import LogsScene from './scenes/Logs';
import AllLocationsScene from './scenes/AllLocations';
import PendingLocationsScene from './scenes/PendingLocations';
import ConfigScene from './scenes/Config';
import Signin from './scenes/Signin';
import SignUp from './scenes/SignUp';

const RootNavigator = StackNavigator({
  Signin: {screen: Signin, navigationOptions: {headerTitle: 'Signin'}},
  Main: {screen: MainScene},
  Menu: {screen: MenuScene},
  Logs: {screen: LogsScene},
  AllLocations: {screen: AllLocationsScene},
  PendingLocations: {screen: PendingLocationsScene},
  Config: {screen: ConfigScene},
  SignUp: {screen: SignUp, navigationOptions: {headerTitle: 'SignUp'}},
});

export default RootNavigator;
