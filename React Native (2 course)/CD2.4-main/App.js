import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from './pages/selected'
import HomeScreen from './pages/list'
import MyProfile from './pages/mycard'
import Profile1 from './pages/contact1'

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Osnova = (props) => {
    return (
    <AppStack.Navigator initialRouteName='Контакты'>
    <AppStack.Screen name="Контакты" component={HomeScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name="Моя визитная карточка" component={MyProfile} />
    <AppStack.Screen name="Контакт 1" component={Profile1} />
    </AppStack.Navigator>
    );
}


const Fav = (props) => {
  return(
  <AppStack.Navigator initialRouteName='Избранное'>
  <AppStack.Screen name="Избранное" component={FavoriteScreen} options={{ headerShown: false }}/>
  <AppStack.Screen name="Контакт 1" component={Profile1} />
  </AppStack.Navigator>);
}

const DrawerNav = () => {
  return(
    <Drawer.Navigator initialRouteName='Контакты'>
      <Drawer.Screen name='Контакты' component={Osnova} />
      <Drawer.Screen name='Избранное' component={Fav} />
  </Drawer.Navigator>
  );
}

const Main = () => {
  return(<NavigationContainer>
      <DrawerNav />
 </NavigationContainer>);
}


export default Main;
