import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={require('../fox.png')} style={{width: 100, height: 100, alignSelf: 'center', marginBottom: '5%'}}/>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.info}>Введите данные для регистрации</Text>
        <View style={styles.field}>
        <Feather name="mail" size={24} color="orange"/>
        <TextInput
          style={styles.input}
          placeholder="Почта"
          returnKeyType="done"
        />
        </View>
        <View style={styles.field}>
        <Feather name="lock" size={24} color="orange"/>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Пароль"
          returnKeyType="done"
        />
        </View>
        <View style={styles.field}>
        <Feather name="unlock" size={24} color="orange"/>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Повторите пароль"
          returnKeyType="done"
        />
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Аккаунт создан')}>
            <View style={styles.button}>
              <Text style={{ color: 'black', padding:10, fontSize: 20 }}>Регистрация</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.quest}>Уже есть аккаунт?</Text>
        <Button title='Войти' onPress={() => navigation.navigate("Авторизация")}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDAB9',
    padding: 8,
  },
  form: {
    alignContent: 'center',
    borderRadius: '2px',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    width: '90%',
    height: '85%',
    backgroundColor: 'white',
  },
  title: {
    textAlign:'center',
    marginBottom: '6%',
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 25,
    fontFamily: 'Arial'
  },
  info: {
    textAlign:'center',
    marginHorizontal: '15%',
    marginBottom: '6%',
    color: 'black',
    fontSize: 14.5,
    fontFamily: 'Arial'
  },
  quest: {
    marginTop:'15%',
    textAlign:'center',
    marginHorizontal: '15%',
    color: 'black',
    fontSize: 14.5,
    fontFamily: 'Arial'
  },
  input: {
    flex:1,
    fontSize: 15,
    height: 40,
    marginTop: '3%',
    padding: '3%',
    
  },
  button: {
    paddingHorizontal: '3%',
    marginHorizontal: '15%',
    marginTop: '10%',
    backgroundColor: 'orange',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 2
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    marginHorizontal: '15%',
    marginBottom: 10,
    paddingHorizontal: '3%',
    borderColor: 'orange',
    borderRadius: '2px',
  },
});
