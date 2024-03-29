import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Icon } from 'react-native-elements';
import { Divider, Card } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Contact1() {
  return (<ScrollView style={{marginTop:20}}>
    <Lightbox renderContent={()=> {
      return(
        <Image
          source={require('../good.jpg')}
          style={{ width: 400, height: 400, borderRadius: 1000}}
        />
      )
    }}>
      <Image
        source={require('../good.jpg')}
        style={{ width: 200, height: 200, borderRadius: 1000, flex:1,         justifyContent: 'center', alignSelf:'center' }}
      />
    </Lightbox>
    <Text style={{ justifyContent: 'center', alignSelf:'center', fontWeight: 'bold', fontSize:30, fontFamily:'lucida grande', margin:10}}>Мама</Text>
    <ScrollView horizontal={true} style={{flex:1, justifyContent: 'center', alignSelf:'center'}}>
      <Card>
      <Icon name='message-circle' type='feather'/>
      <Text style={{ color:'blue'}}>Сообщение</Text>
      </Card>
      <Card>
      <Icon name='phone' type='feather'/>
      <Text style={{ color:'blue'}}>Вызов</Text>
      </Card>
      <Card>
      <Icon name='mail' type='feather'/>
      <Text style={{ color:'blue'}}>Почта</Text>
      </Card>
    </ScrollView>
    <Card>
    <Text style={{ fontWeight: 'bold', color:'blue' }}>Телефон</Text>
    <Text>+79035927216</Text>
    </Card>
    <Card>
    <Text style={{ fontWeight: 'bold', color:'blue' }}>Email</Text>
    <Text>mama@mail.ru</Text>
    </Card>
  </ScrollView>
);}