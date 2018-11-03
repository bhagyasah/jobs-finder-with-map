import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {
  Auth, Welcome, Map, Review, Deck, Settings,
} from '../screens';

export default createBottomTabNavigator({
  Welcome,
  Auth,
  Main: createBottomTabNavigator({
    Map,
    Deck,
    Review: createStackNavigator({
      Review,
      Settings,
    }),
  }),
});
