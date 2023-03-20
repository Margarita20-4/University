import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  function toProfile(i) {
        navigation.navigate("Контакт " + i);
  }
  function toMyProfile() {
        navigation.navigate("Моя визитная карточка")
  }
  return(<ScrollView>
    <List.Item
    title="Маргарита Майер"
    titleStyle={{ fontWeight: 'bold', color:'blue'}}
    description="Моя визитная карточка"
    onPress={() => toMyProfile()}
    left={props => <Avatar rounded size={140} source={require('../good.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Мама"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("1")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Папа"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("2")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Сестра"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("3")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Брат"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("4")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Дедушка"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("5")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    bottomDivider
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Бабушка"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("6")}
    left={props => <Avatar rounded size={80} source={require('../good.jpg')} />}
    />
  </ScrollView>);
}