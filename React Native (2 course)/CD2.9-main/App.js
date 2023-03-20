import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert, TextInput, Image } from 'react-native';
import './assets/flower1.jpg';



const Items = (props) => {
  return (
    <View style={{}}>
      <View style={{backgroundColor:'pink'}}>
        <Text style={styles.mainText}>{props.name}</Text>
      </View>
      <View style={styles.items}>
        <Image source={require(props.img)} style={{width: '70px', height: '70px', borderRadius: '70px', marginTop: '3%'}}/>
        <Text style={styles.text}>{props.description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const renderItem = (item) => {
    return (
      <Items
        img={item.item.img}
        name={item.item.name}
        description={item.item.description}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  const toBack = () => {
    Alert.alert("Внимание!", "Покинуть магазин?", [
      {
        text: "отмена",
        onPress: () => null,
        style: "cancel"
      },
      { 
        text: "выйти", 
        onPress: () => BackHandler.exitApp() 
    }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", toBack);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", toBack);
  }, []);


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textInput}>Цветочный магазин</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginLeft: '10%',
    fontSize: 20,
    fontFamily: 'Verdana'
  },
  items: {
    flexDirection: 'row',
    width: "100%",
    height: 100,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 450,
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontWeight: 'bold',
    width: "100%",
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
});

const data = [
  {
    id: 0,
    img: './assets/flower1.jpg',
    name: "Розы",
    description: "Роза красная ",
  },
  {
    id: 1,
    img: './assets/flower1.jpg',
    description: "Роза белая",
  },
  {
    id: 2,
    img: './assets/flower1.jpg',
    name: "Хризантемы",
    description: "Хризантема Inga",
  },
  {
    id: 3,
    img: './assets/flower1.jpg',
    description: "Хризантема Avrora",
  },
  {
    id: 4,
    img: './assets/flower1.jpg',
    name: "Тюльпаны",
    description: "Белый тюльпан",
  },
  {
    id: 5,
    img: './assets/flower1.jpg',
    name: "Пионы",
    description: "Пион Европейский",
  },
  {
    id: 6,
    img: './assets/flower1.jpg',
    description: "Пион Японский",
  },
  {
    id: 7,
    img: './assets/flower1.jpg',
    description: "Пион Махровый"
  },
];